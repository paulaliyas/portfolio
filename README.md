# Paul Alias — Portfolio

A personal portfolio built as a working demonstration of modern Angular: **Angular 17, standalone
components, signals, OnPush everywhere, deferred loading and a CSS-first design system** — no UI
library, no template.

## Signature feature: Inspect Mode

Press <kbd>i</kbd> anywhere (or click the `{ }` button in the header). The site outlines its own
component boundaries with their selector names, and a DevTools-style panel shows the live signals
driving the page (`theme()`, `activeSection()`, `projectFilter()`, `visibleProjects()`). Interact
with the page and watch them change. The overlay is pure CSS driven by `data-inspect` attributes —
zero runtime cost when off.

## Running locally

```bash
npm install
npm start        # ng serve → http://localhost:4200
npm run build    # production build → dist/paul-alias-portfolio
```

Requires Node 18.13+ (or 20.9+).

## Architecture decisions

| Decision | Why |
| --- | --- |
| **Standalone components only** | No NgModules anywhere. Each component declares exactly what it imports — dependency graphs stay honest and tree-shaking stays effective. |
| **Signals for all local state** | Theme, active section, project filter, submit status and the hero experience counter are signals; the filtered project list is a `computed()`. No state library needed at this scale. |
| **`OnPush` on every component** | With signals as the change-notification mechanism, OnPush is essentially free and keeps change detection surgical. |
| **Route-level lazy loading** | Both routes use `loadComponent`. The colophon page exists partly to make routing (and `withViewTransitions()`) earn its keep. |
| **`@defer (on idle)` for below-fold sections** | Sections hydrate moments after first paint instead of blocking it. `on idle` was chosen over `on viewport` deliberately: the anchor targets (`#projects`, `#contact`…) must exist in the DOM for header navigation and deep links to work reliably. |
| **CSS-first motion** | Reveals, tilt, meters, theme cross-fade and the inspect overlay are CSS transitions/animations toggled by classes and custom properties. JS only flips signals. Everything respects `prefers-reduced-motion`. |
| **Typed content data** | All copy lives in `src/app/data/*.ts`, shaped by interfaces in `src/app/models/`. Editing the portfolio is type-checked. |
| **RxJS where it fits** | The contact form's simulated submit uses `timer` + `takeUntilDestroyed` — no manual subscriptions, no nested subscribes. |

## Project structure

```
src/app
├── core/          # services (theme, inspect, scroll-spy, projects state), layout, title strategy
├── shared/        # reusable components (section-header, chip, skill-meter, theme-toggle,
│                  # signal-monitor) and directives (reveal, tilt, inspect-target, section)
├── features/
│   ├── home/      # hero, about, skills, experience, projects, certifications, contact
│   └── colophon/  # "how this site is built"
├── data/          # ← edit your content here (typed constants)
└── models/        # interfaces for all content data
```

## Editing content

Everything user-visible is data:

- `data/profile.data.ts` — name, role, bio, **email and social URLs (currently placeholders — update them)**, career start date (drives the live experience counter)
- `data/skills.data.ts`, `data/projects.data.ts`, `data/experience.data.ts`, `data/certifications.data.ts`

Also replace:

- `src/assets/Paul_Alias_Resume.pdf` — a blank placeholder; drop in the real resume
- The about-section photo placeholder — add an image to `src/assets` and swap the frame markup in `about.component.html`

## Deployment

### Vercel
`vercel.json` is included. Import the repo, accept defaults — the build outputs to
`dist/paul-alias-portfolio/browser` and SPA rewrites are configured.

### GitHub Pages
```bash
ng build --base-href "/<repo-name>/"
npx angular-cli-ghpages --dir=dist/paul-alias-portfolio/browser
```
For client-side routing on Pages, copy `index.html` to `404.html` in the output, or keep the site
single-route (the colophon link degrades gracefully).

## Accessibility

Semantic landmarks, skip link, visible focus rings, `aria-current` nav state, labelled form fields
with `role="alert"` errors, `role="meter"` skill bars, keyboard-reachable everything, and a global
reduced-motion kill switch. Target: Lighthouse accessibility ≥ 95.
