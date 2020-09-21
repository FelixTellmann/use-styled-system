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
  fill?: FillProperty | (FillProperty)[]
  stroke?: StrokeProperty | (StrokeProperty)[]
  transition?: TransitionProperty | (TransitionProperty)[]
  transform?: TransformProperty | (TransformProperty)[]
  cursor?: CursorProperty | (CursorProperty)[]
  resize?: ResizeProperty | (ResizeProperty)[]
  objectFit?: ObjectFitProperty | (ObjectFitProperty)[]
  userSelect?: UserSelectProperty | (UserSelectProperty)[]
  appearance?: AppearanceProperty | (AppearanceProperty)[]
  pointerEvents?: PointerEventsProperty | (PointerEventsProperty)[]
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