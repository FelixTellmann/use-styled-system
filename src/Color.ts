import {
  BackgroundAttachmentProperty,
  BackgroundClipProperty,
  BackgroundColorProperty,
  BackgroundImageProperty,
  BackgroundOriginProperty,
  BackgroundPositionXProperty,
  BackgroundPositionYProperty,
  BackgroundProperty,
  BackgroundSizeProperty,
  BoxShadowProperty,
  ColorProperty,
  OpacityProperty,
  OutlineColorProperty,
  OutlineOffsetProperty,
  OutlineStyleProperty,
  OutlineWidthProperty,
  VisibilityProperty
} from "csstype";

export type Color<TLength = string | number> = {
  color?: ColorProperty
  background?: BackgroundProperty<TLength>
  bg?: BackgroundProperty<TLength>
  opacity?: OpacityProperty
  backgroundAttachment?: BackgroundAttachmentProperty
  backgroundClip?: BackgroundClipProperty
  backgroundColor?: BackgroundColorProperty
  backgroundImage?: BackgroundImageProperty
  backgroundOrigin?: BackgroundOriginProperty
  backgroundPositionX?: BackgroundPositionXProperty<TLength>
  backgroundPositionY?: BackgroundPositionYProperty<TLength>
  backgroundSize?: BackgroundSizeProperty<TLength>
  boxShadow?: BoxShadowProperty
  outline?: OutlineColorProperty
  outlineColor?: OutlineColorProperty
  outlineOffset?: OutlineOffsetProperty<TLength>
  outlineStyle?: OutlineStyleProperty
  outlineWidth?: OutlineWidthProperty<TLength>
  visibility?: VisibilityProperty
}

export const Color = {
  color: "",
  background: "",
  bg: "",
  opacity: "",
  backgroundAttachment: "",
  backgroundClip: "",
  backgroundColor: "",
  backgroundImage: "",
  backgroundOrigin: "",
  backgroundPositionX: "space",
  backgroundPositionY: "space",
  backgroundSize: "space",
  boxShadow: "",
  outline: "",
  outlineColor: "",
  outlineOffset: "space",
  outlineStyle: "",
  outlineWidth: "space",
  visibility: ""
};

export default Color;