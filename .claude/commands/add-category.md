# Add a New Documentation Category

Add a brand-new category/section to the FluentSMTP docs.

## Usage
```
/project:add-category {slug} {Display Name}
```

**Example:**
```
/project:add-category troubleshooting Troubleshooting
```

## What This Does

Given `$ARGUMENTS` as `{slug} {Display Name}`:

1. **Create the folder** `docs/{slug}/` (use `mkdir`).

2. **Add rewrite rule** in `.vitepress/config.js` inside the `rewrites` object:
```js
'{slug}/:slug': ':slug',
```

3. **Add sidebar section** in `.vitepress/config.js` inside the `sidebar` array:
```js
{
  text: '{Display Name}',
  collapsed: false,
  items: []
},
```
Place it at the end of the sidebar array unless the user specifies a position.

4. **Confirm** to the user: folder created, rewrite added, sidebar section added. Remind them to use `/project:add-doc {slug} {category}` to populate the new section with articles.

## Rules
- Slug must be lowercase, hyphen-separated
- Always read `.vitepress/config.js` before editing to avoid duplicate rewrites or sidebar sections
- The `collapsed: false` default keeps the section open — change to `true` only if user requests it
