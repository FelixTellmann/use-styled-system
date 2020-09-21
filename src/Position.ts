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
  position?: PositionProperty
  top?: TopProperty<TLength>
  right?: RightProperty<TLength>
  bottom?: BottomProperty<TLength>
  left?: LeftProperty<TLength>
  overflowX?: OverflowXProperty
  overflowY?: OverflowYProperty
  zIndex?: ZIndexProperty
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

export default Position