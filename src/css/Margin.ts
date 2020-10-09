import {
  MarginBottomProperty,
  MarginLeftProperty,
  MarginProperty,
  MarginRightProperty,
  MarginTopProperty
} from "csstype";

export type MarginProperties<TLength = string | number> = {
  margin?: MarginProperty<TLength> | (MarginProperty<TLength>)[]
  marginTop?: MarginTopProperty<TLength> | (MarginTopProperty<TLength>)[]
  marginRight?: MarginRightProperty<TLength> | (MarginRightProperty<TLength>)[]
  marginBottom?: MarginBottomProperty<TLength> | (MarginBottomProperty<TLength>)[]
  marginLeft?: MarginLeftProperty<TLength> | (MarginLeftProperty<TLength>)[]
  marginX?: MarginLeftProperty<TLength> & MarginRightProperty<TLength> | (MarginLeftProperty<TLength> & MarginRightProperty<TLength>)[]
  marginY?: MarginTopProperty<TLength> & MarginBottomProperty<TLength> | (MarginTopProperty<TLength> & MarginBottomProperty<TLength>)[]
  m?: MarginProperty<TLength> | (MarginProperty<TLength>)[]
  mt?: MarginTopProperty<TLength> | (MarginTopProperty<TLength>)[]
  mr?: MarginRightProperty<TLength> | (MarginRightProperty<TLength>)[]
  mb?: MarginBottomProperty<TLength> | (MarginBottomProperty<TLength>)[]
  ml?: MarginLeftProperty<TLength> | (MarginLeftProperty<TLength>)[]
  mx?: MarginLeftProperty<TLength> & MarginRightProperty<TLength> | (MarginLeftProperty<TLength> & MarginRightProperty<TLength>)[]
  my?: MarginTopProperty<TLength> & MarginBottomProperty<TLength> | (MarginTopProperty<TLength> & MarginBottomProperty<TLength>)[]
}

export const Margin = {
  margin: "space",
  marginTop: "space",
  marginRight: "space",
  marginBottom: "space",
  marginLeft: "space",
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  m: ['margin'],
  mt: ['marginTop'],
  mr: ['marginRight'],
  mb: ['marginBottom'],
  ml: ['marginLeft'],
  mx: ['marginLeft', 'marginRight'],
  my: ['marginTop', 'marginBottom']
};

