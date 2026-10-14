# Repository guidance

## Commands and verification

- Use Bun (`bun.lock`): install with `bun ci`; start locally with `bun run start`. Node requirement: `^20.19.0 || >=22.12.0`.
- Match CI order: `bun run format:check && bun run lint && bun run typecheck && bun run build`. There is no test script; build verifies documentation links and MDX compilation.
- Lint allows no warnings.

## Wiki content

- Read `CONTRIBUTING.md` before editing wiki content; keep wiki prose in Simplified Chinese.
- This is an unofficial wiki for multiple addons. Each addon may have a different reference source; don't assume a shared upstream or copy Slimefun-Wiki's paths.
- Addons need `docs/<lowercase-kebab-name>/index.md` or `index.mdx`, an entry in `src/sidebars.ts`, and a row in `docs/list.md` sorted by English addon name; use `sidebar_position` for ordering.
- Docs are served at `/`, not `/docs/` (`routeBasePath` in `docusaurus.config.ts`); broken internal links fail the build.
- Store addon images in `static/images/<addon>/` (served at `/images/<addon>/`). In MDX, use `import ImageGallery from "@site/src/components/ImageGallery"` with `images` entries containing `src` and `alt` to match the zoom selector.

## Formatting

- `.oxfmtrc.json` is the formatting source of truth. `bun run format` formats all configured code and docs; preserve Markdown's two trailing spaces for hard line breaks.
