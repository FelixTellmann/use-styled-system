import { CSS, splitProps, hasResponsiveProps, createStyledJsxStrings } from "./_utils";
import { useEffect, useState } from "react";

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
      () => setStyleJsx(createStyledJsxStrings(props, { remBase, breakPoints, fontSizes, space, ...config }));
    }
  }
  
  if (hasResponsiveProps(cssProps)) {
    useEffect(() => {
      breakPoints.forEach((bp) => {
        const mq = window.matchMedia(`(min-width: ${bp}px`);
        mq.addListener(handleResize);
        handleResize(mq);
      });
  
      return breakPoints.forEach((bp) => {
        const mq = window.matchMedia(`(min-width: ${bp}px`);
        mq.removeListener(handleResize);
      });
    }, []);
    
    useEffect(() => {
      setStyleJsx(createStyledJsxStrings(props, { remBase, breakPoints, fontSizes, space, ...config }));
    }, [cssProps]);
    
    return { styleJsx, nonCssProps };
  } else {
    
    useEffect(() => {
      setStyleJsx(createStyledJsxStrings(props, { remBase, breakPoints, fontSizes, space, ...config }));
    }, [cssProps]);
    
    return { styleJsx: styleJsx || createStyledJsxStrings(props, { remBase, breakPoints, fontSizes, space, ...config }), nonCssProps };
  }
}