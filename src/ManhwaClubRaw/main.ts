/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

import type { Chapter, SourceManga } from "@paperback/types";

import { MadaraGeneric } from "../generic/main";
import pbconfig from "./pbconfig";

const DOMAIN: string = "https://manhwaclub.net";

/** True when a chapter is a RAW release (title or slug ends with / contains raw). */
function isRawChapter(chapter: Chapter): boolean {
  const title = chapter.title ?? "";
  const id = chapter.chapterId ?? "";
  return /\braw\b/i.test(title) || /-raw$/i.test(id);
}

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

    // RAW variant: only RAW chapters
    return chapters.filter((chapter) => isRawChapter(chapter));
  }
}

export const ManhwaClubRaw = new ManhwaClubRawExtension();
