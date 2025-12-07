import fs from "node:fs/promises";
import path from "node:path";

async function readFile(path: string) {
  try {
    const file = await fs.readFile(path, "utf-8");

    return file;
  } catch (error) {
    console.error(error);
  }
}

export async function readInput(currentDir: string) {
  const filepath = path.join(currentDir, `input.txt`);
  const output = await readFile(filepath);

  return output;
}
