import type { ComputedRef } from "vue"

export interface TableCells {
 changeCells: (data: Array<HTMLInputElement>) => void
 getCells: ComputedRef<Array<HTMLInputElement>>
}
