#!/usr/bin/env python3
"""
rebrand.py
---------------
This script updates documentation files using values from a metadata JSON file.  It can replace
placeholders like `{{PROJECT_TITLE}}` with the corresponding value from `metadata.json`.

Usage:

    python scripts/rebrand.py --metadata metadata.json --files README.md report.Rmd

This will read the metadata and replace placeholders in the specified files.  Only placeholders
present in the metadata file are replaced.  Unknown placeholders are left as-is.
"""
import argparse
import json
import pathlib
import re


def main():
    parser = argparse.ArgumentParser(description="Rebrand project using metadata values.")
    parser.add_argument("--metadata", default="metadata.json", help="Path to JSON metadata file.")
    parser.add_argument("--files", nargs="+", required=True, help="Files to update.")
    args = parser.parse_args()

    metadata_path = pathlib.Path(args.metadata)
    with metadata_path.open() as f:
        metadata = json.load(f)

    replacements = {
        "{{PROJECT_TITLE}}": metadata.get("project_title", ""),
        "{{PROJECT_DESCRIPTION}}": metadata.get("project_description", ""),
        "{{INDUSTRY}}": metadata.get("industry", ""),
        "{{SKILLS}}": ", ".join(metadata.get("skills", [])),
    }

    for file_path in args.files:
        file = pathlib.Path(file_path)
        text = file.read_text()
        for placeholder, value in replacements.items():
            text = text.replace(placeholder, value)
        file.write_text(text)
        print(f"Updated {file}")


if __name__ == "__main__":
    main()