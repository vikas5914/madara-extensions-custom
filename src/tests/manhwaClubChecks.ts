import { expect } from "chai";

import { decodeUtf8Lossy } from "../generic/decode.js";
import type { MadaraGeneric } from "../generic/main.js";
import type { TestSuite } from "./suite.js";

export function registerManhwaClubChecks(
  suite: TestSuite,
  source: MadaraGeneric,
  mangaId: string,
  wantRaw: boolean,
): void {
  suite.test("manual decoder matches TextDecoder on a live page", async () => {
    const [, buffer] = await Application.scheduleRequest({
      url: "https://manhwaclub.net/manga/aunts-husband/",
      method: "GET",
    });
    const expected = new TextDecoder("utf-8", { fatal: false }).decode(buffer);
    expect(expected).to.include("�");
    expect(decodeUtf8Lossy(new Uint8Array(buffer))).to.equal(expected);
  });

  suite.test("details, chapters and pages have real content", async () => {
    const manga = await source.getMangaDetails(mangaId);
    expect(manga.mangaInfo.primaryTitle).to.have.length.above(0);
    expect(manga.mangaInfo.primaryTitle).to.not.equal("Page");

    const chapters = await source.getChapters(manga);
    expect(chapters).to.have.length.above(0);
    for (const chapter of chapters) {
      expect(/-raw$/i.test(chapter.chapterId), chapter.chapterId).to.equal(wantRaw);
    }

    const details = await source.getChapterDetails(chapters[0]!);
    expect(details).to.have.property("pages");
    expect((details as { pages: string[] }).pages.length).to.be.greaterThan(1);
  });

  suite.test("every discover section has items", async () => {
    for (const section of await source.getDiscoverSections()) {
      const result = await source.getDiscoverSectionItems(section, undefined);
      expect(result.items, section.id).to.have.length.above(0);
    }
  });
}
