# Madara Extensions

Paperback extensions for sites using the generic Madara theme.

Extension repository: https://vikas5914.github.io/madara-extensions-custom/0.9/stable/

## Extensions

- **ManhwaClub (EN)** (`ManhwaClubEN`) — provides non-RAW chapters from `manhwaclub.net`.
- **ManhwaClub (RAW)** (`ManhwaClubRaw`) — provides RAW chapters from `manhwaclub.net`.

The IDs differ from the upstream [Inkdex](https://github.com/inkdex/madara-extensions) `ManhwaClub`, so Paperback does not replace these sources with the upstream one.

## Syncing with upstream

Copy `src/generic/` and `package.json` / `package-lock.json` from upstream. Keep the local change in `convertSlugToPostId` (trailing slash on the manga URL).

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
