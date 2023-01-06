import type { ComputedRef } from "vue";
import type { IColumnData } from "../column-data/IColumnData";

export interface ITableColumnsNewData {
  updateTableValues: (data: Array<IColumnData>) => void;  
  getTableValues: ComputedRef<Array<IColumnData>>; 
}
