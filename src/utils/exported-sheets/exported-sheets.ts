export const createCsvObjectRepresentation = (headings: Array<string>, values: Array<Array<string>>) => {
 return {
  fields: headings,
  data: values
 }
}
