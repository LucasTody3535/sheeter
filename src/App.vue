<script setup lang="ts">
import { provide, type Ref, type ComputedRef, ref, computed } from "vue";
import MainOptionsBar from "./components/main-options-bar/MainOptionsBar.vue";
import SubOptionsBar from "./components/sub-options-bar/SubOptionsBar.vue";
import TableGrid from "./components/table-grid/TableGrid.vue";
import type {IColumnData} from "./interfaces/column-data/IColumnData";
import { TableCellsKey, TableColumnsNewDataKey } from "./static/symbols/static-symbols";

const newTableValues: Ref<Array<IColumnData>> = ref([]);
const getTableValues: ComputedRef<Array<IColumnData>> = computed(() => newTableValues.value);
const updateTableValues = (data: Array<IColumnData>) => {
 newTableValues.value = data;
};

const tableCells: Ref<Array<HTMLInputElement>> = ref([]);
const getCells = computed(() => tableCells.value);
const changeCells = (data: Array<HTMLInputElement>) => {
 tableCells.value = data;
}

provide(TableColumnsNewDataKey, {
 updateTableValues,
 getTableValues
});

provide(TableCellsKey, {
 getCells,
 changeCells,
});
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
