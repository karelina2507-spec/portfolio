#!/usr/bin/env python3
"""Dependency-free local preview. Never serves Git metadata or project tooling."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlparse
import argparse

ROOT = Path(__file__).resolve().parent.parent


class PreviewHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        path = unquote(urlparse(self.path).path)
        relative = path.lstrip("/") or "index.html"
        resolved = (ROOT / relative).resolve()
        allowed = relative == "index.html" or relative.startswith(("assets/", "src/"))
        if not allowed or ROOT not in resolved.parents or not resolved.is_file():
            self.send_error(404)
            return
        super().do_GET()

    def do_HEAD(self):
        path = unquote(urlparse(self.path).path)
        relative = path.lstrip("/") or "index.html"
        resolved = (ROOT / relative).resolve()
        if not (relative == "index.html" or relative.startswith(("assets/", "src/"))) or ROOT not in resolved.parents or not resolved.is_file():
            self.send_error(404)
            return
        super().do_HEAD()

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        super().end_headers()


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", type=int, default=5173)
    args = parser.parse_args()
    server = ThreadingHTTPServer(("127.0.0.1", args.port), PreviewHandler)
    print(f"Local: http://127.0.0.1:{args.port}", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.server_close()
