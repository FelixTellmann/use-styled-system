import {
  GridAreaProperty,
  GridAutoColumnsProperty,
  GridAutoFlowProperty,
  GridAutoRowsProperty,
  GridColumnGapProperty,
  GridColumnProperty,
  GridGapProperty,
  GridRowGapProperty,
  GridRowProperty,
  GridTemplateAreasProperty,
  GridTemplateColumnsProperty,
  GridTemplateRowsProperty
} from "csstype";

export type GridProperties<TLength = string | number> = {
  gridGap?: GridGapProperty<TLength> | (GridGapProperty<TLength>)[]
  gridRowGap?: GridRowGapProperty<TLength> | (GridRowGapProperty<TLength>)[]
  gridColumnGap?: GridColumnGapProperty<TLength> | (GridColumnGapProperty<TLength>)[]
  gridColumn?: GridColumnProperty | (GridColumnProperty)[]
  gridRow?: GridRowProperty | (GridRowProperty)[]
  gridArea?: GridAreaProperty | (GridAreaProperty)[]
  gridAutoFlow?: GridAutoFlowProperty | (GridAutoFlowProperty)[]
  gridAutoRows?: GridAutoRowsProperty<TLength> | (GridAutoRowsProperty<TLength>)[]
  gridAutoColumns?: GridAutoColumnsProperty<TLength> | (GridAutoColumnsProperty<TLength>)[]
  gridTemplateRows?: GridTemplateRowsProperty<TLength> | (GridTemplateRowsProperty<TLength>)[]
  gridTemplateColumns?: GridTemplateColumnsProperty<TLength> | (GridTemplateColumnsProperty<TLength>)[]
  gridTemplateAreas?: GridTemplateAreasProperty | (GridTemplateAreasProperty)[]
}

export const Grid = {
  gridGap: "space",
  gridRowGap: "space",
  gridColumnGap: "space",
  gridColumn: "",
  gridRow: "",
  gridArea: "",
  gridAutoFlow: "",
  gridAutoRows: "",
  gridAutoColumns: "",
  gridTemplateRows: "",
  gridTemplateColumns: "",
  gridTemplateAreas: ""
};

