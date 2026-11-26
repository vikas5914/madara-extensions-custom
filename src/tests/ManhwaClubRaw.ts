import { type TestLogger } from "@paperback/types";

import { ManhwaClubRaw } from "../ManhwaClubRaw/main.js";
import sourceInfo from "../ManhwaClubRaw/pbconfig.js";
import { TestSuite, registerDefaultTests } from "./suite.js";

export async function runTests(logger: TestLogger) {
  const suite = new TestSuite("ManhwaClubRaw tests", logger);
  registerDefaultTests(suite, ManhwaClubRaw, sourceInfo);

  await suite.run();
}
