---
name: "Md. Al Imran Emon — Portfolio"
description: "Full Stack Developer and competitive programmer portfolio styled as a painted Dhaka rickshaw back-plate and live contest scoreboard."
colors:
  marigold: "#ffb92e"
  vermilion: "#ff4d2e"
  teal: "#1fd1bd"
  magenta: "#ff4d94"
  leaf: "#7ee06a"
  ink: "#0e0b15"
  ink-raised: "#151120"
  ink-well: "#1d1830"
  ink-ridge: "#2b2445"
  cream: "#f7eddb"
  cream-muted: "#d6cbb7"
  warm-stone: "#b5aa9d"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Figtree, system-ui, sans-serif"
    fontSize: "clamp(2.85rem, 6.2vw, 5.1rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, Figtree, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 4.4vw, 3.35rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, Figtree, system-ui, sans-serif"
    fontSize: "1.38rem"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, Cascadia Mono, monospace"
    fontSize: "0.8rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.06em"
  bangla:
    fontFamily: "Tiro Bangla, Noto Serif Bengali, serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  sm: "10px"
  md: "14px"
  lg: "22px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "24px"
  lg: "40px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.marigold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "12px 22px"
  button-primary-hover:
    backgroundColor: "#ffc94f"
    textColor: "{colors.ink}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.md}"
    padding: "12px 22px"
  chip-stack:
    backgroundColor: "rgba(247, 237, 219, 0.04)"
    textColor: "{colors.cream-muted}"
    rounded: "{rounded.pill}"
    padding: "5px 13px"
  card-plate:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.cream}"
    rounded: "{rounded.lg}"
    padding: "28px"
---

# Design System: Md. Al Imran Emon — Portfolio

## Overview

**Creative North Star: "The Dhaka Rickshaw Scoreboard"**

This design system fuses the hand-painted enamel exuberance of Dhaka rickshaw back-plates with the tabular precision of a live competitive-programming scoreboard. Set on a deep nocturnal ink-violet ground (`#0e0b15`), the interface uses four saturated enamel pigments—marigold, vermilion, peacock teal, and lotus magenta—as structural plates, geometric garlands, and spoked-wheel dividers rather than scattered neon glows.

Every decorative motif earns its keep by framing real engineering proof: live contest ratings from Codeforces, CodeChef, and LeetCode sit above the fold in a tabular scoreboard; professionally graded skills are organized into four enamel ledgers with 5-segment proficiency bars (`Core`, `Production`, `Working`); and each shipped project opens into a full case-study plate. It explicitly rejects the generic dark-mode SaaS template of purple-to-cyan gradient text, blurred neon box-shadows, and tiny uppercase kicker chips above headings.

**Key Characteristics:**
- Nocturnal ink-violet canvas (`#0e0b15`) with warm cream lettering (`#f7eddb`) and four opaque enamel accents.
- Crisp 2px all-around enamel borders, geometric SVG garland dividers, and 20-spoke rickshaw wheel markers.
- Expressive display headlines in **Bricolage Grotesque** paired with legible **Figtree** prose and tabular **JetBrains Mono** contest metrics.
- Scroll-driven kinetic banners and physical entrance transforms that keep all text at 100% opacity at rest.

## Colors

The palette pairs a warm, high-contrast nocturnal ink ground with four saturated enamel colours drawn from Bangladeshi street craft.

### Primary
- **Rickshaw Marigold** (`#ffb92e`): Primary interactive accent, primary CTA fill, active navigation indicator, `Core` skill badge, and arch portrait frame.
- **Sindoor Vermilion** (`#ff4d2e`): Secondary display accent for the surname highlight, scroll-driven skill banner background, and frontend plate tone.

### Secondary
- **Peacock Teal** (`#1fd1bd`): Codeforces platform signature, `Production` skill tier color, and backend/E-Health plate tone.
- **Lotus Magenta** (`#ff4d94`): AI/ML & Cloud plate tone, ChurnIQ project tone, and alternating garland petal accent.

### Tertiary
- **Betel Leaf Green** (`#7ee06a`): Live synchronization badge and positive contest rating delta (`▲`).

### Neutral
- **Midnight Ink** (`#0e0b15`): Primary page background and dark text color on solid marigold, vermilion, or green buttons.
- **Raised Ink** (`#151120`): Elevated section background, scoreboard surface, and skill plate background.
- **Well Ink** (`#1d1830`): Table column header bar, browser chrome header, and image fallback surface.
- **Ridge Ink** (`#2b2445`): Scrollbar thumb and structural accents.
- **Warm Cream** (`#f7eddb`): Primary heading and body foreground (`16.8:1` contrast against Midnight Ink).
- **Parchment Cream** (`#d6cbb7`): Secondary body copy, evidence subtitles, and table labels (`12.2:1` contrast against Midnight Ink).
- **Warm Stone** (`#b5aa9d`): Muted metadata and inactive indicators (`8.6:1` contrast against Midnight Ink).

### Named Rules
**The Opaque Enamel Rule.** Accent colors (`#ffb92e`, `#ff4d2e`, `#1fd1bd`, `#ff4d94`) are applied as solid fills, crisp 2px full-perimeter borders, or SVG geometric inlays—never as blurred chromatic drop-shadows or translucent radial spotlight halos.

**The Dark-Ink-on-Enamel Rule.** Whenever a surface is filled with Marigold (`#ffb92e`), Vermilion (`#ff4d2e`), Teal (`#1fd1bd`), or Leaf Green (`#7ee06a`), foreground text and icons must switch to Midnight Ink (`#0e0b15`) to preserve crisp contrast.

## Typography

**Display Font:** Bricolage Grotesque (with Figtree, system-ui, sans-serif fallback)
**Body Font:** Figtree (with system-ui, -apple-system, Segoe UI, sans-serif fallback)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, Cascadia Mono, monospace fallback); **Tiro Bangla** for Bengali script (`আল ইমরান ইমন`, `বাজার দর`).

**Character:** Bricolage Grotesque brings woodblock-inspired curves and confident ink traps at heavy weights (700–800), giving headlines the presencia of hand-lettered signage, while Figtree keeps multi-paragraph project case studies effortless to scan and JetBrains Mono locks ratings and ranks to a strict tabular grid.

### Hierarchy
- **Display** (`800`, `clamp(2.85rem, 6.2vw, 5.1rem)`, line-height `0.98`, tracking `-0.035em`): Hero name headline only.
- **Headline** (`800`, `clamp(2.1rem, 4.4vw, 3.35rem)`, line-height `1.08`, tracking `-0.03em`): Section headers (`About me`, `Selected projects`, `Engineering skills`).
- **Title** (`800`, `1.38rem`, line-height `1.12`, tracking `-0.02em`): Project card titles, skill category headers, and academic/experience stop titles.
- **Body** (`400`, `1.0625rem` / `17px`, line-height `1.65`): Narrative paragraphs, project descriptions, and challenge lists, constrained to `60ch–72ch`.
- **Label** (`700`, `0.8rem` / `12.8px`, line-height `1.2`, tracking `0.06em`, `font-variant-numeric: tabular-nums`): Contest table headers, proficiency grade tags, and timestamps.

### Named Rules
**The Tabular Scoreboard Rule.** Every numeric rating, rank, contest count, delta (`+78`), and CGPA/GPA stamp is set in **JetBrains Mono** with `font-variant-numeric: tabular-nums` so digits align vertically across rows.

**The No-Kicker Rule.** Headings never carry a small uppercase eyebrow or pill chip above them; the heading itself leads the section, followed by the SVG garland divider beneath it.

## Layout

The layout centers on a responsive container (`width: min(1160px, 100% - 2 * clamp(20px, 5vw, 48px))`) with generous vertical section padding (`clamp(76px, 10vw, 124px)`). Sections alternate between the dotted Midnight Ink canvas (`#0e0b15`) and full-bleed Raised Ink bands (`#151120`) bounded by hairline cream dividers (`rgba(247, 237, 219, 0.12)`).

- **Hero Split + Full-Width Scoreboard:** Above the fold, a `1.2fr / 0.8fr` two-column grid pairs the typographic introduction on the left with the arch-framed portrait plate on the right, anchored immediately below by the full-width 6-column live contest standings table.
- **Project Triad (`3 columns`):** `.pgrid` arranges the three featured projects in a `repeat(3, minmax(0, 1fr))` grid (`gap: clamp(20px, 2.6vw, 30px)`), collapsing to `1fr` below `980px`.
- **Skill Plates (`2x2 grid`):** `.plates` arranges the four engineering categories in a 2-column grid (`repeat(2, minmax(0, 1fr))`), where each plate contains a vertical ledger of flat rows separated by `1px` dividers—never cards nested inside cards.

## Elevation & Depth

Depth is achieved through stepped opaque ink surfaces (`#0e0b15` → `#151120` → `#1d1830`), 2px perimeter borders, and neutral black elevation shadows. Colored glow shadows and translucent radial background blurs are forbidden.

### Shadow Vocabulary
- **Button Lift** (`box-shadow: 0 12px 24px -10px rgba(0, 0, 0, 0.65)`): Used on solid marigold and WhatsApp action buttons; deepens to `0 18px 30px -10px rgba(0, 0, 0, 0.75)` on hover.
- **Enamel Plate Elevation** (`box-shadow: 0 22px 44px -26px rgba(0, 0, 0, 0.75)`): Used on skill plates, education stops, and about statements.
- **Scoreboard & Browser Depth** (`box-shadow: 0 28px 56px -32px rgba(0, 0, 0, 0.8)`): Used on the live contest standings table, contest history panel, and project detail browser frame.

### Named Rules
**The Neutral Shadow Rule.** All `box-shadow` declarations use pure black (`rgba(0, 0, 0, ...)`) with a positive vertical offset (`10px–30px`); zero-offset colored halos are never used.

## Shapes

- **Arch Portrait Plate (`border-radius: 999px 999px 20px 20px`):** Echoes the arched hood of a traditional rickshaw, framed by a 6px solid marigold border, an inner 4px ink inset ring, and two rotated enamel backing plates (`-5deg` vermilion, `4.5deg` teal).
- **Enamel Plates (`border-radius: 22px`):** Project cards, skill category plates, and timeline stops use `22px` corners with a uniform `2px solid rgba(247, 237, 219, 0.22)` border that shifts to the section's enamel tone (`--tone`) on hover.
- **Buttons & Controls (`border-radius: 14px`):** Action buttons and social icon tiles use `14px` corners with a `2px` border weight.
- **Geometric Garland & Spoked Wheel:** Section headers and the contact board are punctuated by a repeating SVG pattern of marigold diamonds, teal beads, and vermilion petals (`22px` tall) alongside a 20-spoke SVG wheel motif.

## Components

### Buttons
- **Shape:** Rounded rectangle (`14px` radius, `min-height: 48px`, `padding: 12px 22px`).
- **Primary (`.btn-sun`):** Solid Rickshaw Marigold (`#ffb92e`) background, Midnight Ink (`#0e0b15`) bold text, neutral elevation shadow. Hover shifts to `#ffc94f` and translates `-3px` on Y.
- **Outline (`.btn-line`):** Transparent background, `2px solid rgba(247, 237, 219, 0.22)` border, Warm Cream text. Hover shifts border and text to Rickshaw Marigold (`#ffb92e`).
- **WhatsApp (`.btn-wa`):** Solid `#2fd66b` background with Midnight Ink (`#0e0b15`) text.

### Chips
- **Style:** Pill radius (`999px`), `1px solid rgba(247, 237, 219, 0.22)` border, subtle `rgba(247, 237, 219, 0.04)` fill, Parchment Cream (`#d6cbb7`) text at `0.82rem` (`600` weight).

### Cards / Containers
- **Corner Style:** `22px` border radius.
- **Background:** Raised Ink (`#151120`) on Midnight Ink sections, or Midnight Ink (`#0e0b15`) on Raised Ink sections.
- **Shadow Strategy:** Neutral black offset elevation (`0 22px 44px -26px rgba(0, 0, 0, 0.75)`).
- **Border:** Uniform 4-sided `2px solid rgba(247, 237, 219, 0.22)`, transitioning to `--tone` on hover.
- **Internal Padding:** `clamp(22px, 3vw, 30px)`.

### Navigation
- **Style:** Fixed top bar (`64px` inner height) with a 3px scroll-progress road and a rotating 22px rickshaw wheel at the top viewport edge, plus a 14px SVG enamel pendant fringe along the bottom edge.
- **States:** Links (`0.92rem`, `600` weight) animate a 2px marigold underline from left to right on hover and active section intersection.

### Live Standings & Professionally Graded Skill Ledger
- **Live Standings Table (`.st-table`):** 6-column semantic table (`role="table"`) displaying Platform, live count-up Rating with contest delta (`▲`/`▼`), Peak rating, Standing tier dot + next-tier distance, Contests count, and Solved count.
- **Skill Ledger (`.skill-ledger`):** Inside each `.plate-card`, skills render as flat horizontal rows (`padding: 14px 0`, `border-bottom: 1px solid rgba(247, 237, 219, 0.12)`) pairing the technology icon, name, and real project/contest evidence on the left with a monospace proficiency tier (`Core`, `Production`, `Working`) and a 5-segment enamel meter (`.grade-bars`) on the right.

## Do's and Don'ts

### Do:
- **Do** keep all page text at `opacity: 1` at rest and use physical transforms (`translateY`, `translateX`, `scale`) with exponential ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`) for scroll entrances.
- **Do** pair every listed engineering skill with its 5-segment proficiency bar (`Core` 5/5, `Production` 4/5, `Working` 3/5) and concrete project or contest evidence.
- **Do** use uniform 4-sided borders (`2px solid`) on cards and plates, and flat hairline dividers (`1px solid`) for rows inside a plate.

### Don't:
- **Don't** place small uppercase kickers, eyebrows, or pill chips above `h1`, `h2`, or `h3` headings.
- **Don't** apply single-side accent borders (`border-left: 4px`), colored blurred `box-shadow` glows, or radial-gradient background spotlights.
- **Don't** nest bordered cards inside bordered cards; use ledger rows with hairline dividers inside container plates.
- **Don't** repeat the handle `imranonweb` across headings and body sections; keep it in the About introduction, platform profile links, and the required GitHub footer credit.
