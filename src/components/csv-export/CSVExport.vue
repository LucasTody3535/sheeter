<script setup lang="ts">
 import {TableCellsKey} from '@/static/symbols/static-symbols';
 import { getTableHeadings, getTableHeadingValues } from '@/utils/table-coordinates/table-coordinates';
 import { inject, ref, type Ref } from 'vue';
 import Papa from "papaparse";

 let tableCells = inject(TableCellsKey);
 let link: Ref<HTMLAnchorElement | null> = ref(null);
 let downloadLink: string;

 const dowloadAsCSV = () => {
  const headings = getTableHeadings(tableCells!.getCells.value);
  const headingsValues = getTableHeadingValues(headings, tableCells!.getCells.value);
  const cellValues: Array<Array<string>> = [];
  const columnValues: Array<Array<string>> = [];

  let cellIndex = 0;
  let headingIndex = 0;
  let lengthOfTheColumnThatHasMoreItems = 0;

  //URL.revokeObjectURL(downloadLink.value);
  headingsValues.forEach(() => {
   cellValues.push([]);
   cellIndex = cellValues.length - 1;
   tableCells!.getCells.value.forEach((tableCell) => {
    if(
     tableCell.value.trim().length > 0 &&
     !headingsValues.includes(tableCell.value.trim()) &&
     headings.at(headingIndex)!.substring(0, 1) === tableCell.dataset.cell!.substring(0, 1)
    ) {
     cellValues.at(cellIndex)!.push(tableCell.value);
    }
   });
   headingIndex++;
  });
  lengthOfTheColumnThatHasMoreItems = cellValues
   .slice(0, cellValues.length)
   .sort((elOne, elTwo) => elOne.length < elTwo.length ? 1 : -1)[0].length;
  for(let l = 0; l < lengthOfTheColumnThatHasMoreItems; l++) {
   columnValues.push([]);
   cellValues.forEach(cellValue => {
    columnValues[l].push(cellValue[l] || "");
   });
  }
  downloadLink = URL.createObjectURL(new Blob(["\ufeff", Papa.unparse({fields: headingsValues, data: columnValues})], {
   type: "text/csv;charset=utf-8;"
  }));
  link.value!.href = downloadLink;
  link.value?.click();
 }
</script>

<template>
 <i @click="dowloadAsCSV" class="ri-file-download-line"></i>
 <a ref="link" download="file.csv"></a>
</template>

<style scoped>
 a {
  display: none;
 }

 i {
  margin-left: 5px;
  font-size: 2rem;
  cursor: pointer;
 }
</style>
