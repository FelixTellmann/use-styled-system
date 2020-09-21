import {
  FontFamilyProperty,
  FontSizeProperty,
  FontStyleProperty,
  FontWeightProperty,
  GlobalsNumber,
  LetterSpacingProperty,
  LineHeightProperty,
  TextAlignProperty,
  TextDecorationProperty,
  TextTransformProperty,
  WhiteSpaceProperty,
  WordBreakProperty,
  WordWrapProperty
} from "csstype";

export type TypographyProperties<TLength = string | number> = {
  fontFamily?: FontFamilyProperty | (FontFamilyProperty)[]
  fontSize?: FontSizeProperty<TLength> | (FontSizeProperty<TLength>)[]
  fontWeight?: FontWeightProperty | GlobalsNumber | (FontWeightProperty | GlobalsNumber)[]
  lineHeight?: LineHeightProperty<TLength> | (LineHeightProperty<TLength>)[]
  letterSpacing?: LetterSpacingProperty<TLength> | (LetterSpacingProperty<TLength>)[]
  textAlign?: TextAlignProperty | (TextAlignProperty)[]
  fontStyle?: FontStyleProperty | (FontStyleProperty)[]
  textDecoration?: TextDecorationProperty<TLength> | (TextDecorationProperty<TLength>)[]
  textTransform?: TextTransformProperty | (TextTransformProperty)[]
  whiteSpace?: WhiteSpaceProperty | (WhiteSpaceProperty)[]
  wordWrap?: WordWrapProperty | (WordWrapProperty)[]
  wordBreak?: WordBreakProperty | (WordBreakProperty)[]
}

export const Typography = {
  fontFamily: "",
  fontSize: "fontSize",
  fontWeight: "",
  lineHeight: "",
  letterSpacing: "",
  textAlign: "",
  fontStyle: "",
  textDecoration: "",
  textTransform: "",
  whiteSpace: "",
  wordWrap: "",
  wordBreak: ""
};

export default Typography