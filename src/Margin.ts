import {
  MarginBottomProperty,
  MarginLeftProperty,
  MarginProperty,
  MarginRightProperty,
  MarginTopProperty
} from "csstype";

export type MarginProperties<TLength = string | number> = {
  margin?: MarginProperty<TLength>
  marginTop?: MarginTopProperty<TLength>
  marginRight?: MarginRightProperty<TLength>
  marginBottom?: MarginBottomProperty<TLength>
  marginLeft?: MarginLeftProperty<TLength>
  marginX?: MarginLeftProperty<TLength> & MarginRightProperty<TLength>
  marginY?: MarginTopProperty<TLength> & MarginBottomProperty<TLength>
  m?: MarginProperty<TLength>
  mt?: MarginTopProperty<TLength>
  mr?: MarginRightProperty<TLength>
  mb?: MarginBottomProperty<TLength>
  ml?: MarginLeftProperty<TLength>
  mx?: MarginLeftProperty<TLength> & MarginRightProperty<TLength>
  my?: MarginTopProperty<TLength> & MarginBottomProperty<TLength>
}

export const Margin = {
  margin: "space",
  marginTop: "space",
  marginRight: "space",
  marginBottom: "space",
  marginLeft: "space",
  marginX: "space",
  marginY: "space",
  m: ['margin'],
  mt: ['marginTop'],
  mr: ['marginRight'],
  mb: ['marginBottom'],
  ml: ['marginLeft'],
  mx: ['marginLeft', 'marginRight'],
  my: ['marginTop', 'marginBottom']
};

export default Margin;