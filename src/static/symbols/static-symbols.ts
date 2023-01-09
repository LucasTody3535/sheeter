import type { TableCells } from "@/interfaces/table-cells/TableCells";
import type { ITableColumnsNewData } from "@/interfaces/table-columns-new-data/ITableColumnsNewData";
import type { UpdatableInjectedValue } from "@/interfaces/updatable-injected-value/UpdatableInjectedValue";
import type { InjectionKey } from "vue";

export const TableColumnsNewDataKey: InjectionKey<ITableColumnsNewData> = Symbol("columnValues");
export const TableCellsKey: InjectionKey<TableCells> = Symbol("tableCells");
export const SelectedTableCell: InjectionKey<UpdatableInjectedValue<HTMLInputElement | null>> = Symbol("selectedTableCell");
export const SelectedTableColumn: InjectionKey<UpdatableInjectedValue<Array<HTMLInputElement> | null>> = Symbol("selectedTableColumn");

