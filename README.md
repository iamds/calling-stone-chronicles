# The Calling Stone Chronicles — Website

A plain static website (HTML, CSS and images). No build step is needed.

## Editing

Edit the `.html` files directly. Each page is an `index.html` in its own folder
(e.g. `books/index.html`, or `realms/winter/index.html` for a single realm), with shared styling in `styles.css` and pictures in `images/`.
The header nav is repeated at the top of every page, so a nav change has to be made in each file.

All links are relative, so the site works whether it's served from
`https://<user>.github.io/calling-stone-chronicles/`, a custom domain, or opened straight from disk.

## Hosting on GitHub Pages

1. Push to GitHub.
2. In the repo go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. The site will appear at `https://<user>.github.io/calling-stone-chronicles/` after a minute or two.

To preview locally: `python3 -m http.server` then open http://localhost:8000.

The old Eleventy + Decap CMS source is still in the git history if it's ever needed.
