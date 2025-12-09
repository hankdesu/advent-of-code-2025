import { readInput } from "../utils";

const input = await readInput(__dirname);
const matrix = input?.split("\n").map((line) => line.split(""));
let answer = 0;

matrix?.forEach((line, i) => {
  line.forEach((char, j) => {
    const nextRow = matrix[i + 1];
    if (char === "S" && nextRow && nextRow[j] !== undefined) {
      nextRow[j] = "|";
    }
    if (char === "|" && nextRow) {
      if (nextRow[j] === "^") {
        answer++;
        if (j - 1 >= 0 && nextRow[j - 1] === ".") {
          nextRow[j - 1] = "|";
        }
        if (j + 1 < line.length && nextRow[j + 1] === ".") {
          nextRow[j + 1] = "|";
        }
      } else if (nextRow[j] === ".") {
        nextRow[j] = "|";
      }
    }
  });
});

console.log("answer: ", answer);
