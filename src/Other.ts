import {
  AppearanceProperty,
  CursorProperty,
  FillProperty,
  ObjectFitProperty, PointerEventsProperty,
  ResizeProperty,
  StrokeProperty,
  TransformProperty,
  TransitionProperty, UserSelectProperty
} from "csstype";

export type OtherProperties<TLength = string | number> = {
  fill?: FillProperty
  stroke?: StrokeProperty
  transition?: TransitionProperty
  transform?: TransformProperty
  cursor?: CursorProperty
  resize?: ResizeProperty
  objectFit?: ObjectFitProperty
  userSelect?: UserSelectProperty
  appearance?: AppearanceProperty
  pointerEvents?: PointerEventsProperty
}

export const Other = {
  fill: "",
  stroke: "",
  transition: "",
  transform: "",
  cursor: "",
  resize: "",
  objectFit: "",
  userSelect: "",
  appearance: "",
  pointerEvents: "",
};

export default Other;