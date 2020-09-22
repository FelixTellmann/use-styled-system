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

export type SizeProperties<TLength = string | number> = {
  display?: DisplayProperty | (DisplayProperty)[]
  d?: DisplayProperty | (DisplayProperty)[]
  width?: WidthProperty<TLength> | (WidthProperty<TLength>)[]
  w?: WidthProperty<TLength> | (WidthProperty<TLength>)[]
  height?: HeightProperty<TLength> | (HeightProperty<TLength>)[]
  h?: HeightProperty<TLength> | (HeightProperty<TLength>)[]
  size?: (HeightProperty<TLength> | WidthProperty<TLength>) | (HeightProperty<TLength> | WidthProperty<TLength>)[]
  minWidth?: MinWidthProperty<TLength> | (MinWidthProperty<TLength>)[]
  maxWidth?: MaxWidthProperty<TLength> | (MaxWidthProperty<TLength>)[]
  minHeight?: MinHeightProperty<TLength> | (MinHeightProperty<TLength>)[]
  maxHeight?: MaxHeightProperty<TLength> | (MaxHeightProperty<TLength>)[]
  minW?: MinWidthProperty<TLength> | (MinWidthProperty<TLength>)[]
  maxW?: MaxWidthProperty<TLength> | (MaxWidthProperty<TLength>)[]
  minH?: MinHeightProperty<TLength> | (MinHeightProperty<TLength>)[]
  maxH?: MaxHeightProperty<TLength> | (MaxHeightProperty<TLength>)[]
  verticalAlign?: VerticalAlignProperty<string | 0> | (VerticalAlignProperty<string | 0>)[]
}

export const Size = {
  display: "",
  d: ["display"],
  width: "space",
  w: ["width"],
  height: "space",
  h: ["height"],
  size: ["width", "height"],
  minWidth: "space",
  maxWidth: "space",
  minHeight: "space",
  maxHeight: "space",
  minW: ["minWidth"],
  maxW: ["maxWidth"],
  minH: ["minHeight"],
  maxH: ["maxHeight"],
  verticalAlign: ""
};

export default Size;