import { readInput } from "../utils";

const input = await readInput(__dirname);
const lines = input?.split("\n") || [];
const matrix = lines.map((line) => line.split(""));
const n = matrix.length;
const m = matrix[0]?.length || 0;

let answer = 0;
let sectionValues = [];

for (let j = m - 1; j >= 0; j--) {
  let combination = "";

  for (let i = 0; i < n; i++) {
    const operation = matrix?.[i]?.[j] || "";
    if (i === n - 1) {
      if (combination.length === n - 1 && Number(combination) !== 0) {
        sectionValues.push(Number(combination));
      }
      if (operation === "*") {
        answer += sectionValues.reduce((total, value) => total * value, 1);
        sectionValues = [];
      } else if (operation === "+") {
        answer += sectionValues.reduce((total, value) => total + value, 0);
        sectionValues = [];
      }
    } else {
      combination += matrix?.[i]?.[j] || "";
    }
  }
}

console.log("answer: ", answer);
