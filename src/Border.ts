import {
  BorderBottomColorProperty,
  BorderBottomLeftRadiusProperty,
  BorderBottomProperty,
  BorderBottomRightRadiusProperty,
  BorderBottomStyleProperty,
  BorderBottomWidthProperty,
  BorderColorProperty,
  BorderLeftColorProperty,
  BorderLeftProperty,
  BorderLeftStyleProperty,
  BorderLeftWidthProperty,
  BorderProperty,
  BorderRadiusProperty,
  BorderRightColorProperty,
  BorderRightProperty,
  BorderRightStyleProperty,
  BorderRightWidthProperty,
  BorderStyleProperty,
  BorderTopColorProperty,
  BorderTopLeftRadiusProperty,
  BorderTopProperty,
  BorderTopRightRadiusProperty,
  BorderTopStyleProperty,
  BorderTopWidthProperty,
  BorderWidthProperty
} from "csstype";

export type BorderProperties<TLength = string | number> = {
  border?: BorderProperty<TLength>
  borderWidth?: BorderWidthProperty<TLength>
  borderColor?: BorderColorProperty
  borderStyle?: BorderStyleProperty
  borderRadius?: BorderRadiusProperty<TLength>
  borderTop?: BorderTopProperty<TLength>
  borderTopWidth?: BorderTopWidthProperty<TLength>
  borderTopColor?: BorderTopColorProperty
  borderTopStyle?: BorderTopStyleProperty
  borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength>
  borderTopRightRadius?: BorderTopRightRadiusProperty<TLength>
  borderBottom?: BorderBottomProperty<TLength>
  borderBottomWidth?: BorderBottomWidthProperty<TLength>
  borderBottomColor?: BorderBottomColorProperty
  borderBottomStyle?: BorderBottomStyleProperty
  borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength>
  borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength>
  borderLeft?: BorderLeftProperty<TLength>
  borderLeftWidth?: BorderLeftWidthProperty<TLength>
  borderLeftColor?: BorderLeftColorProperty
  borderLeftStyle?: BorderLeftStyleProperty
  borderRight?: BorderRightProperty<TLength>
  borderRightWidth?: BorderRightWidthProperty<TLength>
  borderRightColor?: BorderRightColorProperty
  borderRightStyle?: BorderRightStyleProperty
  borderX?: BorderLeftProperty<TLength> & BorderRightProperty<TLength>
  borderXWidth?: BorderLeftWidthProperty<TLength> & BorderRightWidthProperty<TLength>
  borderXColor?: BorderLeftColorProperty & BorderRightColorProperty
  borderXStyle?: BorderLeftStyleProperty & BorderRightStyleProperty
  borderY?: BorderProperty<TLength>
  borderYWidth?: BorderTopWidthProperty<TLength> & BorderBottomWidthProperty<TLength>
  borderYColor?: BorderTopColorProperty & BorderBottomColorProperty
  borderYStyle?: BorderTopStyleProperty & BorderBottomStyleProperty
}

export const Border = {
  border: "space",
  borderWidth: "space",
  borderColor: "",
  borderStyle: "",
  borderRadius: "space",
  borderTop: "space",
  borderTopWidth: "space",
  borderTopColor: "",
  borderTopStyle: "",
  borderTopLeftRadius: "space",
  borderTopRightRadius: "space",
  borderBottom: "space",
  borderBottomWidth: "space",
  borderBottomColor: "",
  borderBottomStyle: "",
  borderBottomLeftRadius: "space",
  borderBottomRightRadius: "space",
  borderLeft: "space",
  borderLeftWidth: "space",
  borderLeftColor: "",
  borderLeftStyle: "",
  borderRight: "space",
  borderRightWidth: "space",
  borderRightColor: "",
  borderRightStyle: "",
  borderX: "space",
  borderXWidth: "space",
  borderXColor: "",
  borderXStyle: "",
  borderY: "space",
  borderYWidth: "space",
  borderYColor: "",
  borderYStyle: ""
};

export default Border;
