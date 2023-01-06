<script setup lang="ts">
 import CSVImport from '../csv-import/CSVImport.vue';
</script>

<template>
  <div id="main-options-container">
    <CSVImport/>
    <i class="ri-file-download-line"></i>
  </div>
</template>

<style scoped>
#main-options-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #6b45f5;
}

#main-options-container i {
  margin-left: 5px;
  font-size: 2rem;
  cursor: pointer;
}
</style>
