# Portfolio Website Prospectus

## Purpose

Build a personal website that supports my job search immediately while
providing a foundation that can evolve for years. Version 1 should be
intentionally small, polished, and easy to extend.

The site is **not** just a portfolio. It is the canonical home for my
work, writing, resume, and professional identity.

------------------------------------------------------------------------

# Guiding Principles

## Ship Quickly

The first version should be achievable in a weekend, not a month. Every
feature should earn its place.

## Evolve Naturally

The site should be designed for iteration. Resist trying to solve every
future need today. New sections, projects, and writing should be easy to
add without restructuring the site.

## Content First

Content drives the architecture. Pages should be generated from
structured content (MDX/Markdown), not handcrafted layouts.

## Components over Pages

Build reusable components rather than bespoke pages.

Potential components:

-   Hero
-   Section
-   Project Card
-   Case Study Header
-   Gallery
-   Timeline
-   Quote / Callout
-   Video
-   Resume Download
-   Social Links

Pages should be composed from these building blocks.

## Composition over Configuration

Avoid deeply nested configuration or page-specific logic. Favor simple
composition where sections can be reordered or replaced with minimal
effort.

------------------------------------------------------------------------

# Technical Direction

## Framework

Astro

Reasons:

-   Static-first architecture
-   Excellent performance
-   MDX support
-   Selective hydration
-   TypeScript support
-   React islands only where beneficial

## Stack

-   Astro
-   TypeScript
-   MDX
-   React (islands only)
-   Tailwind CSS

------------------------------------------------------------------------

# Site Structure (Version 1)

-   Home
-   Work
-   About
-   Resume

A Writing section can be added later without requiring architectural
changes.

------------------------------------------------------------------------

# Home

A concise introduction.

-   Short bio
-   Featured work
-   Current focus
-   Resume
-   Contact links

------------------------------------------------------------------------

# Work

Initially feature:

-   Glue
-   Kiln
-   Backlight

Additional work can be added over time.

Each case study should include:

-   Context
-   My role
-   Interesting problems
-   Engineering highlights
-   Screenshots
-   Lessons learned

Focus on engineering decisions and product thinking rather than
marketing.

------------------------------------------------------------------------

# About

Tell the broader story:

-   The Turning Gate
-   Photography
-   Product philosophy
-   AI-assisted engineering
-   How I approach building software

------------------------------------------------------------------------

# Architecture

Use Astro Content Collections with content organized roughly as:

content/ - work/ - writing/ - pages/

The goal is to make adding a new case study as simple as creating
another MDX file.

------------------------------------------------------------------------

# Design Direction

The aesthetic should be restrained and editorial.

Priorities:

-   Excellent typography
-   Generous whitespace
-   Accessible
-   Responsive
-   Fast
-   Minimal animation
-   Calm, polished presentation

Avoid flashy interactions or unnecessary visual effects.

------------------------------------------------------------------------

# Non-goals (Version 1)

-   CMS
-   Search
-   RSS
-   Complex blog engine
-   Interactive demos
-   Fancy transitions
-   Heavy client-side JavaScript

These can all be added later if they become valuable.

------------------------------------------------------------------------

# Success Criteria

Someone should be able to spend ten minutes on the site and leave with a
clear understanding of:

-   What I've built
-   How I think
-   The kinds of problems I enjoy solving
-   Why I'd be a valuable teammate

The website should feel like the work of someone who has spent years
building thoughtful software---not someone showing off a frontend
framework.

------------------------------------------------------------------------

# Initial Milestones

1.  Bootstrap Astro project.
2.  Build the core layout and typography.
3.  Create reusable page components.
4.  Implement Home, Work, About, and Resume.
5.  Publish initial case studies for Glue, Kiln, and Backlight.
6.  Deploy.
7.  Iterate as needed while continuing the job search.
