# The Specs Folder System

How the specs folder tracks your work automatically.

---

## Overview

```
specs/
├── todo/           # Plans waiting to be built
├── done/           # Completed plans
└── handoffs/       # Session state files
```

This simple structure gives you:
- A clear view of what's planned vs. completed
- History of every feature you've built
- Session continuity across terminal sessions

---

## How It Works

### Creating a Plan

When you run `/EA-plan`:

```
/EA-plan "Add user profile page"
```

A spec file is created:
```
specs/todo/user-profile-page.md
```

### Building from a Plan

When you run `/EA-build`:

```
/EA-build specs/todo/user-profile-page.md
```

After successful build:
```
specs/todo/user-profile-page.md  →  specs/done/user-profile-page.md
```

The file automatically moves from `todo/` to `done/`.

### Session Handoffs

When you run `/EA-handoff`:

```
specs/handoffs/001-2026-01-24-user-profile.md
```

Numbered sequentially for clear ordering.

---

## File Naming Conventions

### Plan Files

Format: `[descriptive-kebab-case].md`

Examples:
- `add-user-auth.md`
- `fix-login-bug.md`
- `refactor-api-handlers.md`

### Handoff Files

Format: `[NNN]-[YYYY-MM-DD]-[topic].md`

Examples:
- `001-2026-01-24-initial-setup.md`
- `002-2026-01-25-api-work.md`
- `003-2026-01-26-frontend-ui.md`

The number prefix (001, 002, 003) ensures correct ordering.

---

## Viewing Your Work

### What's Planned?

```bash
ls specs/todo/
```

Shows all plans waiting to be implemented.

### What's Done?

```bash
ls specs/done/
```

Shows all completed work with full history.

### Session History?

```bash
ls specs/handoffs/
```

Shows all session handoffs, newest last (highest number).

---

## Why This System Works

### 1. No Manual Tracking

The commands handle movement automatically:
- `/EA-plan` → creates in `todo/`
- `/EA-build` → moves to `done/`
- `/EA-handoff` → creates in `handoffs/`

### 2. Built-in History

The `done/` folder becomes your feature history:
- What did I build last month?
- How did I solve this before?
- What was the plan for that feature?

### 3. Clear Status at a Glance

```
specs/
├── todo/           # 3 files = 3 things to build
├── done/           # 47 files = 47 completed features
└── handoffs/       # 12 files = 12 sessions recorded
```

### 4. Session Continuity

Handoffs let you:
- Stop mid-feature and resume later
- Switch between projects
- Hand off work to others

---

## Best Practices

### Keep Specs Descriptive

**Good:**
```
specs/todo/add-stripe-payment-integration.md
```

**Bad:**
```
specs/todo/feature.md
```

### One Feature Per Spec

Don't combine multiple unrelated changes in one spec.

### Clean Up Periodically

Old handoffs can be archived or deleted once no longer needed.

### Use Specs as Documentation

The `done/` folder is your project's feature history. Keep specs detailed enough to be useful later.

---

## Folder Setup

If the folders don't exist, create them:

```bash
mkdir -p specs/todo specs/done specs/handoffs
```

Or the commands will create them automatically on first use.

---

*Your specs folder is your project's memory.*
