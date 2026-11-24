# Xin Huang — Personal Website

A static personal portfolio focused on LLM agents, reliable ML experimentation, and continual learning, with a brief introduction to algorithm engineering interests. Graduation: **4 December 2026**.

The site includes light, dark, and system themes. It follows the system preference initially and saves an explicit light/dark choice in local storage. Theme switching also works when storage is blocked; without JavaScript, the site follows the system preference.

## Publish with GitHub Pages

1. Use the existing `carriehxx/xin-huang-hku` repository, or another repository with GitHub Pages enabled.
2. Keep `index.html` at the repository root, alongside `styles.css`, `site.js`, `favicon.svg`, `.nojekyll`, and `files/`.
3. In **Settings → Pages**, choose **Deploy from a branch**, then **main** and **/(root)**, and save.
4. GitHub Pages will display the website address when publication finishes.

## Update the website

Edit `index.html` for text and links, `styles.css` for layout and theme colors, `site.js` for theme behavior, and the files under `files/` for downloadable documents and the photograph. Commit and push the changes to the publishing branch; GitHub Pages will publish the new version when configured as above.

For a local preview, run `python -m http.server 8000` from this directory and visit `http://localhost:8000`.

The research-statement URL uses the filename tracked by Git: `files/HuangXin_research_statement.pdf`. Keep the exact capitalization for GitHub Pages, which serves paths case-sensitively.

The downloadable PDFs are retained as supplied. The CV still lists the former expected November 2026 graduation date, and the research statement includes earlier PhD plans; the website reflects the current graduation date and industry job search. The transcript PDFs were not parsed or reviewed.
