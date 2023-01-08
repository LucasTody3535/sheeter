export const createMissingCoordinates = (initialCoord: string, finalCoordinate: string) => {
 const column = finalCoordinate.trim().split("")[0];
 const initialRow = Number(initialCoord.trim().substring(1));
 const finalRow = Number(finalCoordinate.trim().substring(1));
 const cells: Array<string> = [];
 for(let i = 1; i <= finalRow; i++) {
  if(i >= initialRow) cells.push(`${column}${i}`);
 }
 return cells;
}

export const isInitialCoordinateBelowThanFinalCoordinate = (initialCoord: string, finalCoord: string) => {
 return Number(initialCoord.trim().substring(1)) < Number(finalCoord.trim().substring(1));
}

export const getTableHeadings = (data: Array<HTMLInputElement>): Array<string> => {
 const headings = new Array<string>();
 const headingsSet = new Set<string>();
 data.forEach(el => {
  if(el.value.trim().length > 0) {
    headingsSet.add(`${el.dataset.cell!.substring(0, 1)}1`);
  }
 });
 headingsSet.forEach(el => headings.push(el));
 return headings;
}

export const getTableHeadingValues = (data: Array<string>, tableCells: Array<HTMLInputElement>): Array<string> => {
 const headingsValues: Array<string> = [];
 data.forEach((el) => {
  if(tableCells.find((tableCell) => tableCell.dataset.cell === el)!.value) {
   headingsValues.push(tableCells.find((tableCell) => tableCell.dataset.cell === el)!.value);
  } else headingsValues.push("unknown");
 })
 return headingsValues;
}

