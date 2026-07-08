/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

import type { Chapter, SourceManga } from "@paperback/types";

import { MadaraGeneric } from "../generic/main";
import pbconfig from "./pbconfig";

const DOMAIN: string = "https://manhwaclub.net";

class ManhwaClubRawExtension extends MadaraGeneric {
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

    // RAW variant: only include chapters whose name contains "RAW"
    return chapters.filter((chapter) => /raw/i.test(chapter.title ?? ""));
  }
}

export const ManhwaClubRaw = new ManhwaClubRawExtension();
