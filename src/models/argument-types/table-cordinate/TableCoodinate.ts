export class TableCoordinate {
 private columns: Array<string>;
 private rows: number;

 constructor(columns: Array<string>) {
  this.columns = columns;
  this.rows = columns.length;
 }

 isValidTableCoordinate(coord: string) {
  const coordColumnToken = coord.split("")[0];
  const coordRowToken = Number(coord.substring(1));
  return this.columns.includes(coordColumnToken) && coordRowToken <= this.rows;
 }
}

