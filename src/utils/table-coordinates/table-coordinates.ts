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


