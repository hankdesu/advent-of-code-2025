import fs, { type FileHandle } from "node:fs/promises";
import path from "node:path";

const dayNumber = process.argv[2];
const dirPath = path.join(process.cwd(), "src", `Day${dayNumber}`);
const result = await checkDir(dirPath);
let inputFilehandle: FileHandle | undefined;
let part1Filehandle: FileHandle | undefined;
let part2Filehandle: FileHandle | undefined;

if (!result) {
  try {
    await fs.mkdir(dirPath);
    inputFilehandle = await fs.open(path.join(dirPath, "input.txt"), "w");
    part1Filehandle = await fs.open(path.join(dirPath, "part1.ts"), "w");
    part2Filehandle = await fs.open(path.join(dirPath, "part2.ts"), "w");
  } catch (error) {
    console.error("error: ", error);
  } finally {
    inputFilehandle?.close();
    part1Filehandle?.close();
    part2Filehandle?.close();
  }
}

async function checkDir(dirPath: string) {
  try {
    const result = await fs.stat(dirPath);
    return result;
  } catch {
    return null;
  }
}
