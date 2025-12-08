import { readInput } from "../utils";

const input = await readInput(__dirname);
const [firstPart] = input?.split(/\r?\n\r?\n/) ?? [];
const freshRanges = firstPart?.split("\n") ?? [];

const ranges = freshRanges
  .map((range) => {
    const [start = 0, end = 0] = range.split("-").map(Number);
    return [start, end] as [number, number];
  })
  .sort((a, b) => a[0] - b[0]);

const merged: [number, number][] = [];

for (const [start = 0, end = 0] of ranges) {
  const lastMerged = merged[merged.length - 1];

  if (merged.length === 0 || (lastMerged && lastMerged[1] < start - 1)) {
    merged.push([start, end]);
  } else if (lastMerged) {
    lastMerged[1] = Math.max(lastMerged[1], end);
  }
}

const answer = merged.reduce(
  (sum, [start = 0, end = 0]) => sum + (end - start + 1),
  0,
);

console.log("answer: ", answer);
