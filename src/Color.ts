import {
  BackdropFilterProperty,
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

export type ColorProperties<TLength = string | number> = {
  color?: ColorProperty | (ColorProperty)[]
  background?: BackgroundProperty<TLength> | (BackgroundProperty<TLength>)[]
  bg?: BackgroundProperty<TLength> | (BackgroundProperty<TLength>)[]
  opacity?: OpacityProperty | (OpacityProperty)[]
  backgroundAttachment?: BackgroundAttachmentProperty | (BackgroundAttachmentProperty)[]
  backgroundClip?: BackgroundClipProperty | (BackgroundClipProperty)[]
  ['-webkit-background-clip']?: BackgroundClipProperty | (BackgroundClipProperty)[]
  backgroundColor?: BackgroundColorProperty | (BackgroundColorProperty)[]
  backgroundImage?: BackgroundImageProperty | (BackgroundImageProperty)[]
  backgroundOrigin?: BackgroundOriginProperty | (BackgroundOriginProperty)[]
  backgroundPositionX?: BackgroundPositionXProperty<TLength> | (BackgroundPositionXProperty<TLength>)[]
  backgroundPositionY?: BackgroundPositionYProperty<TLength> | (BackgroundPositionYProperty<TLength>)[]
  backgroundSize?: BackgroundSizeProperty<TLength> | (BackgroundSizeProperty<TLength>)[]
  backdropFilter?: BackdropFilterProperty
  ['-webkit-backdropFilter']?: BackdropFilterProperty
  boxShadow?: BoxShadowProperty | (BoxShadowProperty)[]
  outline?: OutlineColorProperty | (OutlineColorProperty)[]
  outlineColor?: OutlineColorProperty | (OutlineColorProperty)[]
  outlineOffset?: OutlineOffsetProperty<TLength> | (OutlineOffsetProperty<TLength>)[]
  outlineStyle?: OutlineStyleProperty | (OutlineStyleProperty)[]
  outlineWidth?: OutlineWidthProperty<TLength> | (OutlineWidthProperty<TLength>)[]
  visibility?: VisibilityProperty | (VisibilityProperty)[]
}

export const Color = {
  color: "",
  background: "",
  bg: ['background'],
  opacity: "",
  backgroundAttachment: "",
  backgroundClip: ["", '-webkit-background-clip'],
  ['-webkit-background-clip']: "",
  backgroundColor: "",
  backgroundImage: "",
  backgroundOrigin: "",
  backgroundPositionX: "space",
  backgroundPositionY: "space",
  backgroundSize: "space",
  backdropFilter: ["", '-webkit-backdropFilter'],
  ['-webkit-backdropFilter']: "",
  boxShadow: "",
  outline: "",
  outlineColor: "",
  outlineOffset: "space",
  outlineStyle: "",
  outlineWidth: "space",
  visibility: ""
};

export default Color;