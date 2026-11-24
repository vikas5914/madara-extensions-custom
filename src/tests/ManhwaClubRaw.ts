import { type TestLogger } from "@paperback/types";

import { ManhwaClubRaw } from "../ManhwaClubRaw/main.js";
import sourceInfo from "../ManhwaClubRaw/pbconfig.js";
import { registerManhwaClubChecks } from "./manhwaClubChecks.js";
import { useStrictUtf8Decoding } from "./strictDecode.js";
import { TestSuite, registerDefaultTests } from "./suite.js";

export async function runTests(logger: TestLogger) {
  useStrictUtf8Decoding();
  const suite = new TestSuite("ManhwaClubRaw tests", logger);
  registerDefaultTests(suite, ManhwaClubRaw, sourceInfo);

  registerManhwaClubChecks(suite, ManhwaClubRaw, "aunts-husband", "2720", true);

  await suite.run();
}
