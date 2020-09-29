import Border, { BorderProperties } from "./Border";
import Color, { ColorProperties } from "./Color";
import Flex, { FlexProperties } from "./Flex";
import Grid, { GridProperties } from "./Grid";
import Size, { SizeProperties } from "./Size";
import Margin, { MarginProperties } from "./Margin";
import Other, { OtherProperties } from "./Other";
import Padding, { PaddingProperties } from "./Padding";
import Position, { PositionProperties } from "./Position";
import Typography, { TypographyProperties } from "./Typography";
import { config } from "./index";

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

export const createStyledJsxStrings = (props: {}, { remBase, breakPoints, fontSizes, space, ...config }: config) => {
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
      
      if (typeof value === "number" && value >= 1 && value <= 8 && converter === "fontSize") {
        return fontSizes[value] / remBase + "rem";
      }
      
      if (typeof value === "number" && value >= 1 && value <= 8 && converter === "space") {
        return space[value] / remBase + "rem";
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
    if (Array.isArray(value)) {
      if (typeof window === "undefined") {
        acc.push(expandToCssPropertyStrings(key, value[0]));
      } else {
        breakPoints.forEach((bp, index) => {
          // if window is loaded
          const mq = window.matchMedia(`screen and (min-width: ${bp}px)${breakPoints[index + 1] && ` and (max-width: ${breakPoints[index + 1]}px`}`);
          
          mq.matches
          ? acc.push(expandToCssPropertyStrings(key, value[index + 1] || value[value.length - 1]))
          : acc.push(expandToCssPropertyStrings(key, value[0]));
          
          mq.addListener((e) => {
            e.matches
            ? acc.push(expandToCssPropertyStrings(key, value[index + 1] || value[value.length - 1]))
            : acc.push(expandToCssPropertyStrings(key, value[0]));
          });
        });
      }
      // if not responsive
    } else {
      acc.push(expandToCssPropertyStrings(key, value));
    }
    
    return acc;
  }, []).join("");
};