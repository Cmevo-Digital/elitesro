#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

ENV_FILE="$ROOT_DIR/.env"
if [[ ! -f "$ENV_FILE" ]]; then
  echo "Error: .env file not found at $ENV_FILE" >&2
  exit 1
fi
set -a; source "$ENV_FILE"; set +a

for var in FTP_HOST FTP_USER FTP_PASSWORD; do
  [[ -z "${!var:-}" ]] && { echo "Error: $var is not set in .env" >&2; exit 1; }
done

cd "$ROOT_DIR"
echo "==> Building..."
yarn build

echo "==> Uploading ./out to ftp://$FTP_HOST/home/zdhavuxd/public_html ..."
node "$ROOT_DIR/bin/ftp-upload.mjs"

echo "==> Deploy complete."
