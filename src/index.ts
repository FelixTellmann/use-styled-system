import { splitProps, hasResponsiveProps, createStyledJsxStrings } from "./_utils";
import { useEffect, useState } from "react";
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
  breakPoints?: (number)[]
  fontSizes?: (number)[]
  space?: (number)[]
}

export function useStyledSystem(props, { remBase = 10, breakPoints = [600, 900, 1200], fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72], space = [0, 4, 8, 16, 32, 64, 128, 256, 512], ...config }: config) {
  
  const { cssProps, nonCssProps } = splitProps(props);
  
  const [styleJsx, setStyleJsx] = useState<string>("");
  
  function handleResize(e) {
    if (e.matches) {
      setStyleJsx(createStyledJsxStrings(props, { remBase, breakPoints, fontSizes, space, ...config }));
    }
  }
  
  if (hasResponsiveProps(cssProps)) {
    useEffect(() => {
      breakPoints.forEach((bp) => {
        const mq = window.matchMedia(`(min-width: ${bp}px`);
        mq.addListener(handleResize);
        handleResize(mq);
      });
      
      /* return breakPoints.forEach((bp) => {
         const mq = window.matchMedia(`(min-width: ${bp}px`);
         mq.removeListener(handleResize);
       });*/
    }, []);
  }
  
  useEffect(() => {
    setStyleJsx(createStyledJsxStrings(props, { remBase, breakPoints, fontSizes, space, ...config }));
  }, [cssProps]);
  
  return { styleJsx: styleJsx || createStyledJsxStrings(props, { remBase, breakPoints, fontSizes, space, ...config }), nonCssProps };
  
}