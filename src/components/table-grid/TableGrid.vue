<script setup lang="ts">
import type { ICommand } from "@/interfaces/command/ICommand";
import { BooleanExpression } from "@/models/argument-types/boolean-expression/BooleanExpression";
import { TableCoordinate } from "@/models/argument-types/table-cordinate/TableCoodinate";
import { SumifCommand } from "@/models/sumif-command/SumifCommand";
import { LETTERS } from "@/static/letters/static-letters";
import { SelectedTableCell, SelectedTableColumn, TableCellsKey, TableColumnsNewDataKey } from "@/static/symbols/static-symbols";
import { ref, type Ref, onMounted, toRaw, inject, watch } from "vue";

const TABLE_HEADING = LETTERS;

const commands: Array<ICommand> = [
 new SumifCommand("somase", [
  new TableCoordinate(TABLE_HEADING),
  new TableCoordinate(TABLE_HEADING),
  new TableCoordinate(TABLE_HEADING),
  new BooleanExpression()
 ])
];

let tableColumnsData = inject(TableColumnsNewDataKey);
let tableCells = inject(TableCellsKey);
let selectedTableCell = inject(SelectedTableCell);
let selectedTableColumn = inject(SelectedTableColumn);

const observers: Array<ResizeObserver> = [];
const columnLabels: Ref<HTMLLabelElement[] | null> = ref(null);
const columns: Ref<HTMLDivElement[] | null> = ref(null);
const inputs: Ref<HTMLInputElement[] | null> = ref(null);

const transformInputIntoCommandInput = (data: Event) => {
 const target = data.currentTarget as HTMLInputElement;
 if(target.value.startsWith(">", 0)) {
  target.classList.add("cmd-prompt");
  return;
 }
 target.classList.remove("cmd-prompt")
}

const executeCommandPressingEnter = (data: KeyboardEvent) => {
 const input = data.currentTarget as HTMLInputElement;
 if(data.key === "Enter" && input.classList.contains("cmd-prompt")) {
  commands
   .find((el) => el.getCommandName() === input.value.split("(")[0].substring(1).trim())
   ?.executeCommand(input.value, toRaw(inputs.value!), TABLE_HEADING);
 }
}

const treatInput = (data: Event) => {
 transformInputIntoCommandInput(data);
 executeCommandPressingEnter(data as KeyboardEvent);
}

  const unselectSelectedTableColumn = () => {
    selectedTableColumn!.getValue.value?.forEach(columnItem => columnItem.classList.remove("input-is-focused"));
    selectedTableColumn!.updateValue(null);
  }
  const unselectSelectedTableCell = () => {
   selectedTableCell!.getValue.value?.classList.remove("input-is-focused");
   selectedTableCell!.updateValue(null);
  }
  const updateSelectedTableCell = (input: HTMLInputElement) => {
   input.classList.add("input-is-focused");
   selectedTableCell!.updateValue(input);
  }
  const updateSelectedTableColumn = (inputs: Array<HTMLInputElement>) => {
   inputs.forEach(input => input.classList.add("input-is-focused"));
   selectedTableColumn!.updateValue(inputs);
  }

const treatInputFocus = (data: Event) => {
 unselectSelectedTableCell();
 updateSelectedTableCell(data.currentTarget as HTMLInputElement);
 unselectSelectedTableColumn();
}

const treatColumnSelection = (data: Event) => {
 unselectSelectedTableCell();
 unselectSelectedTableColumn();
 updateSelectedTableColumn(inputs.value!.filter(input => input.dataset.cell!
			    .includes((data.currentTarget as HTMLParagraphElement).innerText)));
}

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
  tableCells!.changeCells(inputs.value!);
});

watch(tableColumnsData!.getTableValues, (columns) => {
 let inputsColumn: Array<HTMLInputElement> = [];
 inputs.value?.forEach(input => input.value = "");
 columns.forEach((column) => {
  inputsColumn = inputs.value!.filter((input) => (input.dataset.cell as string).includes(column.column));
  column.values.forEach((value, index) => {
   inputsColumn[index].value = value;
  });
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
      <label @click="treatColumnSelection" ref="columnLabels" class="cell column-letter">{{ TABLE_HEADING[col - 1] }}</label>
      <input @keyup="treatInput" @focus="treatInputFocus"
	ref="inputs" :data-cell="`${TABLE_HEADING[col - 1]}${row}`" v-for="row in TABLE_HEADING.length" class="cell-input" type="text" />
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
  height: calc(27 * 22px);
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
  padding-left: 2px !important;
  padding-right: 2px !important;
}

#table .main-column input.cell-input:focus {
  outline: none;
}

#table .main-column label.column-letter {
  background-color: lightgray;
  overflow: auto;
  resize: horizontal;
  min-width: 80px;
  cursor: pointer;
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

.cmd-prompt {
  transition: background-color 0.2s ease-in-out;
  background-color: black !important;
  color: white;
}

.input-is-focused {
 background-color: #9d8dd9;
}
</style>
