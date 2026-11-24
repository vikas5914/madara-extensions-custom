# Madara Extensions

Paperback extensions for sites using the generic Madara theme.

Extension repository: https://vikas5914.github.io/madara-extensions-custom/0.9/stable/

## Extensions

- **ManhwaClub (EN)** (`ManhwaClubEN`) — provides non-RAW chapters from `manhwaclub.net`.
- **ManhwaClub (RAW)** (`ManhwaClubRaw`) — provides RAW chapters from `manhwaclub.net`.

The IDs differ from the upstream [Inkdex](https://github.com/inkdex/madara-extensions) `ManhwaClub`, so Paperback does not replace these sources with the upstream one.

## Syncing with upstream

Copy `src/generic/` and `package.json` / `package-lock.json` from upstream, then keep these local changes:

- `src/generic/decode.ts` and every `decodeHtml(...)` call. `manhwaclub.net` injects invalid UTF-8 into every page, and `Application.arrayBufferToUTF8String` gives no string on iOS (`cheerio.load() expects a string`).
- Canonical URLs (trailing slash, no `/page/1/`). The site serves a tracker page instead of a redirect for non-canonical URLs, including `?p=<id>`.
- `getPostAndSlug` resolves the post ID when `chapterEndpoint` is 0, so ManhwaClub can use slugs as manga IDs.

`npm test` runs with strict UTF-8 decoding, like iOS.

## Development

Install dependencies and run the available checks with:

```sh
npm ci
npm run conformance
```

Build the extension bundles with:

```sh
npm run bundle
```

Use `npm run dev` to run the Paperback development server with watch mode.

## License

GPL-3.0-or-later.
