#!/usr/bin/env python3
"""Check that local module imports, assets and deployment configuration resolve."""
from pathlib import Path
from html.parser import HTMLParser
import json
import re
import sys

ROOT = Path(__file__).resolve().parent.parent
errors = []


def verify_file(reference, parent):
    if reference.startswith(("https:", "http:", "data:", "#")):
        return
    target = ROOT / reference.lstrip("/") if reference.startswith("/") else parent / reference
    if not target.is_file():
        errors.append(f"Missing reference: {reference} from {parent.relative_to(ROOT)}")


class AssetParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        for key in ("src", "href"):
            if key in attributes:
                verify_file(attributes[key], ROOT)


AssetParser().feed((ROOT / "index.html").read_text())
for source in (ROOT / "src").glob("*.js"):
    for path in re.findall(r"from\s+['\"](\.[^'\"]+)['\"]", source.read_text()):
        verify_file(path, source.parent)
for path in re.findall(r"url\(['\"]?([^)'\"]+)", (ROOT / "assets/styles.css").read_text()):
    verify_file(path, ROOT / "assets")
for filename in ("package.json", "vercel.json"):
    json.loads((ROOT / filename).read_text())
for script in (ROOT / "scripts").glob("*.py"):
    compile(script.read_text(), str(script), "exec")
if errors:
    print("\n".join(errors), file=sys.stderr)
    sys.exit(1)
print("Check OK: HTML assets, ES module imports, stylesheet assets, Python scripts and deployment JSON.")
