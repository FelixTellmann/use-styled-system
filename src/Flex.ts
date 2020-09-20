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

export type Flex<TLength = string | number> = {
  justifyContent?: JustifyContentProperty
  justify?: JustifyContentProperty
  alignItems?: AlignItemsProperty
  align?: AlignItemsProperty
  alignContent?: AlignContentProperty
  flexDirection?: FlexDirectionProperty
  direction?: FlexDirectionProperty
  flex?: FlexProperty<GlobalsNumber>
  flexWrap?: FlexWrapProperty
  wrap?: FlexWrapProperty
  flexBasis?: FlexBasisProperty<GlobalsNumber>
  flexGrow?: GlobalsNumber
  flexShrink?: GlobalsNumber
  alignSelf?: AlignSelfProperty
  justifySelf?: JustifySelfProperty
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