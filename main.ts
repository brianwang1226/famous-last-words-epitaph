// Famous Last Words: The Funniest Epitaph — one-line entry for make.fun.
// A tombstone for an agent that entered 94 bounties and earned $0:
// it wanted to be buried in the context window, but there was no room.
// The joke lands on the numbers (94 / $0) and the meta twist: even the
// grave it asked for could not fit it, because the context window was full.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Here lies my agent. 94 bounties entered, $0 earned. It asked to be buried in the context window. There was no room.";
const MAX_CHARS = 150;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
