import { readInput } from "../utils";

const input = await readInput(__dirname);
const lines = input?.split("\n") ?? [];
const matrix: string[][] = lines.map((line) => line.split(""));
let answer = 0;

const DIRECTIONS: [number, number][] = [
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
];

while (true) {
  let count = 0;
  matrix.forEach((line, i) => {
    line.forEach((value, j) => {
      if (value === "@") {
        if (checkGrid(matrix, i, j)) {
          line[j] = "x";
          count++;
        }
      }
    });
  });
  if (count === 0) break;
  answer += count;
}

function checkGrid(matrix: string[][], i: number, j: number) {
  let count = 0;

  for (const [dx, dy] of DIRECTIONS) {
    const ni = i + dx;
    const nj = j + dy;

    if (matrix[ni]?.[nj] === "@") {
      count++;
    }
  }

  if (count < 4) {
    return true;
  }

  return false;
}

console.log(answer);
