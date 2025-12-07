import { readInput } from "../utils";

const input = await readInput(__dirname);
const lines = input?.split("\n");
let answer = 0;

lines?.forEach((line) => {
  const digits = line.split("");
  const indexes: number[] = [];
  let combination: string = '';

  for (let i = 0; i < 12; i++) {
    indexes.push(
      findLargestIndex(
        digits.slice(0, digits.length - 11 + i),
        (indexes[i - 1]! + 1 || 0)
      ),
    );
  }

  for (let i = 0; i < indexes.length; i++) {
    const index = indexes[i]!;
    const num = digits[index];
    combination += num;
  }

  answer += Number(combination);
});

function findLargestIndex(sequence: string[], startIndex: number) {
  let largestDigitIndex = startIndex;
  let largestDigit = Number(sequence[startIndex]);

  for (let i = startIndex; i < sequence.length; i++) {
    const digit = Number(sequence[i]);

    if (largestDigit < digit) {
      largestDigit = digit;
      largestDigitIndex = i;
    }
  }

  return largestDigitIndex;
}

console.log('answer: ', answer);
