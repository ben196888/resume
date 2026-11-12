# Resume redirects

This repository redirects the old GitHub Pages site at
<https://ben196888.github.io/resume/> to benliu.dev. Keep Pages enabled.
The Astro résumé remains available in Git history, and `resume-latex/` retains
the historical LaTeX sources.

**Do not merge or deploy until benliu.dev production is verified on the new
host, and the Pages custom domain `benliu.dev` has been removed from this
repo.** Merging while this repo still owns that custom domain would publish
these redirects at the apex.

| Old URL | Destination or behavior |
| --- | --- |
| `https://ben196888.github.io/resume/` | Redirect to `https://benliu.dev/about/` |
| `https://ben196888.github.io/resume/index.html` | Redirect to `https://benliu.dev/about/` |
| Unmatched paths, including old assets such as `/favicon.svg` and `/_astro/*` (`404.html`) | Redirect to `https://benliu.dev/` |
| `https://ben196888.github.io/resume/resume.pdf` | Serve the existing PDF in place; canonical new URL: `https://benliu.dev/resume.pdf` |

The HTML pages provide an immediate meta refresh, a JavaScript redirect that
preserves the URL hash, a canonical URL, and a visible fallback link.
They use `noindex` to keep the redirect pages out of search results.

GitHub Pages cannot issue a 301 redirect for a PDF, so the root `resume.pdf`
stays byte-for-byte unchanged (SHA-256
`edce0b43d4b8e16e9dae9850d9564feb788d6732df2987c34a631225e63010c4`) and is
copied into the Pages artifact during the build. This keeps a single source
file and makes the old PDF URL available after cutover (it currently 404s
because the file was never in the Astro `public/` folder). That historical
PDF is not the same file as the new site's
`https://benliu.dev/resume.pdf` (SHA-256
`434421857b5f2f986b47696d93655a544803dda1edee162fd86c0578f1209d81` on the
`feat/pixel-personal-site` preview).

`.github/workflows/deploy.yml` publishes `site/` plus the root PDF through the
Pages artifact and deployment actions. It runs on pushes to `master` or manual
dispatch, with no Node.js or Astro build, and does not deploy from pull
requests.

After DNS for `benliu.dev` points at the new site, remove the Pages custom
domain `benliu.dev` in this repository's settings so
`https://ben196888.github.io/resume/` serves these files instead of 301ing to
the apex. Do not add a `CNAME` file: the custom domain is managed in
repository settings. Pages stays enabled; the repo may be archived later
(archived repos keep serving Pages).
