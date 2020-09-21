import {
  PaddingBottomProperty,
  PaddingLeftProperty,
  PaddingProperty,
  PaddingRightProperty,
  PaddingTopProperty
} from "csstype";

export type PaddingProperties<TLength = string | number> = {
  padding?: PaddingProperty<TLength> | (PaddingProperty<TLength>)[]
  paddingTop?: PaddingTopProperty<TLength> | (PaddingTopProperty<TLength>)[]
  paddingRight?: PaddingRightProperty<TLength> | (PaddingRightProperty<TLength>)[]
  paddingBottom?: PaddingBottomProperty<TLength> | (PaddingBottomProperty<TLength>)[]
  paddingLeft?: PaddingLeftProperty<TLength> | (PaddingLeftProperty<TLength>)[]
  paddingX?: PaddingLeftProperty<TLength> & PaddingRightProperty<TLength> | (PaddingLeftProperty<TLength> & PaddingRightProperty<TLength>)[]
  paddingY?: PaddingTopProperty<TLength> & PaddingBottomProperty<TLength> | (PaddingTopProperty<TLength> & PaddingBottomProperty<TLength>)[]
  p?: PaddingProperty<TLength> | (PaddingProperty<TLength>)[]
  pt?: PaddingTopProperty<TLength> | (PaddingTopProperty<TLength>)[]
  pr?: PaddingRightProperty<TLength> | (PaddingRightProperty<TLength>)[]
  pb?: PaddingBottomProperty<TLength> | (PaddingBottomProperty<TLength>)[]
  pl?: PaddingLeftProperty<TLength> | (PaddingLeftProperty<TLength>)[]
  px?: PaddingLeftProperty<TLength> & PaddingRightProperty<TLength> | (PaddingLeftProperty<TLength> & PaddingRightProperty<TLength>)[]
  py?: PaddingTopProperty<TLength> & PaddingBottomProperty<TLength> | (PaddingTopProperty<TLength> & PaddingBottomProperty<TLength>)[]
}

export const Padding = {
  padding: "space",
  paddingTop: "space",
  paddingRight: "space",
  paddingBottom: "space",
  paddingLeft: "space",
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  p: ['padding'],
  pt: ['paddingTop'],
  pr: ['paddingRight'],
  pb: ['paddingBottom'],
  pl: ['paddingLeft'],
  px: ['paddingLeft', 'paddingRight'],
  py: ['paddingTop', 'paddingBottom']
};

export default Padding;