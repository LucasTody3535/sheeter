import type { ICommand } from "@/interfaces/command/ICommand";
import {tokenizeArguments} from "@/utils/arguments/arguments";
import { createMissingCoordinates, isInitialCoordinateBelowThanFinalCoordinate } from "@/utils/table-coordinates/table-coordinates";
import type { BooleanExpression } from "../argument-types/boolean-expression/BooleanExpression";
import type { TableCoordinate } from "../argument-types/table-cordinate/TableCoodinate";

export class SumifCommand implements ICommand {
 private callName: string;
 private args: [
  TableCoordinate,
  TableCoordinate,
  TableCoordinate,
  BooleanExpression
 ];

 constructor(callName: string, args: [ TableCoordinate, TableCoordinate, TableCoordinate, BooleanExpression ]) {
  this.callName = callName;
  this.args = args;
 }

 executeCommand(args: string, inputs: Array<HTMLInputElement>, tableHeadings: Array<string>) {
  const argsTokens = tokenizeArguments(args);
  let restoredCoordinates: Array<string>;
  let inputsSelected: Array<HTMLInputElement>;
  let outputSelected: HTMLInputElement;
  let sumCondition: Function;
  if(this.analyzeArgs(args)) {
   restoredCoordinates = createMissingCoordinates(argsTokens[0], argsTokens[1]);
   if(restoredCoordinates.length <= tableHeadings.length &&
    isInitialCoordinateBelowThanFinalCoordinate(argsTokens[0], argsTokens[1])) {
     inputsSelected = inputs.filter(el => restoredCoordinates.includes(el.dataset.cell as string));
     outputSelected = inputs.find(el => el.dataset.cell === argsTokens[3]) as HTMLInputElement;
     sumCondition = this.args[3].createPredicateFunction(argsTokens[2].split("")[0], argsTokens[2].substring(1))
     let sum = 0;
     for(let input of inputsSelected) {
      if(!isNaN(Number(input.value))) {
       if(sumCondition(Number(input.value))) {
	sum += Number(input.value);
       }
      } else {
       throw new Error("Invalid cell value encountered!");
      }
     }
     outputSelected.value = `Sum res: ${sum}`;
     return;
    }
  }
  throw new Error("Invalid command");
 }

 private analyzeArgs(args: string) {
  const argsTokens = tokenizeArguments(args);
  return this.args[0].isValidTableCoordinate(argsTokens[0]) &&
  this.args[1].isValidTableCoordinate(argsTokens[1]) &&
  this.args[2].isValidTableCoordinate(argsTokens[3]) &&
  this.args[3].isValidBooleanLogic(argsTokens[2].split("")[0], argsTokens[2].split("")[1]) &&
  this.isInputAndOutputSameColumn(argsTokens[0].split("")[0], argsTokens[1].split("")[0]);
 }

 getCommandName() {
  return this.callName;
 }

 private isInputAndOutputSameColumn(inputOne: string, inputTwo: string, output?: string) {
  return inputOne === inputTwo; /* &&
  inputOne === output &&
  inputTwo === output; */
 }
}
