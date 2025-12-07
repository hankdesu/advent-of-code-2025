import { readInput } from "../utils";

const input = await readInput(__dirname);
const ranges = input?.split(",");
let answer = 0;

ranges?.forEach((range) => {
  const duration = range.split("-");
  const start = Number(duration[0]);
  const end = Number(duration[1]);

  for (let i = start; i <= end; i++) {
    const stringNum = String(i);
    const isOdd = stringNum.length % 2 === 1;
    if (isOdd) continue;

    const firstSeq = stringNum.slice(0, stringNum.length / 2);
    const secondSeq = stringNum.slice(stringNum.length / 2);

    if (firstSeq === secondSeq) {
      answer += i;
    }
  }
});

console.log("answer: ", answer);
