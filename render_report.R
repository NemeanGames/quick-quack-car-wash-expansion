#!/usr/bin/env Rscript
# Render the R Markdown report to the docs/ directory
dir.create("docs", showWarnings = FALSE)
rmarkdown::render(
  input  = "report.Rmd",
  output_format = "html_document",
  output_file   = "index.html",
  output_dir    = "docs"
)