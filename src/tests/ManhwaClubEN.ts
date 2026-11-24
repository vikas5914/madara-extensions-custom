import { type TestLogger } from "@paperback/types";

import { ManhwaClubEN } from "../ManhwaClubEN/main.js";
import sourceInfo from "../ManhwaClubEN/pbconfig.js";
import { TestSuite, registerDefaultTests } from "./suite.js";

export async function runTests(logger: TestLogger) {
  const suite = new TestSuite("ManhwaClubEN tests", logger);
  // Default search hits a RAW-only title, which the EN source correctly filters to zero chapters.
  registerDefaultTests(suite, ManhwaClubEN, sourceInfo, {
    searchResultsProviding: {
      getSearchResults: [{ title: "teachers efforts" }, undefined, undefined],
    },
  });

  await suite.run();
}
