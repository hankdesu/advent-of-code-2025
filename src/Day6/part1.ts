import { readInput } from "../utils";

const input = await readInput(__dirname);
const lines = input?.split("\n") ?? [];
const matrix: string[][] = lines.map((line) => line.trim().split(/\s+/));
const x = matrix.length;
const y = matrix[0]?.length || 0;
let answer = 0;

for (let j = 0; j < y; j++) {
  const operations = matrix[x - 1];
  const operation = operations?.[j] || "";
  let total = operation === "*" ? 1 : 0;

  for (let i = 0; i < x - 1; i++) {
    if (operation === "*") {
      const currentNum = Number(matrix?.[i]?.[j]) || 1;
      total *= currentNum;
    } else if (operation === "+") {
      const currentNum = Number(matrix?.[i]?.[j]) || 0;
      total += currentNum;
    }
  }

  answer += total;
}

console.log("answer: ", answer);
