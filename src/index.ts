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
import { useEffect, useState } from "react";

export type Space = PaddingProperties & MarginProperties & SizeProperties
export type Layout = PositionProperties & FlexProperties & GridProperties
export type Decor = BorderProperties & ColorProperties & TypographyProperties
export type All = Space & Layout & Decor & OtherProperties
export type CSS = All

export type config = {
  Padding?: boolean
  Margin?: boolean
  Size?: boolean
  Space?: boolean
  
  Position?: boolean
  Flex?: boolean
  Grid?: boolean
  Layout?: boolean
  
  Border?: boolean
  Color?: boolean
  Typography?: boolean
  Decor?: boolean
  
  Other?: boolean
  All?: boolean
}

export const filterCSSProps = (props: {}, CssOptions = Object.keys({ ...Padding, ...Margin, ...Size, ...Position, ...Flex, ...Grid, ...Border, ...Color, ...Typography, ...Other })) => {
  return Object.keys(props)
      .filter(key => CssOptions.includes(key))
      .reduce((acc, key) => {
        return {
          ...acc,
          [key]: props[key]
        };
      }, {});
};

export const cleanCSSProps = (props: {}, CssOptions = Object.keys({ ...Padding, ...Margin, ...Size, ...Position, ...Flex, ...Grid, ...Border, ...Color, ...Typography, ...Other })) => {
  return Object.keys(props)
      .filter(key => !CssOptions.includes(key))
      .reduce((acc, key) => {
        
        return {
          ...acc,
          [key]: props[key]
        };
      }, {});
};

function isEmpty(obj) {
  for (let i in obj) return false;
  return true;
}

export const createStyledJsxStrings = (props: {}, config: config = {}, remBase: number = 10) => {
  /*================ Load Options ================*/
  const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72];
  const breakPoints = [600, 900, 1200];
  const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
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
  
  const filteredProps: CSS = filterCSSProps(props, Object.keys(selectedCSSOptions));
  
  const convertValue = (key: string, value: number | string) => {
    if (selectedCSSOptions[key] === "") return value.toString();
    
    if (typeof value === "number" && value >= 1 && value <= 8 && selectedCSSOptions[key] === "fontSize") {
      return fontSizes[value] / remBase + "rem";
    }
    
    if (typeof value === "number" && value >= 1 && value <= 8 && selectedCSSOptions[key] === "space") {
      return space[value] / remBase + "rem";
    }
    
    if (typeof value === "number" && value > 8) {
      return value / remBase + "rem";
    }
    
    if (typeof value === "string") {
      return value.match(/(px)$/) ? +value.replace("px", "") / remBase + "rem" : value.toString();
    }
    
    return value.toString();
  };
  
  const toCssProperty = (key, value) => key.replace(/([A-Z])/g, (match) => "-" + match.toLowerCase()) + ": " + convertValue(key, value) + ";\n";
  const filterAbbreviations = ((key, value) => {
    if (Array.isArray(selectedCSSOptions[key])) {
      return selectedCSSOptions[key].map((k) => toCssProperty(k, value)).join("");
    } else {
      return toCssProperty(key, value);
    }
  });
  
  return Object.entries(filteredProps).reduce((acc, [key, value]) => {
    
    let valueArray = [];
    
    if (Array.isArray(value)) {
      for (let i = 0; i < breakPoints.length; i++) {
        valueArray.push(value.length > i ? value[i] : value[value.length - 1]);
      }
    } else {
      valueArray = [value, value, value];
    }
    
    if (typeof window === "undefined") {
      acc.push(filterAbbreviations(key, valueArray[0]));
    } else {
      breakPoints.forEach((bp, index) => {
        if (window.innerWidth > (breakPoints[index - 1] || 0) && window.innerWidth <= bp) {
          acc.push(filterAbbreviations(key, valueArray[index]));
        }
      });
    }
    
    return acc;
  }, []).join("");
};

export function useStyledSystem(props, config, remBase) {
  const [styleJsx, setStyleJsx] = useState<string>("");
  const cleanProps = { ...cleanCSSProps(props) };
  const cssProps: CSS = { ...cleanCSSProps(props) };
  
  useEffect(() => {
    setStyleJsx(createStyledJsxStrings(props, config, remBase))
  });
  
  return { styleJsx, cleanProps };
}