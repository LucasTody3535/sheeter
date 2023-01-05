export class BooleanExpression {
 private conditions: Array<string>;

 constructor() {
  this.conditions = [ ">", "<", "&&" ]
 }

 createPredicateFunction(condition: string, conditionValue: any) {
  //console.log(condition);
  //console.log(conditionValue);
  if(condition === "<") return (value: any) => value < conditionValue;
  else if(condition === ">") return (value: any) => value > conditionValue;
  else if(condition === "&&") return (value: any) => value && conditionValue;
  throw new Error("Expected a condition!");
 }

 isValidBooleanLogic(condition: string, conditionValue: any) {
  return this.conditions.includes(condition) && !isNaN(Number(conditionValue));
 }
}

