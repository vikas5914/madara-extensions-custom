/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

import { ContentRating } from "@paperback/types";

import { DEVELOPERS } from "../developers";
import { basePbConfig, customVersion } from "../generic/config";

let pbConfig = basePbConfig;

pbConfig.name = "ManhwaClub (RAW)";
pbConfig.description = "Extension that pulls only RAW chapters from manhwaclub.net.";
pbConfig.version = customVersion({ increasePrerelease: -8 });
pbConfig.contentRating = ContentRating.ADULT;
pbConfig.developers = DEVELOPERS;

export default pbConfig;
