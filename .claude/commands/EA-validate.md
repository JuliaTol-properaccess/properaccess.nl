---
description: Run Hugo build and WCAG accessibility checks
allowed-tools: Bash, Read, Glob, Grep
model: sonnet
argument-hint: [--fix] [--quick]
---

# EA-Validate

## Purpose

Run Hugo build and WCAG accessibility checks to ensure the site builds correctly and all output meets WCAG 2.2 AA. Use this after `/EA-build` to verify your implementation.

## Variables

FIX_MODE: Arguments contain "--fix"
QUICK_MODE: Arguments contain "--quick"

## Instructions

- This is a Hugo static site with Tailwind CSS
- Every change must pass both the Hugo build AND the WCAG check
- In QUICK_MODE, skip the WCAG HTML review (only run Hugo build)
- Provide clear, actionable feedback with file paths

## Workflow

1. **Run Hugo build**
   - Run `npx hugo --gc` to build the site
   - If build fails, report errors and stop
   - Note page count to confirm new/changed pages are included

2. **Check generated HTML for WCAG issues**
   - Identify which files were changed using `git diff --name-only HEAD`
   - For each changed layout or content file, find the corresponding output in `public/`
   - Read the generated HTML and check for these WCAG 2.2 AA violations:

### WCAG Checklist (mandatory)

| Check | WCAG SC | What to verify |
|-------|---------|----------------|
| Lang attribute | 3.1.1 | `<html lang="nl">` present; tool containers have `lang="en"` when English is active |
| Page title | 2.4.2 | `<title>` is descriptive and unique |
| Heading structure | 1.3.1 | Headings are in logical order (no skipped levels, one `<h1>`) |
| Image alt text | 1.1.1 | All `<img>` have `alt`; decorative images have `alt=""` |
| Link purpose | 2.4.4 | Links have descriptive text (no bare "klik hier" or "lees meer") |
| Color alone | 1.4.1 | Information is not conveyed by color alone |
| Form labels | 1.3.1 | All `<input>`, `<select>`, `<textarea>` have associated `<label>` or `aria-label` |
| ARIA usage | 4.1.2 | ARIA roles/attributes are valid and correctly applied |
| Keyboard access | 2.1.1 | Interactive elements are focusable (`<a>`, `<button>`, not `<div onclick>`) |
| Focus visible | 2.4.7 | No `outline: none` without replacement focus style |
| Error identification | 3.3.1 | Form errors are identified in text, not just color |
| Label in name | 2.5.3 | Visible text is part of the accessible name |

### Additional checks for tool pages

| Check | What to verify |
|-------|----------------|
| `data-i18n` | All user-facing strings have translation attributes |
| `lang` attribute on `.tool-container` | Set to `en` when English is active |
| `aria-live` regions | Dynamic result areas have appropriate `aria-live` |
| Button vs link | `<button>` for actions, `<a>` for navigation |

3. **Check CSS for accessibility**
   - Grep for `outline: none` or `outline: 0` without a replacement focus style
   - Verify focus styles exist for interactive elements
   - Check that text is not set with `user-select: none` on content

4. **Review JavaScript for accessibility**
   - For changed JS files: check that dynamic content updates use `aria-live`
   - Verify keyboard event handlers exist alongside click handlers where needed
   - Check that focus is managed correctly (e.g., after opening/closing modals)

5. **Compile results**
   - Count passed/failed checks
   - Group issues by severity: blocker (must fix) vs warning (should fix)

## Report

```
## Validation Results

**Project:** Proper Access website
**Status:** PASSED | PARTIAL | FAILED

### Hugo Build
- Status: PASSED/FAILED
- Pages NL: [count]
- Pages EN: [count]

### WCAG 2.2 AA Check
- Total Checks: [count]
- Passed: [count]
- Failed: [count]

### Issues Found (if any)

**[BLOCKER/WARNING] [WCAG SC] — [description]**
- File: [file:line]
- Problem: [what's wrong]
- Fix: [how to fix it]

### Next Steps
- [actionable next step based on results]
```

## Examples

**Full validation:**
```
/EA-validate
```

**Quick validation (Hugo build only):**
```
/EA-validate --quick
```
