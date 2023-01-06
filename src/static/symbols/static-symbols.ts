import type { ITableColumnsNewData } from "@/interfaces/table-columns-new-data/ITableColumnsNewData";
import type { InjectionKey } from "vue";

export const TableColumnsNewDataKey: InjectionKey<ITableColumnsNewData> = Symbol("columnValues");

