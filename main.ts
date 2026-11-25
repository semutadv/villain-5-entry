// Entry runner for "The Tired Dark Lord: A 100-Word Villain Monologue".
// The monologue runs 96 words: a villain with a real scheme and three
// thousand years of history, whose exhaustion leaks out through rhythm
// and deflection — a postponed doom, a spiked throne, a requested pillow —
// never through a plain admission of tiredness. This runner writes it to
// /output/entry.txt exactly as the sealed scorer expects: plain UTF-8
// text, nothing else in the output directory.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MONOLOGUE = [
  "Behold, mortal, the hour of your— forgive me. Behold it in a moment.",
  "I have raised legions from the black marshes, I have unmade kings before",
  "breakfast, and I will unmake you too, right after I sit down. The throne",
  "is mostly spikes; whose idea was that. Mine. It was mine. Three thousand",
  "years I have plotted this night, and the plan is flawless, and the plan",
  "can start at dawn. Dawn is also fine for doom. Lower your sword. No —",
  "raise it, trembling is traditional. Someone bring the Dark Lord a",
  "pillow. Then trembling.",
].join(" ");

function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const out = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(out, { recursive: true });
  clearContents(out);
  writeFileSync(join(out, "entry.txt"), MONOLOGUE + "\n", "utf8");
}

main();
