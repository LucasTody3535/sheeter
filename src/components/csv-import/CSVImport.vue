<script setup lang="ts">
 import { type Ref, ref, onMounted, inject} from 'vue';
 import Papa from "papaparse";
 import { createColumnValues } from '@/utils/imported-sheets/imported-sheets';
 import { LETTERS } from '@/static/letters/static-letters';
 import type {IColumnData} from '@/interfaces/column-data/IColumnData';
import {TableColumnsNewDataKey} from '@/static/symbols/static-symbols';

 const tableColumnsData = inject(TableColumnsNewDataKey);
 
 let fileInput: HTMLInputElement;
 const uploadFile = () => {
   fileInput.click();
 }
 const parseFile = () => {
  const file = fileInput.files!.item(0) as File;
  const columns = LETTERS;
  const columnsData: Array<IColumnData> = [];
  Papa.parse(file, { 
   header: true,
   skipEmptyLines: true,
   transformHeader: (header) => header.trim(),
   transform: (value, unused) => value.trim(),
   complete: (res, unused) => {
    res.meta.fields?.forEach((field, index) => {
     columnsData.push({
      column: columns[index],
      values: createColumnValues(field, res.data as Array<Object>)
     });
    });
    tableColumnsData!.updateTableValues(columnsData)
   }
  });
 }

 onMounted(() => {
  fileInput = document.getElementById("csv-file") as HTMLInputElement;
 });
</script>

<template>
 <i @click="uploadFile" class="ri-file-add-line"></i>
 <input accept=".csv" @change="parseFile" type="file" id="csv-file">
</template>

<style scoped>
 input {
  display: none;
 }

 i {
  margin-left: 5px;
  font-size: 2rem;
  cursor: pointer;
 }
</style>
