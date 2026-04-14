#!/usr/bin/env bash

set -euo pipefail

# Usage:
#   ./convert-jpg-to-webp.sh <folder> [quality]
# Example:
#   ./convert-jpg-to-webp.sh ./images 50

if ! command -v cwebp >/dev/null 2>&1; then
  echo "Error: cwebp is not installed or not in PATH." >&2
  exit 1
fi

if [[ $# -lt 1 || $# -gt 2 ]]; then
  echo "Usage: $0 <folder> [quality]" >&2
  exit 1
fi

folder="$1"
quality="${2:-50}"

if [[ ! -d "$folder" ]]; then
  echo "Error: folder '$folder' does not exist." >&2
  exit 1
fi

if ! [[ "$quality" =~ ^[0-9]+$ ]] || (( quality < 0 || quality > 100 )); then
  echo "Error: quality must be an integer between 0 and 100." >&2
  exit 1
fi

converted=0

while IFS= read -r -d '' input_file; do
  output_file="${input_file%.*}.webp"
  cwebp -q "$quality" "$input_file" -o "$output_file" >/dev/null
  echo "Converted: $input_file -> $output_file"
  converted=$((converted + 1))
done < <(find "$folder" -type f \( -iname "*.jpg" \) -print0)

echo "Done. Converted $converted file(s)."
