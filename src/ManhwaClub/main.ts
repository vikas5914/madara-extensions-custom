/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

import type { Chapter, SourceManga } from "@paperback/types";

import { MadaraGeneric } from "../generic/main";
import pbconfig from "./pbconfig";

const DOMAIN: string = "https://manhwaclub.net";

class ManhwaClubExtension extends MadaraGeneric {
  constructor() {
    super({
      domain: DOMAIN,
      name: pbconfig.name,
      contentRating: pbconfig.contentRating,
      language: pbconfig.language,
      usePostIds: true,
      chapterEndpoint: 0,
    });
  }

  override async getChapters(sourceManga: SourceManga): Promise<Chapter[]> {
    const chapters = await super.getChapters(sourceManga);

    for (const chapter of chapters) {
      if (chapter.title) {
        // Normal variant: filter the "RAW" string out of the chapter name
        chapter.title = chapter.title
          .replace(/\bRAW\b/gi, "")
          .replace(/\s{2,}/g, " ")
          .trim();
      }
    }

    return chapters;
  }
}

export const ManhwaClub = new ManhwaClubExtension();
