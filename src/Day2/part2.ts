import { readInput } from "../utils";

const input = await readInput(__dirname);
const ranges = input?.split(",");
let answer = 0;

ranges?.forEach((range) => {
  const duration = range.split("-");
  const start = Number(duration[0]);
  const end = Number(duration[1]);

  for (let i = start; i <= end; i++) {
    if (checkDuplication(i)) {
      answer += i;
    }
  }
});

console.log("answer: ", answer);

function checkDuplication(num: number) {
  const s = String(num);
  const n = s.length;

  for (let len = 1; len <= Math.floor(n / 2); len++) {
    if (n % len !== 0) continue;

    const base = s.slice(0, len);
    const repeatCount = n / len;

    if (base.repeat(repeatCount) === s && repeatCount >= 2) {
      return true;
    }
  }

  return false;
}
