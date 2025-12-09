import { readInput } from "../utils";

const input = await readInput(__dirname);
const grid = input?.split("\n").map((line) => line.split(""));
const count = grid?.map((row) => row.map(() => 0));

grid?.forEach((row, y) => {
  row.forEach((col, x) => {
    const currentCount = count[y][x];
    const nextY = y + 1;
    const nextGridRow = grid[nextY];
    const nextCountRow = count?.[nextY];

    if (col === "S" && nextGridRow && nextCountRow) {
      nextGridRow[x] = "|";
      nextCountRow[x] += 1;
    }
    if (col === "|" && nextGridRow && nextCountRow) {
      if (nextGridRow[x] === "^") {
        if (x - 1 >= 0) {
          if (nextGridRow[x - 1] === ".") {
            nextGridRow[x - 1] = "|";
          }
          nextCountRow[x - 1] += currentCount;
        }
        if (x + 1 < row.length) {
          if (nextGridRow[x + 1] === ".") {
            nextGridRow[x + 1] = "|";
          }
          nextCountRow[x + 1] += currentCount;
        }
      } else if (nextGridRow[x] === "." || nextGridRow[x] === "|") {
        nextGridRow[x] = "|";
        nextCountRow[x] += currentCount;
      }
    }
  });
});

const answer = count[count.length - 1]?.reduce((sum, value) => sum + value, 0);
console.log('answer: ', answer);
