#!/usr/bin/env python3
"""Create a static, self-contained deployment artifact using only Python stdlib."""
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / "dist"


def build():
    OUTPUT.mkdir(exist_ok=True)
    for directory in ("assets", "src"):
        destination = OUTPUT / directory
        if destination.exists():
            shutil.rmtree(destination)
        shutil.copytree(ROOT / directory, destination)
    shutil.copy2(ROOT / "index.html", OUTPUT / "index.html")
    files = [path for path in OUTPUT.rglob("*") if path.is_file()]
    print(f"Build OK: {len(files)} files, {sum(path.stat().st_size for path in files):,} bytes in dist/")


if __name__ == "__main__":
    build()
