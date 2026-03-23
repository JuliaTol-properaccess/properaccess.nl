# Workflow Recipes

A guide to choosing the right workflow for your task.

---

## The Core Principle

Every workflow follows the same pattern:

```
CREATE ──► EXECUTE ──► VERIFY ──► SHIP
```

What changes is how thorough you are at each step.

---

## Recipe 1: Quick Fix

**Success Rate:** ~75%
**Best For:** Bug fixes, small changes, low-risk updates
**Time:** 10-15 minutes

### The Flow

```
/EA-plan "Fix [specific bug]"
     │
     ▼
/EA-build specs/todo/fix-*.md
     │
     ▼
/EA-validate
     │
     ▼
/EA-commit
```

### When to Use

- Single-file changes
- Obvious bugs with clear fixes
- Styling/formatting updates
- Configuration changes
- Documentation updates

### What You Skip

- **Review**: Small changes don't need spec comparison
- **Security**: Low-risk changes don't need audit

### Example

```bash
/EA-plan "Fix button color on homepage header"
/EA-build specs/todo/fix-button-color.md
/EA-validate --quick
/EA-commit "fix: correct header button color"
```

---

## Recipe 2: Standard Feature

**Success Rate:** ~85%
**Best For:** New features, medium complexity, user-facing changes
**Time:** 30-45 minutes

### The Flow

```
/EA-plan "Add [feature]"
     │
     ▼
/EA-build specs/todo/feature-*.md
     │
     ▼
/EA-validate
     │
     ▼
/EA-review specs/done/feature-*.md
     │
     ▼
/EA-commit
```

### When to Use

- New functionality
- Multiple file changes
- User-facing features
- API changes
- Database modifications

### What You Skip

- **Security**: Unless dealing with auth/data/payments

### Example

```bash
/EA-plan "Add search functionality to product list"
/EA-build specs/todo/add-search.md
/EA-validate
/EA-review specs/done/add-search.md
/EA-commit "feat: add product search functionality"
```

---

## Recipe 3: Full Workflow with Security

**Success Rate:** ~95%
**Best For:** Auth, payments, user data, API endpoints
**Time:** 45-60 minutes

### The Flow

```
/EA-plan "Add [security-sensitive feature]"
     │
     ▼
/EA-build specs/todo/feature-*.md
     │
     ▼
/EA-validate
     │
     ▼
/EA-security (covered in Module 7)
     │
     ▼
/EA-review specs/done/feature-*.md
     │
     ▼
/EA-commit
```

### When to Use

- Authentication/authorization
- Payment processing
- User data handling
- External API integrations
- File uploads
- Admin functionality

### What's Added

- **Security audit**: Check for vulnerabilities before review

### Example

```bash
/EA-plan "Add user password reset functionality"
/EA-build specs/todo/password-reset.md
/EA-validate
# /EA-security (if you have Module 7)
/EA-review specs/done/password-reset.md
/EA-commit "feat: add password reset flow"
```

---

## Decision Flowchart

```
                    START
                      │
                      ▼
            ┌─────────────────┐
            │  Is this a      │
            │  small fix?     │
            └────────┬────────┘
                 │        │
                YES       NO
                 │        │
                 ▼        ▼
           ┌──────────┐   │
           │ Quick    │   │
           │ Fix      │   │
           │ Recipe   │   │
           └──────────┘   │
                          ▼
            ┌─────────────────┐
            │  Does it touch  │
            │  auth/payments/ │
            │  user data?     │
            └────────┬────────┘
                 │        │
                YES       NO
                 │        │
                 ▼        ▼
           ┌──────────┐  ┌──────────┐
           │ Full     │  │ Standard │
           │ Workflow │  │ Feature  │
           │ +Security│  │ Recipe   │
           └──────────┘  └──────────┘
```

---

## Phase Ordering Rules

### Fixed Order (Cannot Change)

| Phase | Why It's Fixed |
|-------|----------------|
| Plan FIRST | Can't build without a plan |
| Build SECOND | Need code to test |
| Validate THIRD | Catch bugs while context is fresh |
| Commit LAST | Only ship verified code |

### Flexible (Can Reorder)

| Phase | Recommended Position | Reason |
|-------|---------------------|--------|
| Security | Before Review | Find critical issues early |
| Review | Before Commit | Last quality check |

---

## Success Rate Breakdown

| Recipe | Success Rate | Why |
|--------|--------------|-----|
| Quick Fix | ~75% | Faster, less thorough, some issues slip through |
| Standard | ~85% | Review catches spec mismatches |
| Full + Security | ~95% | Comprehensive checks, minimal surprises |

**The tradeoff**: More phases = higher success but more time

---

## When to Upgrade Your Recipe

Start with Quick Fix, upgrade if:
- Changes span multiple files
- You're adding new functionality (not just fixing)
- The feature is user-facing
- You're touching data or authentication

**Rule of thumb**: When in doubt, use Standard Feature.

---

*The best workflow is the one you actually use.*
