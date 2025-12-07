import { readInput } from "../utils";

const input = await readInput(__dirname);
const lines = input?.split("\n");
let answer = 0;

lines?.forEach((line) => {
  const digits = line.split("");

  const tensIndex = findLargestDigit(digits.slice(0, -1), 0);
  const onesIndex = findLargestDigit(digits, tensIndex + 1);
  const joltage = `${digits[tensIndex]}${digits[onesIndex]}`;

  answer += Number(joltage);
});

function findLargestDigit(sequence: string[], startIndex: number) {
  let largestDigitIndex = startIndex;
  let largestDigit = Number(sequence[largestDigitIndex]);

  for (let i = startIndex; i < sequence.length; i++) {
    const digit = Number(sequence[i]);
    if (largestDigit < digit) {
      largestDigit = digit;
      largestDigitIndex = i;
    }
  }

  return largestDigitIndex;
}

console.log("answer: ", answer);
