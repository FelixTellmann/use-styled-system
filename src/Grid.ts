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
  gridGap?: GridGapProperty<TLength>
  gridRowGap?: GridRowGapProperty<TLength>
  gridColumnGap?: GridColumnGapProperty<TLength>
  gridColumn?: GridColumnProperty
  gridRow?: GridRowProperty
  gridArea?: GridAreaProperty
  gridAutoFlow?: GridAutoFlowProperty
  gridAutoRows?: GridAutoRowsProperty<TLength>
  gridAutoColumns?: GridAutoColumnsProperty<TLength>
  gridTemplateRows?: GridTemplateRowsProperty<TLength>
  gridTemplateColumns?: GridTemplateColumnsProperty<TLength>
  gridTemplateAreas?: GridTemplateAreasProperty
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

export default Grid