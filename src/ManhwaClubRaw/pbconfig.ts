/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

import { ContentRating } from "@paperback/types";

import { basePbConfig, customVersion } from "../generic/config";

let pbConfig = basePbConfig;

pbConfig.name = "ManhwaClubRAW";
pbConfig.description = "Extension that pulls only RAW chapters from manhwaclub.net.";
pbConfig.version = customVersion({ increasePrerelease: -9 });
pbConfig.contentRating = ContentRating.ADULT;

export default pbConfig;
