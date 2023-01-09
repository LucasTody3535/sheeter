<script setup lang="ts">
 import { SelectedTableCell, SelectedTableColumn } from '@/static/symbols/static-symbols';
 import { inject } from 'vue';

 let selectedTableCell = inject(SelectedTableCell);
 let selectedTableColumn = inject(SelectedTableColumn);
 
 const alignLeft = () => {
  if(selectedTableCell!.getValue.value) selectedTableCell!.getValue.value!.style.textAlign = "left";
  else if(selectedTableColumn!.getValue.value) selectedTableColumn!.getValue.value!.forEach(el => el.style.textAlign = "left");
 };
 const alignCenter = () => {
  if(selectedTableCell!.getValue.value) selectedTableCell!.getValue.value!.style.textAlign = "center";  
  else if(selectedTableColumn!.getValue.value) selectedTableColumn!.getValue.value!.forEach(el => el.style.textAlign = "center");
 }
 const alignRight = () => {
  if(selectedTableCell!.getValue.value) selectedTableCell!.getValue.value!.style.textAlign = "right";  
  else if(selectedTableColumn!.getValue.value) selectedTableColumn!.getValue.value!.forEach(el => el.style.textAlign = "right");
 }
 const alignJustify = () => {
  if(selectedTableCell!.getValue.value) selectedTableCell!.getValue.value!.style.textAlign = "justify";  
  else if(selectedTableColumn!.getValue.value) selectedTableColumn!.getValue.value!.forEach(el => el.style.textAlign = "justify");
 }
</script>

<template>
  <div id="sub-options-container">
    <i @click="alignLeft" class="ri-align-left"></i>
    <i @click="alignCenter" class="ri-align-center"></i>
    <i @click="alignRight" class="ri-align-right"></i>
    <i @click="alignJustify" class="ri-align-justify"></i>
  </div>
</template>

<style scoped>
#sub-options-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #472ca8;
}

#sub-options-container i {
  margin-left: 5px;
  font-size: 2rem;
  cursor: pointer;
}
</style>
