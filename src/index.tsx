import { splitProps, hasResponsiveProps, createStyledJsxStrings } from "./_utils";
import React, { useState, useEffect, createContext, useContext, FC } from "react";
import { PaddingProperties } from "./Padding";
import { MarginProperties } from "./Margin";
import { SizeProperties } from "./Size";
import { PositionProperties } from "./Position";
import { FlexProperties } from "./Flex";
import { GridProperties } from "./Grid";
import { BorderProperties } from "./Border";
import { ColorProperties } from "./Color";
import { TypographyProperties } from "./Typography";
import { OtherProperties } from "./Other";

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
  remBase?: number
  fontSizes?: (number)[]
  space?: (number)[]
}

export function useStyledSystem(props, { remBase = 10, fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72], space = [0, 4, 8, 16, 32, 64, 128, 256, 512], ...config }: config) {
  
  const { cssProps, nonCssProps } = splitProps(props);
  
  const [styleJsx, setStyleJsx] = useState<string>("");
  
  useEffect(() => {
    setStyleJsx(createStyledJsxStrings(props, { remBase, fontSizes, space, ...config }));
  }, [cssProps]);
  
  return { styleJsx: styleJsx || createStyledJsxStrings(props, { remBase, fontSizes, space, ...config }), nonCssProps };
  
}

const defaultValue = {};

const BreakpointContext = createContext(defaultValue);

type BreakPointProviderProps = {
  breakPoints: number[]
}

export const BreakpointProvider: FC<BreakPointProviderProps> = ({ children, breakPoints }) => {
  const [breakPointIndex, setBreakPointIndex] = useState(0);
  
  useEffect(() => {
    const mediaQueryLists = [];
    let isAttached = false;
    
    const handleQueryListener = () => {
      const updatedMatches = breakPoints.reduce((acc, media, index) => {
        acc = (mediaQueryLists[index] && mediaQueryLists[index].matches) ? index : acc;
        return acc;
      }, 0);
      setBreakPointIndex(updatedMatches);
    };
    
    if (window && window.matchMedia) {
      let matches = 0;
      breakPoints.forEach((bp, index) => {
        mediaQueryLists.push(window.matchMedia(`screen and (min-width: ${bp}px)${breakPoints[index + 1] && ` and (max-width: ${breakPoints[index + 1] - 1}px`}`));
        matches = mediaQueryLists[index].matches ? index : matches;
      });
      setBreakPointIndex(matches);
      isAttached = true;
      breakPoints.forEach((bp, index) => {
        mediaQueryLists[index].addListener(handleQueryListener);
      });
    }
    
    return () => {
      if (isAttached) {
        breakPoints.forEach((bp, index) => {
          mediaQueryLists[index].removeListener(handleQueryListener);
        });
      }
    };
  }, [breakPoints]);
  
  return (
      <BreakpointContext.Provider value={{ index: breakPointIndex }}>
        {children}
      </BreakpointContext.Provider>
  );
};

export const useBreakpoint = () => {
  return useContext(BreakpointContext)
};