# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal website / portfolio for matthewcampagna.com. Built with Astro, deployed to Netlify via GitHub.

## Stack

- **Astro** — static-first framework, MDX support, selective hydration
- **TypeScript**
- **MDX** — content source for case studies and writing
- **React** — islands only, where interactivity is genuinely needed
- **Tailwind CSS**

## Commands

```bash
pnpm dev          # dev server
pnpm build        # production build
pnpm preview      # preview production build locally
```

## Content Architecture

Content lives in `src/content/` as Astro Content Collections:

```
src/content/
  work/       # case study MDX files (Glue, Kiln, Backlight, ...)
  writing/    # blog/essay MDX files (future)
  pages/      # static page content (future)
```

Adding a new case study = creating a new MDX file in `src/content/work/`. No code changes required.

## Site Structure

- `/` — Home: bio, featured work, current focus, resume link, contact
- `/work` — Case study index
- `/work/[slug]` — Individual case study
- `/about` — Background, philosophy, approach
- `/resume` — Resume page + download

## Component Philosophy

Pages are composed from reusable components rather than bespoke layouts. Core components: Hero, Section, ProjectCard, CaseStudyHeader, Gallery, Timeline, Quote/Callout, Video, ResumeDownload, SocialLinks.

## Design Constraints

- Restrained, editorial aesthetic
- Excellent typography, generous whitespace
- No heavy animations or flashy interactions
- Fast, accessible, responsive
- Minimal client-side JavaScript

## Non-goals (v1)

CMS, search, RSS, interactive demos, complex blog engine, fancy transitions.
