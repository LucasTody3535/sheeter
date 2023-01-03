<script setup lang="ts">
import { ref, type Ref, onMounted, type StyleValue } from "vue";

const TABLE_HEADING = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const observers: Array<ResizeObserver> = [];
const columnLabels: Ref<HTMLLabelElement[] | null> = ref(null);
const columns: Ref<HTMLDivElement[] | null> = ref(null);
const inputs: Ref<HTMLInputElement | null> = ref(null);

onMounted(() => {
  columnLabels.value!.forEach((columnLabel, index) => {
    observers.push(
      new ResizeObserver((entries) => {
        columns.value![
          index
        ].style.width = `${entries[0].target.clientWidth}px`;
      })
    );
    observers[index].observe(columnLabel);
  });
});
</script>

<template>
  <div id="table">
    <div class="table-column" id="row-numbers">
      <p class="cell"></p>
      <p class="cell" v-for="n in TABLE_HEADING.length">{{ n }}</p>
    </div>
    <div
      ref="columns"
      v-for="col in TABLE_HEADING.length"
      class="table-column main-column"
    >
      <label ref="columnLabels" class="cell column-letter">{{ col }}</label>
      <input ref="inputs" :data-col="col" :data-row="row" v-for="row in TABLE_HEADING.length" class="cell-input" type="text" />
    </div>
  </div>
</template>

<style scoped>
#table {
  display: flex;
  overflow: scroll;
}

#table .table-column {
  /* width: 80px; */
  height: 100%;
  flex-shrink: 0;
}

#table .main-column {
  display: grid;
  grid-auto-rows: 22px;
  width: auto;
}

#table .main-column input.cell-input {
  border: none;
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
}

#table .main-column input.cell-input:focus {
  outline: none;
}

#table .main-column label.column-letter {
  background-color: lightgray;
  overflow: auto;
  resize: horizontal;
  min-width: 80px;
}

#table .table-column .cell {
  border: none;
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
}

#table #row-numbers {
  background-color: lightgray;
  width: 30px;
  display: grid;
  grid-auto-rows: 22px;
}
</style>
