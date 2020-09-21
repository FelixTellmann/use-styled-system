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
  border?: BorderProperty<TLength> | (BorderProperty<TLength>)[]
  borderWidth?: BorderWidthProperty<TLength> | (BorderWidthProperty<TLength>)[]
  borderColor?: BorderColorProperty | (BorderColorProperty)[]
  borderStyle?: BorderStyleProperty | (BorderStyleProperty)[]
  borderRadius?: BorderRadiusProperty<TLength> | (BorderRadiusProperty<TLength>)[]
  borderTop?: BorderTopProperty<TLength> | (BorderTopProperty<TLength>)[]
  borderTopWidth?: BorderTopWidthProperty<TLength> | (BorderTopWidthProperty<TLength>)[]
  borderTopColor?: BorderTopColorProperty | (BorderTopColorProperty)[]
  borderTopStyle?: BorderTopStyleProperty | (BorderTopStyleProperty)[]
  borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength> | (BorderTopLeftRadiusProperty<TLength>)[]
  borderTopRightRadius?: BorderTopRightRadiusProperty<TLength> | (BorderTopRightRadiusProperty<TLength>)[]
  borderBottom?: BorderBottomProperty<TLength> | (BorderBottomProperty<TLength>)[]
  borderBottomWidth?: BorderBottomWidthProperty<TLength> | (BorderBottomWidthProperty<TLength>)[]
  borderBottomColor?: BorderBottomColorProperty | (BorderBottomColorProperty)[]
  borderBottomStyle?: BorderBottomStyleProperty | (BorderBottomStyleProperty)[]
  borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength> | (BorderBottomLeftRadiusProperty<TLength>)[]
  borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength> | (BorderBottomRightRadiusProperty<TLength>)[]
  borderLeft?: BorderLeftProperty<TLength> | (BorderLeftProperty<TLength>)[]
  borderLeftWidth?: BorderLeftWidthProperty<TLength> | (BorderLeftWidthProperty<TLength>)[]
  borderLeftColor?: BorderLeftColorProperty | (BorderLeftColorProperty)[]
  borderLeftStyle?: BorderLeftStyleProperty | (BorderLeftStyleProperty)[]
  borderRight?: BorderRightProperty<TLength> | (BorderRightProperty<TLength>)[]
  borderRightWidth?: BorderRightWidthProperty<TLength> | (BorderRightWidthProperty<TLength>)[]
  borderRightColor?: BorderRightColorProperty | (BorderRightColorProperty)[]
  borderRightStyle?: BorderRightStyleProperty | (BorderRightStyleProperty)[]
  borderX?: BorderLeftProperty<TLength> & BorderRightProperty<TLength> | (BorderLeftProperty<TLength> & BorderRightProperty<TLength>)[]
  borderXWidth?: BorderLeftWidthProperty<TLength> & BorderRightWidthProperty<TLength> | (BorderLeftWidthProperty<TLength> & BorderRightWidthProperty<TLength>)[]
  borderXColor?: BorderLeftColorProperty & BorderRightColorProperty | (BorderLeftColorProperty & BorderRightColorProperty)[]
  borderXStyle?: BorderLeftStyleProperty & BorderRightStyleProperty | (BorderLeftStyleProperty & BorderRightStyleProperty)[]
  borderY?: BorderProperty<TLength> | (BorderProperty<TLength>)[]
  borderYWidth?: BorderTopWidthProperty<TLength> & BorderBottomWidthProperty<TLength> | (BorderTopWidthProperty<TLength> & BorderBottomWidthProperty<TLength>)[]
  borderYColor?: BorderTopColorProperty & BorderBottomColorProperty | (BorderTopColorProperty & BorderBottomColorProperty)[]
  borderYStyle?: BorderTopStyleProperty & BorderBottomStyleProperty | (BorderTopStyleProperty & BorderBottomStyleProperty)[]
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
  borderX: ["borderLeft", "borderRight"],
  borderXWidth: ["borderLeftWidth", "borderRightWidth"],
  borderXColor: ["borderLeftColor", "borderRightColor"],
  borderXStyle: ["borderLeftStyle", "borderRightStyle"],
  borderY: ["borderTop", "borderBottom"],
  borderYWidth: ["borderTopWidth", "borderBottomWidth"],
  borderYColor: ["borderTopColor", "borderBottomColor"],
  borderYStyle: ["borderTopStyle", "borderBottomStyle"]
};

export default Border;
