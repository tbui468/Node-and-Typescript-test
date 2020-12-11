import { add } from "./App";
import ld from "lodash";

const out: string = "the sum of 5 and 5 is " + add(5, 5);

console.log(out);


let arr: number[] = [ 1, 2 ,3];

ld.fill(arr, 10);

let i: number = 0;

for(i = 0; i < 3; i++) {
  console.log(arr[i]);
}

