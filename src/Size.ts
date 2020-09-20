import {
  DisplayProperty,
  HeightProperty,
  MaxHeightProperty,
  MaxWidthProperty,
  MinHeightProperty,
  MinWidthProperty,
  VerticalAlignProperty,
  WidthProperty
} from "csstype";

export type Size<TLength = string | number> = {
  display?: DisplayProperty
  d?: DisplayProperty
  width?: WidthProperty<TLength>
  w?: WidthProperty<TLength>
  height?: HeightProperty<TLength>
  h?: HeightProperty<TLength>
  minWidth?: MinWidthProperty<TLength>
  maxWidth?: MaxWidthProperty<TLength>
  minHeight?: MinHeightProperty<TLength>
  maxHeight?: MaxHeightProperty<TLength>
  minW?: MinWidthProperty<TLength>
  maxW?: MaxWidthProperty<TLength>
  minH?: MinHeightProperty<TLength>
  maxH?: MaxHeightProperty<TLength>
  verticalAlign?: VerticalAlignProperty<string | 0>
}

export const Size = {
  display: "",
  d: ['display'],
  width: "space",
  w: ['width'],
  height: "space",
  h: ['height'],
  size: ['width', 'height'],
  minWidth: "space",
  maxWidth: "space",
  minHeight: "space",
  maxHeight: "space",
  minW: ['minWidth'],
  maxW: ['maxWidth'],
  minH: ['minHeight'],
  maxH: ['maxHeight'],
  verticalAlign: ""
};

export default Size;