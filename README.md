# Quick Quack Car Wash Expansion Strategy

This repository is a **stand‑alone template** for building an analytics portfolio case study.  It demonstrates how to combine reproducible analysis in **R Markdown** with a modern **React** front‑end to tell a compelling data story.

The project analyses the expansion of Quick Quack Car Wash, looking at competitor presence, growth trends, revenue models, customer sentiment, and geographic coverage.  It is designed to be easily rebranded or adapted to other industries by editing the data files and metadata.

## Contents

| Folder/File | Description |
|-------------|-------------|
| `report.Rmd` | Main R Markdown analysis.  Knits into `docs/index.html`. |
| `scripts/render_report.R` | Convenience script to knit the report into the `docs/` directory. |
| `data/` | Sample CSV datasets used in the analysis.  Replace with your own data. |
| `frontend/` | React/Vite application that visualises locations on an interactive map. |
| `firebase/data_exports/` | JSON files used by the front‑end (locations and summary stats). |
| `.github/workflows/pages.yml` | GitHub Actions workflow to build and deploy the report and app to GitHub Pages. |
| `metadata.json` | Metadata used for rebranding via `scripts/rebrand.py`. |
| `COMPLETION_CHECKLIST.md` | Task list outlining what it means for this project to be "complete". |
| `LICENSE` | MIT License. |

## Getting Started

### Requirements

* **R** with packages: `rmarkdown`, `ggplot2`, `forecast`, `leaflet`, `tidytext`, `tidyverse`, `jsonlite`.  Use `install.packages()` to install any missing packages.
* **Node.js** (v18+ recommended) and npm for the React front‑end.

### Rendering the Report

To knit the analysis into an HTML page, run the provided R script from the repository root:

```bash
Rscript scripts/render_report.R
```

This will create a `docs/` directory (if it doesn’t exist) and write `index.html` inside it.  The report pulls data from the `data/` folder and writes its output and any generated figures into `docs/`.

### Running the Front‑End

The interactive map is built with React and Vite.  To run it locally:

```bash
cd frontend
npm install
npm run dev
```

After the dependencies install, Vite will start a development server and print a local URL.  Navigate to that URL in a browser to see the map.  The app expects a `locations.json` file in the same directory where it is hosted; during development, Vite serves this from `frontend/`.

To build the app for production, run:

```bash
npm run build
```

This produces a `dist/` directory.  In the GitHub Actions workflow, the build output is copied into `docs/app/` so that GitHub Pages can serve it.

### Deployment via GitHub Pages

This template includes a workflow to automatically build and deploy both the R Markdown report and the React app to GitHub Pages.  To enable it:

1. Ensure your repository is hosted on GitHub.
2. Go to **Settings → Pages** and select **GitHub Actions** as the source.
3. Push your code to the `main` branch.  On each push, the workflow in `.github/workflows/pages.yml` will:
   * Install R and knit `report.Rmd` into `docs/index.html`.
   * Build the React app and copy it into `docs/app/`.
   * Upload the `docs/` directory as the GitHub Pages site.

Once the workflow completes, your site will be available at `https://<USERNAME>.github.io/<REPO>/` (report) and `https://<USERNAME>.github.io/<REPO>/app/` (map).

## Customising for Your Own Project

* **Data:** Replace the CSV files in the `data/` directory with your own datasets.  Update the code blocks in `report.Rmd` accordingly.
* **Locations JSON:** Update `firebase/data_exports/locations.json` with your actual latitude/longitude data.  The React app fetches this file at runtime.
* **Metadata:** Edit `metadata.json` to reflect your project title, description, and skills.  You can create a script or use `scripts/rebrand.py` to propagate these values into the README or other docs.
* **Visual Style:** Customise the front‑end styles or add additional pages to the React app as needed.  The R Markdown template uses `ggplot2` for charts, but you can include any R visualisation library you prefer.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.