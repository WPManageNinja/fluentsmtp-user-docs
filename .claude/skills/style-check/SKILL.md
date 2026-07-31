---
name: style-check
description: Audit FluentSMTP doc prose against the Writing Style Guide in CLAUDE.md — voice, intro pattern, sequential connectors, UI bolding, header case, blockquote notes, and alt text. Use when the user asks to review, proofread, lint, or check the tone and consistency of documentation writing.
---

# Style Check — Audit Prose Against the House Guide

This is the prose counterpart to `/validate-docs`. The validator checks structure that a script can prove; this checks voice, which needs reading.

## Arguments

- `{slug}` — audit one doc
- *(none)* — audit every doc under `docs/`, reporting the worst offenders first

## What to Check

Read the full file, then check each item against the **Writing Style Guide** in `CLAUDE.md`:

**Intro paragraph**
- Exactly one intro paragraph after the `# H1`
- Matches one of the three sanctioned patterns
- Ends with the en dash `–` when it introduces steps

**Voice**
- Imperative for actions: "Click", "Go to", "Navigate to" — never "Please click", "You should click", "You can now click"
- "you", never "the user"
- Each action states its consequence: "This will take you to…", "You will see…"
- No passive constructions where an imperative would do

**Step connectors**
- Sequential connectors present and in order: **First,** → **Now,** → **Then,** → **Finally,**
- Not more than one **First,** or **Finally,** per section

**UI elements**
- Bolded on first mention in each step: `**Save Connection Settings** button`, `**Settings** tab`
- Bolding is consistent within the file — do not flag a file for using a different convention than *other* files, only for being inconsistent with itself

**Headers**
- Title Case, every major word capitalized
- `&` not "and"
- Verb-first or noun-first, never a question

**Notes**
- Blockquote form: `> **Remember**, …` or `> **Note:** …`
- No "WARNING", "CAUTION", or all-caps alarm words

**Prerequisites**
- Present immediately after the intro on every connection/setup guide
- Links to `/install-and-activate-fluentsmtp`

**Images**
- Placed directly after the step they illustrate
- Alt text present, descriptive of the UI shown, no trailing period

**Structure**
- Exactly one `# H1`
- No raw HTML unless unavoidable
- Internal links use the clean slug, not a category path

## Output

Report as a per-file list, each finding as `file:line — what's wrong → suggested fix`. Rank by severity: broken conventions that a reader would notice (missing Prerequisites, question headers, "the user") above cosmetic ones (a missing connector).

**Do not edit anything unless the user asks you to.** Report first. When the user does approve fixes, apply them one file at a time and keep the diff to the flagged lines — the constraints in `/update-doc` apply.

## Judgment

The existing 25 docs are the ground truth for this voice, not an abstract rulebook. Several were migrated from WordPress and deviate in small ways. If a "violation" is widespread across the corpus, it is the house style and the guide is out of date — say so rather than filing 25 findings.
