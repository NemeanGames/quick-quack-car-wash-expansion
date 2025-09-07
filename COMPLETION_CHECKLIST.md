# ✅ Project Completion Checklist – Quick Quack Car Wash Analytics Portfolio

Use this checklist to track progress toward a fully functional portfolio project.  All items in sections 1–6 must be checked before you can consider the project complete.

## 1. Analysis & Reporting
- [ ] `report.Rmd` knits without errors
- [ ] `docs/index.html` is generated successfully
- [ ] All analysis sections are complete (EDA, forecasting, geospatial, ROI, sentiment, narratives)
- [ ] Executive Summary is polished and recruiter‑ready
- [ ] AI‑assisted summaries have been reviewed/edited for accuracy (if used)

## 2. Data
- [ ] Core datasets present in `data/`:
  - [ ] `competitor_dataset.csv`
  - [ ] `competitor_growth_trend.csv`
  - [ ] `mod_wash_forecast.csv`
  - [ ] `membership_roi.csv`
  - [ ] `sentiment_reviews.csv`
- [ ] Data cleaning scripts run end‑to‑end
- [ ] `portfolio.duckdb` builds without manual intervention (optional)

## 3. Front‑End (React/Vite App)
- [ ] `npm run build` completes without errors
- [ ] `npm run dev` runs cleanly for local testing
- [ ] Leaflet map loads Quick Quack + competitor locations
- [ ] Firebase or static JSON fetches data successfully
- [ ] Styling has basic branding and responsive layout
- [ ] SPA fallback (`404.html`) is present in `docs/app/`

## 4. Integration
- [ ] R Markdown output is in `docs/index.html`
- [ ] React app output is in `docs/app/`
- [ ] Links from report/README to `/app/` work correctly
- [ ] No dead links or missing assets

## 5. Deployment
- [ ] GitHub Actions workflow (`.github/workflows/pages.yml`) builds report + app
- [ ] Workflow deploys to GitHub Pages automatically on `main`
- [ ] Live site loads report at `/`
- [ ] Live app loads at `/app/` with working CSS/JS

## 6. Documentation
- [ ] `README.md` updated with project overview, reproducibility steps, local dev instructions, and live links
- [ ] `metadata.json` and any rebranding scripts explained
- [ ] `.gitignore` excludes raw/secret/large files
- [ ] `LICENSE` file is included

## 7. Stretch Goals (Optional)
- [ ] R Shiny dashboard deployed to shinyapps.io
- [ ] Predictive modelling for site selection
- [ ] Additional data sources (traffic, demographics, live review pulls)
- [ ] Professional branding/theme polish