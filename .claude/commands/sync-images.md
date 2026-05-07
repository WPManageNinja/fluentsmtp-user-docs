# Sync Images — Download, Convert to WebP, Remap Links

Download all external image URLs in a doc (or all docs), convert to WebP, store locally, and update markdown.

## Usage
```
/project:sync-images               # process all docs
/project:sync-images {slug}        # process one doc by slug
```

**Example:**
```
/project:sync-images configure-mailgun-with-fluentsmtp
```

## What This Does

**If a slug is given in `$ARGUMENTS`:**
- Find the markdown file matching that slug across all category folders in `docs/`

**If no arguments:**
- Process every `.md` file in `docs/` (excluding `index.md`)

**For each file, for every `![alt](https://...)` image:**

1. **Determine paths:**
   - `category` = parent folder name (e.g. `delivery-connections`)
   - `slug` = file stem (e.g. `configure-mailgun-with-fluentsmtp`)
   - `dest_dir` = `docs/public/images/{category}/{slug}/`

2. **Download** the image using `curl` with a browser User-Agent:
```bash
curl -L -A "Mozilla/5.0" -o "{dest_dir}/{filename}" "{url}"
```
   Percent-encode any non-ASCII characters in the URL path before downloading.

3. **Convert to WebP** using `cwebp`:
   - PNG → `cwebp -lossless {src} -o {dest}.webp`
   - JPG/JPEG → `cwebp -q 90 {src} -o {dest}.webp`
   - Already `.webp` → skip conversion, keep as-is
   - Delete original non-webp file after successful conversion

4. **Update markdown link** — replace `![alt](https://...)` with `![alt](/images/{category}/{slug}/{filename}.webp)`

5. **Add alt text** if the alt is empty — derive from filename:
   - Remove leading `N.-` or `N.` numbering
   - Replace `-` and `_` with spaces
   - Title-case the result

## Requirements
- `cwebp` must be installed: `brew install webp`
- Internet access to fetch images from `fluentsmtp.com`

## Rules
- Never leave broken image links — if a download fails, keep the original URL and warn the user
- Images already stored locally (path starts with `/`) are skipped entirely
- Create destination directories as needed before downloading
