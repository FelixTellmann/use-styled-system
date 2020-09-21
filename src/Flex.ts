import {
  AlignContentProperty,
  AlignItemsProperty,
  AlignSelfProperty,
  FlexBasisProperty,
  FlexDirectionProperty,
  FlexProperty,
  FlexWrapProperty,
  GlobalsNumber,
  JustifyContentProperty,
  JustifySelfProperty
} from "csstype";

export type FlexProperties<TLength = string | number> = {
  justifyContent?: JustifyContentProperty | (JustifyContentProperty)[]
  justify?: JustifyContentProperty | (JustifyContentProperty)[]
  alignItems?: AlignItemsProperty | (AlignItemsProperty)[]
  align?: AlignItemsProperty | (AlignItemsProperty)[]
  alignContent?: AlignContentProperty | (AlignContentProperty)[]
  flexDirection?: FlexDirectionProperty | (FlexDirectionProperty)[]
  direction?: FlexDirectionProperty | (FlexDirectionProperty)[]
  flex?: FlexProperty<GlobalsNumber> | (FlexProperty<GlobalsNumber>)[]
  flexWrap?: FlexWrapProperty | (FlexWrapProperty)[]
  wrap?: FlexWrapProperty | (FlexWrapProperty)[]
  flexBasis?: FlexBasisProperty<GlobalsNumber> | (FlexBasisProperty<GlobalsNumber>)[]
  flexGrow?: GlobalsNumber
  flexShrink?: GlobalsNumber
  alignSelf?: AlignSelfProperty | (AlignSelfProperty)[]
  justifySelf?: JustifySelfProperty | (JustifySelfProperty)[]
  order?: GlobalsNumber
}

export const Flex = {
  justifyContent: "",
  justify: ['justifyContent'],
  alignItems: "",
  align: ['alignItems'],
  alignContent: "",
  flexDirection: "",
  direction: ['flexDirection'],
  flex: "",
  flexWrap: "",
  wrap: ['flexWrap'],
  flexBasis: "",
  flexGrow: "",
  flexShrink: "",
  alignSelf: "",
  justifySelf: "",
  order: ""
};

export default Flex;