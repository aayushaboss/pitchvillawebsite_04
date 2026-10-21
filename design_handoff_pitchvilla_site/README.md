# Handoff: Pitchvilla website (100X Forge + services + Aero Edutech)

## Overview
Marketing website for Pitchvilla. The home page sells **100X Forge**, a six-month founder program in Ahmedabad. Sub-pages cover About, Apply (program application / service enquiry), the Interview Guide, Consulting Group, nine service pages (Launch / Grow / Raise), **Aero Edutech** (university partnerships), Privacy Policy and Terms & Conditions.

## About the design files
The files in `pages/` are **design references built in HTML**. They are prototypes that show the intended look and behaviour; they are not production code to ship. Recreate them in the target codebase's environment (for example Next.js/React, Astro or similar) using its usual patterns. If there is no codebase yet, a static-first framework such as Next.js or Astro with plain CSS or Tailwind is a good fit.

Each `.dc.html` opens directly in a browser. `support.js` is the prototype runtime. Inside each file:
- the `<x-dc>` body holds markup with all styles inline;
- `<script data-dc-script>` holds a React-like logic class. Its `renderVals()` contains page data such as lists, FAQs and steps, plus the scroll and animation logic.

`{{ name }}` holes and `<sc-for>` / `<sc-if>` are template loops and conditionals: render them as `.map()` and conditionals.

## Fidelity
**High fidelity.** Colours, type, spacing, copy and motion are final. Recreate them pixel-for-pixel. `SITE_RULES.md` holds the binding style rules; read it first.

## Pages / routes
| Route | File | Notes |
|---|---|---|
| `/` | Pitchvilla Website v4.dc.html | Master reference for every other page |
| `/about` | About.dc.html | |
| `/apply` | Apply.dc.html | Two choices (Program / Enquiry), multi-step form, reads `?type=enquire&topic=…&session=…` |
| `/interview-guide` | Interview Prep.dc.html | |
| `/consulting` | Pitchvilla Consulting Group.dc.html | |
| `/universities` | Aero Edutech.dc.html | Reached via "Universities Collaboration" in the About menu and footer |
| `/services/*` | Idea Validation, Launch Your Startup, Pitch Deck Creation, Business Strategy, Financial Analysis, Digital Marketing, Hiring and Team Building, Investor Readiness, Pitch to Investors | Same template: hero with infographic, What we do, stat band, How it works, Who it's for, yellow CTA |
| `/privacy`, `/terms` | Privacy Policy, Terms and Conditions | Long-form pages with a sticky contents panel (scrollbar hidden) |

## Global layout
- **Container:** `max-width:1280px; margin:0 auto; padding-inline: clamp(24px,6vw,96px)` everywhere.
- **Section vertical padding:** 112px desktop, 56px at ≤900px.
- **Header** (sticky, height 64px, page background, 1px bottom border `rgba(28,20,16,.2)`): a three-column grid.
  - **Left:** Pitchvilla wordmark, 15px tall, followed by a "100X Forge" tag (12px/500, #6B5E54, with a 1px left divider).
  - **Centre:** Home · About us ▾ (About Pitchvilla, Universities Collaboration, Interview Guide, FAQ) · Services ▾ (Launch / Grow / Raise flyouts with sub-pages).
  - **Right:** yellow "Apply" button (8px radius, 10×18px padding, 14px/600).
  - **Nav links** get a hover underline: a yellow 3px bar that grows from 0 to 100% width over .7s with `cubic-bezier(.22,.61,.36,1)`.
  - **Dropdowns** fade and slide down 6px over .2–.25s. The panel is #FBF8F1 with a 1px border, 10px radius and shadow `0 12px 32px -16px rgba(28,20,16,.3)`.
  - **At ≤900px** the nav becomes a hamburger. It opens a right drawer `min(86vw,380px)` wide with a backdrop `rgba(28,20,16,.4)`, and service groups expand as accordions.
- **Heroes** fill the first screen: `min-height: calc(100svh - 64px)`, so the yellow stat band starts below the fold.
- **Footer** (5 columns, 2 columns on mobile):
  - **Column 1:** wordmark (16px tall) and address.
  - **Pitchvilla:** Home, About, Universities Collaboration, Consulting Group, Interview Guide, FAQ, Apply.
  - **Launch & Raise:** the five services.
  - **Grow:** the four services.
  - **Follow:** Instagram, LinkedIn, YouTube, opening in a new tab.
  - **Bottom bar:** © line on the left, Privacy policy and Terms & conditions on the right.

## Design tokens
**Colours (use only these):**
- `#FBF8F1`: page background
- `#F3EDE0`: alternate sections and strips
- `#E9E1CF`: image placeholders
- `#FFCC00`: accent, stat band, final CTA (hover `#F2BF00`)
- `#1C1410`: ink
- `#4A3F37` / `#6B5E54`: muted text
- Lines: `rgba(28,20,16,.2)` by default; `.14` and `.1` for subtle lines

**Type: Poppins 300/400/500/600/700**

| Element | Size / weight | Other |
|---|---|---|
| Eyebrow | 12px / 600 | letter-spacing .14em, uppercase, written as "NN / Label" |
| Home hero headline | `clamp(28px,3.4vw,48px)` / 700 | uppercase, line-height 1.06. Largest type on the site |
| h1 (sub-pages) | `clamp(30px,3vw,40px)` / 600 | letter-spacing -.025em, line-height 1.04 |
| h2 | `clamp(26px,2.6vw,36px)` / 600 | letter-spacing -.015em, line-height 1.08 |
| Big CTA h2 | `clamp(30px,3vw,40px)` / 600 | letter-spacing -.025em |
| Statement | `clamp(26px,2.9vw,40px)` / 500 | letter-spacing -.022em |
| Body | 15–16px | line-height 1.6; muted text in #4A3F37 |
| Row titles | 20px / 600 | numbers 14px / 600 |
| Stat numbers | `clamp(28px,3vw,44px)` / 600 | labels 14px / 500 |

**Radii:** buttons 8px · cards 10–12px · images 4px · pills 999px.

**Shadows:** dropdown `0 12px 32px -16px rgba(28,20,16,.3)` · form card `0 16px 40px -32px rgba(28,20,16,.35)`.

**CTAs:**
- Labels: "Apply" (100X Forge), "Enquire" (services) or "Discuss a University Partnership" (Aero only). No arrows inside buttons.
- Yellow button: 12×22px padding, 15px/600.
- Dark button on yellow: background #1C1410, text #FBF8F1, hover text #FFCC00, 18×28px padding.
- A text link next to a CTA is bottom-aligned with it, with a 1px ink underline and padding-bottom equal to the button's bottom padding.

## Interactions and motion
All motion respects `prefers-reduced-motion`. Scroll reveals use `getBoundingClientRect` on scroll plus a 400ms interval (not IntersectionObserver alone) and trigger at 90% of viewport height.

- **Hero lines `[data-line]`:** start at translateY(28px) and opacity 0, then animate to none over 1.8s `cubic-bezier(.22,.61,.36,1)`, staggered 0.2–0.25s per line.
- **h2 and `[data-soft]`:** fade up 20px; opacity over 1.6s, transform over 2s.
- **`[data-stagger]` children:** each child fades up 24px, delayed by 0.12s × index (capped at 6).
- **Stat band:** numbers count up from 0 over 2–2.4s with an easeOutQuart curve when the band enters the viewport.
- **"01 /" statement:** reveals word by word. Each word's opacity runs from .18 to 1, driven by scroll progress through the section.
- **Problem tiles (home):** reveal diagonally, 140ms per step of (row + column). Each tile shows its number and its 3px underline first, then the title (+180ms), then the description (+360ms).
- **Steps:** the five columns reveal in sequence, 0.22s apart. At ≤900px they become a vertical timeline with a left rule.
- **FAQ-style accordions:**
  - The open row's title gets a yellow 3px underline that grows over 1s.
  - The chevron rotates 180°.
  - The body expands using `grid-template-rows: 0fr → 1fr` over .9s.
  - Only one row is open at a time.
- **Home 6-month roadmap:** a sticky horizontal-scroll track driven by vertical scroll, with a smoothed progress bar. On mobile it falls back to a normal swipe carousel.

## Forms
- **Apply:** a multi-step application or enquiry form. Query params pre-fill the topic and workshop session.
- **Aero Edutech enquiry fields:**
  - University / Institution name (required)
  - Contact person (required)
  - Designation
  - Official email (required, must be a valid email)
  - Contact number (required, at least 8 digits)
  - Programme areas (multi-select chips)
  - Message
- **Aero submit behaviour:**
  - Validation errors show inline under each field.
  - On success the form is replaced by a thank-you message that uses the contact's first name and the institution.
  - "Send another enquiry" resets the form.
- **Backend still needed.** The prototype only writes enquiries to `localStorage`. Connect both forms to email, a CRM or a form service.

## Assets
- `assets/pitchvilla-wordmark.png`, `assets/pitchvilla-logo.png`: brand logos
- `assets/svc-*.png`: infographics for the service-page heroes
- `uploads/Monochrome Startup Pitch Session.png`, `uploads/Monochrome Podcast Studio in Action.png`: photos for the villa section on the home page
- `image-slot.js` areas are empty image placeholders; replace them with real images.

## Content still to confirm
Placeholder founder and startup names on the home page, team names, and the stat figures on the Aero Edutech page (6 / 3 / 5 / 1 are structural counts).

## Files
`pages/*.dc.html` (one per route), `pages/support.js` (prototype runtime, reference only), `pages/motion.js` (shared scroll and reveal logic used by the sub-pages), `pages/autoscroll.js`, `pages/image-slot.js`, `pages/assets/`, `pages/uploads/`, `SITE_RULES.md`.
