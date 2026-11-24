import { mkdirSync, writeFileSync } from "node:fs";

// One funny single-line developer excuse, under 200 characters.
const entry = "My code didn't break prod — prod finally tried to run it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
