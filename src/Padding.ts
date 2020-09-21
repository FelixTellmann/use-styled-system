import {
  PaddingBottomProperty,
  PaddingLeftProperty,
  PaddingProperty,
  PaddingRightProperty,
  PaddingTopProperty
} from "csstype";

export type PaddingProperties<TLength = string | number> = {
  padding?: PaddingProperty<TLength>
  paddingTop?: PaddingTopProperty<TLength>
  paddingRight?: PaddingRightProperty<TLength>
  paddingBottom?: PaddingBottomProperty<TLength>
  paddingLeft?: PaddingLeftProperty<TLength>
  paddingX?: PaddingLeftProperty<TLength> & PaddingRightProperty<TLength>
  paddingY?: PaddingTopProperty<TLength> & PaddingBottomProperty<TLength>
  p?: PaddingProperty<TLength>
  pt?: PaddingTopProperty<TLength>
  pr?: PaddingRightProperty<TLength>
  pb?: PaddingBottomProperty<TLength>
  pl?: PaddingLeftProperty<TLength>
  px?: PaddingLeftProperty<TLength> & PaddingRightProperty<TLength>
  py?: PaddingTopProperty<TLength> & PaddingBottomProperty<TLength>
}

export const Padding = {
  padding: "space",
  paddingTop: "space",
  paddingRight: "space",
  paddingBottom: "space",
  paddingLeft: "space",
  paddingX: "space",
  paddingY: "space",
  p: ['padding'],
  pt: ['paddingTop'],
  pr: ['paddingRight'],
  pb: ['paddingBottom'],
  pl: ['paddingLeft'],
  px: ['paddingLeft', 'paddingRight'],
  py: ['paddingTop', 'paddingBottom']
};

export default Padding;