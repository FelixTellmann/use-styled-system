import {
  BottomProperty,
  LeftProperty,
  OverflowXProperty,
  OverflowYProperty,
  PositionProperty,
  RightProperty,
  TopProperty,
  ZIndexProperty
} from "csstype";

export type PositionProperties<TLength = string | number> = {
  position?: PositionProperty | (PositionProperty)[]
  top?: TopProperty<TLength> | (TopProperty<TLength>)[]
  right?: RightProperty<TLength> | (RightProperty<TLength>)[]
  bottom?: BottomProperty<TLength> | (BottomProperty<TLength>)[]
  left?: LeftProperty<TLength> | (LeftProperty<TLength>)[]
  overflowX?: OverflowXProperty | (OverflowXProperty)[]
  overflowY?: OverflowYProperty | (OverflowYProperty)[]
  zIndex?: ZIndexProperty | (ZIndexProperty)[]
}

export const Position = {
  position: "",
  top: "space",
  right: "space",
  bottom: "space",
  left: "space",
  overflowX: "",
  overflowY: "",
  zIndex: ""
};

