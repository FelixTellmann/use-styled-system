import Border from "./Border";
import Color from "./Color";
import Flex from "./Flex";
import Grid from "./Grid";
import Size from "./Size";
import Margin from "./Margin";
import Other from "./Other";
import Padding from "./Padding";
import Position from "./Position";
import Typography from "./Typography";
import { config } from "./index";

export { Padding, Margin, Size, Position, Flex, Grid, Border, Color, Typography, Other };

export const splitProps = (props: {}, CssOptions = Object.keys({ ...Padding, ...Margin, ...Size, ...Position, ...Flex, ...Grid, ...Border, ...Color, ...Typography, ...Other })) => {
  
  return Object.keys(props).reduce(({ cssProps, nonCssProps }, key) => {
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
    } else {
      return {
        cssProps: {
          ...cssProps
        },
        nonCssProps: {
          ...nonCssProps,
          [key]: props[key]
        }
      };
    }
  }, { cssProps: {}, nonCssProps: {} });
};

export function isEmpty(obj) {
  for (let i in obj) return false;
  return true;
}

export const hasResponsiveProps = (props) => {
  for (const key in props) {
    if (props.hasOwnProperty(key) && Array.isArray(props[key])) {
      return true;
    }
  }
  return false;
};

export const createStyledJsxStrings = (props: {}, { remBase, fontSizes, spaceSizes, breakPointIndex, ...config }: config & { breakPointIndex?: number }) => {
  /*================ Load Options ================*/
  let selectedCSSOptions: {};
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
  
  const expandToCssPropertyStrings = ((key, value) => {
    
    const convertValue = (key: string, value: number | string) => {
      function toStringAndVariables(value) {return value.toString().replace(/^--.+/, (match) => `var(${match})`);}
      
      let converter = "";
      if (selectedCSSOptions[key] === "") {
        return toStringAndVariables(value);
      } else if (Array.isArray(selectedCSSOptions[key])) {
        converter = selectedCSSOptions[key][0];
      } else {
        converter = selectedCSSOptions[key];
      }
      
      if (typeof value === "number" && value >= 0 && value <= fontSizes.length && converter === "fontSize") {
        return fontSizes[value] / remBase + "rem";
      }
      
      if (typeof value === "number" && value >= 0 && value <= spaceSizes.length && converter === "space") {
        return spaceSizes[value] / remBase + "rem";
      }
      
      if (typeof value === "number" && value > 8) {
        return value / remBase + "rem";
      }
      
      if (typeof value === "string") {
        return value.match(/(px)$/) ? +value.replace("px", "") / remBase + "rem" : toStringAndVariables(value);
      }
      
      return toStringAndVariables(value);
    };
    const toCssProperty = (key, value) => key.replace(/([A-Z])/g, (match) => "-" + match.toLowerCase()) + ": " + convertValue(key, value) + ";\n";
    if (Array.isArray(selectedCSSOptions[key])) {
      return selectedCSSOptions[key].map((k) => toCssProperty(k === "" || k === "space" || k === "fontSize"
                                                              ? key
                                                              : k, value)).join("");
    } else {
      return toCssProperty(key, value);
    }
  });
  
  return Object.entries(cssProps).reduce((acc, [key, value]) => {
    // check if responsive
    if (Array.isArray(value) && typeof window !== "undefined") {
      acc.push(expandToCssPropertyStrings(key,  value[breakPointIndex] || value[breakPointIndex] === 0 ? value[breakPointIndex] : value[value.length - 1]));
      // if not responsive
    } else {
      acc.push(expandToCssPropertyStrings(key, Array.isArray(value) ? value[0] : value));
    }
    
    return acc;
  }, []).join("");
};
