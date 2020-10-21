import autoprefixer from "autoprefixer";
import postcss from "postcss-js";
import { Border, Color, Flex, Grid, Margin, Other, Padding, Position, Size, Typography } from "./css";

export type ConfigProps = {
  Padding?: boolean;
  Margin?: boolean;
  Size?: boolean;
  Space?: boolean;
  
  Position?: boolean;
  Flex?: boolean;
  Grid?: boolean;
  Layout?: boolean;
  
  Border?: boolean;
  Color?: boolean;
  Typography?: boolean;
  Decor?: boolean;
  
  Other?: boolean;
  All?: boolean;
  
  remBase?: number;
  fontSizes?: number[];
  spaceSizes?: number[];
};

export const splitProps = (
    props: unknown,
    CssOptions = Object.keys({ ...Padding, ...Margin, ...Size, ...Position, ...Flex, ...Grid, ...Border, ...Color, ...Typography, ...Other })
) => {
  return Object.keys(props).reduce(
      ({ cssProps, nonCssProps }, key) => {
        if (CssOptions.includes(key)) {
          return {
            cssProps: {
              ...cssProps,
              [key]: props[key]
            },
            nonCssProps: {
              ...nonCssProps
            }
          };
        }
        return {
          cssProps: {
            ...cssProps
          },
          nonCssProps: {
            ...nonCssProps,
            [key]: props[key]
          }
        };
      },
      {
        cssProps: {},
        nonCssProps: {}
      }
  );
};

export function isEmpty(obj): boolean {
  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const i in obj) return false;
  return true;
}

export const hasResponsiveProps = (props) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key) && Array.isArray(props[key])) {
      return true;
    }
  }
  return false;
};

export const createStyledJsxStrings = (props: unknown, { remBase, fontSizes, spaceSizes, breakPointIndex, ...config }: ConfigProps & { breakPointIndex?: number }) => {
  /*= =============== Load Options ================ */
  let selectedCSSOptions: unknown;
  if (isEmpty(config)) {
    selectedCSSOptions = { ...Padding, ...Margin, ...Size, ...Position, ...Flex, ...Grid, ...Border, ...Color, ...Typography, ...Other };
  }
  selectedCSSOptions = Object.entries(config).reduce((acc, [key, value]) => {
    if (!value) return acc;
    if (key === "Padding") {
      acc = { ...acc, ...Padding };
    }
    if (key === "Margin") {
      acc = { ...acc, ...Margin };
    }
    if (key === "Size") {
      acc = { ...acc, ...Size };
    }
    if (key === "Space") {
      acc = { ...acc, ...Padding, ...Margin, ...Size };
    }
    if (key === "Position") {
      acc = { ...acc, ...Position };
    }
    if (key === "Flex") {
      acc = { ...acc, ...Flex };
    }
    if (key === "Grid") {
      acc = { ...acc, ...Grid };
    }
    if (key === "Layout") {
      acc = { ...acc, ...Position, ...Flex, ...Grid };
    }
    if (key === "Border") {
      acc = { ...acc, ...Border };
    }
    if (key === "Color") {
      acc = { ...acc, ...Color };
    }
    if (key === "Typography") {
      acc = { ...acc, ...Typography };
    }
    if (key === "Decor") {
      acc = { ...acc, ...Border, ...Color, ...Typography };
    }
    if (key === "other") {
      acc = { ...acc, ...Other };
    }
    if (key === "All") {
      acc = { ...acc, ...Padding, ...Margin, ...Size, ...Position, ...Flex, ...Grid, ...Border, ...Color, ...Typography, ...Other };
    }
    return acc;
  }, {});
  const { cssProps } = splitProps(props, Object.keys(selectedCSSOptions));
  const toStringAndVariables = (value: string | number): string => value.toString().replace(/^--.+/, (match) => `var(${match})`);
  const convertValue = (key: string, value: number | string) => {
    let converter = "";
    if (selectedCSSOptions[key] === "") {
      return toStringAndVariables(value);
    }
    if (Array.isArray(selectedCSSOptions[key])) {
      [converter] = selectedCSSOptions[key];
    } else {
      converter = selectedCSSOptions[key];
    }
    
    if (typeof value === "number" && value >= 0 && value <= fontSizes.length && converter === "fontSize") {
      return `${fontSizes[value] / remBase}rem`;
    }
    
    if (typeof value === "number" && value >= 0 && value <= spaceSizes.length && converter === "space") {
      return `${spaceSizes[value] / remBase}rem`;
    }
    
    if (typeof value === "number" && value > 8) {
      return `${value / remBase}rem`;
    }
    
    if (typeof value === "string") {
      // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
      return value.match(/(px)$/) ? `${+value.replace("px", "") / remBase}rem` : toStringAndVariables(value);
    }
    
    return toStringAndVariables(value);
  };
  const toCssProperty = (key, value): string => `${key.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`)}: ${convertValue(key, value)};\n`;
  
  const expandToCssPropertyStrings = (key, value): string => {
    if (Array.isArray(selectedCSSOptions[key])) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return selectedCSSOptions[key].map((k) => toCssProperty(k === "" || k === "space" || k === "fontSize" ? key : k, value)).join("");
    }
    
    /* const result = postcss([autoprefixer]).process(toCssProperty(key, value)).then(({ css }) => css).toString(); */
    const prefixer = postcss.sync([autoprefixer])
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return prefixer(toCssProperty(key, value));
  };
  
  return Object.entries(cssProps).reduce((acc: string[], [key, value]) => {
    // check if responsive
    if (Array.isArray(value) && typeof window !== "undefined") {
      acc.push(
          expandToCssPropertyStrings(key, value[breakPointIndex] || value[breakPointIndex] === 0
                                          ? value[breakPointIndex]
                                          : value[value.length - 1])
      );
      // if not responsive
    } else {
      acc.push(expandToCssPropertyStrings(key, Array.isArray(value) ? value[0] : value));
    }
    
    return acc;
  }, []).join("");
};
