import React, { FC, useEffect, useState } from "react";
import { ConfigProps, createStyledJsxStrings, splitProps } from "./_utils";
import {
  BorderProperties,
  ColorProperties,
  FlexProperties,
  GridProperties,
  MarginProperties,
  OtherProperties,
  PaddingProperties,
  PositionProperties,
  SizeProperties,
  TypographyProperties
} from "./css";

export {
  BorderProperties,
  ColorProperties,
  FlexProperties,
  GridProperties,
  MarginProperties,
  OtherProperties,
  PaddingProperties,
  PositionProperties,
  SizeProperties,
  TypographyProperties
};

export type Space = PaddingProperties & MarginProperties & SizeProperties;
export type Layout = PositionProperties & FlexProperties & GridProperties;
export type Decor = BorderProperties & ColorProperties & TypographyProperties;
export type All = Space & Layout & Decor & OtherProperties;
export type CSS = All;

const BreakpointContext = React.createContext(0);

type BreakPointProviderProps = {
  breakPoints: number[];
};

const BreakpointProvider: FC<BreakPointProviderProps> = ({ children, breakPoints }) => {
  const [breakPointIndex, setBreakPointIndex] = useState(0);
  
  useEffect(() => {
    const mediaQueryLists = [];
    let isAttached = false;
    
    const handleQueryListener = () => {
      const updatedMatches = breakPoints.reduce((acc: number, media, index) => {
        acc = mediaQueryLists[index] && mediaQueryLists[index].matches ? index : acc;
        return acc;
      }, 0);
      setBreakPointIndex(updatedMatches);
      
    };
    
    if (window && window.matchMedia) {
      let matches = 0;
      breakPoints.forEach((bp, index) => {
        mediaQueryLists.push(window.matchMedia(`screen and (min-width: ${bp}px)${breakPoints[index + 1]
                                                                                 ? ` and (max-width: ${breakPoints[index + 1] - 1}px`
                                                                                 : ""}`)
        );
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
  
  return <BreakpointContext.Provider value={breakPointIndex}>{children}</BreakpointContext.Provider>;
};

type UseStyledSystemProps = {
  styleJsx: string;
  nonCssProps: any;
};

const useStyledSystem = (props: unknown, {
  remBase = 10, fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72], spaceSizes = [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
    512
  ], ...config
}: ConfigProps | undefined): UseStyledSystemProps => {
  const breakPointIndex = React.useContext(BreakpointContext);
  const { cssProps, nonCssProps } = splitProps(props);
  const [styleJsx, setStyleJsx] = useState<string>("");
  
  useEffect(() => {
    setStyleJsx(
        createStyledJsxStrings(cssProps, {
          remBase,
          fontSizes,
          spaceSizes,
          breakPointIndex,
          ...config
        })
    );
  }, [breakPointIndex, config, cssProps, fontSizes, remBase, spaceSizes]);
  
  return {
    styleJsx:
        styleJsx ||
        createStyledJsxStrings(props, {
          remBase,
          fontSizes,
          spaceSizes,
          breakPointIndex,
          ...config
        }),
    nonCssProps
  };
};

export { BreakpointProvider, useStyledSystem, BreakpointContext };
