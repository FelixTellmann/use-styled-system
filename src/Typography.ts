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
  fontFamily?: FontFamilyProperty
  fontSize?: FontSizeProperty<TLength>
  fontWeight?: FontWeightProperty | GlobalsNumber
  lineHeight?: LineHeightProperty<TLength>
  letterSpacing?: LetterSpacingProperty<TLength>
  textAlign?: TextAlignProperty
  fontStyle?: FontStyleProperty
  textDecoration?: TextDecorationProperty<TLength>,
  textTransform?: TextTransformProperty
  whiteSpace?: WhiteSpaceProperty
  wordWrap?: WordWrapProperty
  wordBreak?: WordBreakProperty
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