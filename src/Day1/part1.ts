import { readInput } from "../utils";

const input = await readInput(__dirname);
const lines = input?.split("\n");
let point = 50;
let count = 0;

lines?.forEach((line) => {
  const operation = line.slice(0, 1);
  const times = Number(line.slice(1));

  if (operation === "L") {
    for (let i = 0; i < times; i++) {
      point--;
      if (point < 0) {
        point = 99;
      }
    }
  } else if (operation === "R") {
    for (let i = 0; i < times; i++) {
      point++;
      if (point > 99) {
        point = 0;
      }
    }
  }

  if (point === 0) {
    count++;
  }
});

const answer = count;
console.log('answer: ', answer);
