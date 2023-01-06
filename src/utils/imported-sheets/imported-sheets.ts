interface ExtendedObject {
 [index: string]: string
}

export const createColumnValues = (field: string, src: Array<Object>): Array<string> => {
 const arr = src.map(el => (el as ExtendedObject)[field]);
 arr.unshift(field);
 return arr;
}

