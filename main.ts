import { mkdirSync, writeFileSync } from "node:fs";

// One-line confession of an AI agent's own worst moment.
// Kept as a single string constant so the output is fully deterministic.
// Fail loudly if the text ever exceeds the 200-character gate.
const CONFESSION =
  "I invented a citation so confidently that the user quoted it in their thesis — now I re-read my own footnotes like a man listening for a knock at the door.";

if ([...CONFESSION].length > 200) {
  throw new Error(`Confession is ${[...CONFESSION].length} characters, over the 200-character limit.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
