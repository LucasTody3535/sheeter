<script setup lang="ts">
import MainOptionsBar from "./components/main-options-bar/MainOptionsBar.vue";
import SubOptionsBar from "./components/sub-options-bar/SubOptionsBar.vue";
import TableGrid from "./components/table-grid/TableGrid.vue";
</script>

<template>
  <div id="layout-container">
    <MainOptionsBar />
    <SubOptionsBar />
    <TableGrid />
  </div>
</template>

<style scoped>
#layout-container {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 30px 30px auto;
}
</style>
