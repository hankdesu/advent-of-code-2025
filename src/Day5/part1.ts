import { readInput } from "../utils";

const input = await readInput(__dirname);
const [firstPart, secondPart] = input?.split(/\r?\n\r?\n/) ?? [];
const freshRanges = firstPart?.split("\n");
const availableIds = secondPart?.split("\n");
let answer = 0;

availableIds?.forEach((id) => {
  const included = freshRanges?.some((range) => {
    const [start, end] = range.split("-");
    if (Number(id) >= Number(start) && Number(id) <= Number(end)) {
      return true;
    }
    return false;
  });
  if (included) answer++;
});

console.log(answer);
