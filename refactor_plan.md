# Portfolio Planner — Pastel Edition

> Palette: `#F2EAE0` linen · `#B4D3D9` mist · `#BDA6CE` wisteria · `#9B8EC7` iris  
> Stack: Next.js 14 · Tailwind CSS · TypeScript · Vercel (free)

---

## 01 — Repo structure

```
yourname-portfolio/
│
├── app/
│   ├── _sections/
│   │   ├── Hero.tsx          # name, role, doodle SVG, CTA buttons
│   │   ├── About.tsx         # short bio, photo, social links
│   │   ├── Skills.tsx        # animated bars + radar chart
│   │   ├── Experience.tsx    # timeline of work, internships, volunteerships
│   │   ├── Projects.tsx      # GitHub API + curated filter
│   │   ├── Writing.tsx       # Medium RSS article cards
│   │   └── Contact.tsx       # email link, social icons
│   │
│   ├── api/
│   │   └── articles/
│   │       └── route.ts      # proxies Medium RSS, revalidates 3600s
│   │
│   ├── layout.tsx            # ThemeProvider, fonts, metadata, OG tags
│   ├── page.tsx              # assembles all _sections
│   └── globals.css           # CSS variables for both themes
│
├── components/
│   ├── Nav.tsx               # sticky nav + ThemeToggle
│   ├── ThemeToggle.tsx       # reads OS pref, persists to localStorage
│   ├── SkillBar.tsx          # animates on scroll via IntersectionObserver
│   ├── RadarChart.tsx        # Chart.js radar, rebuilds on theme change
│   ├── ProjectCard.tsx       # stars, language badge, description, link
│   ├── ArticleCard.tsx       # thumbnail, title, read time, link
│   └── Doodles.tsx           # SVG florals scattered as section decor
│
├── config/
│   ├── featured-repos.ts     # string[] — edit to curate projects
│   ├── skills.ts             # { name, pct, color }[]
│   └── site.ts               # name, role, bio, social links, Medium URL
│
├── public/
│   ├── og-image.png          # 1200×630 social preview
│   └── favicon.ico
│
├── .env.local                # GITHUB_TOKEN (optional, raises rate limit)
├── tailwind.config.ts
├── next.config.ts            # image domains for GitHub avatars
└── tsconfig.json
```

---

## 02 — Component map

| Component | File | What it does |
|---|---|---|
| Hero | `Hero.tsx` | Fraunces italic name in iris, soft role, bio, two CTAs, floral doodle SVG card |
| Skill bars | `SkillBar.tsx` | Pastel bars animate on scroll via IntersectionObserver. Data from `config/skills.ts` |
| Radar chart | `RadarChart.tsx` | Chart.js radar, 6 axes. Destroys + rebuilds on theme change with correct hex values |
| Theme toggle | `ThemeToggle.tsx` | Reads `prefers-color-scheme` on load, persists to localStorage. Sun ↔ moon icon |
| Experience | `ExperienceCard.tsx` | Vertical timeline cards — company logo, role, duration, location, description. Data from `config/experience.ts` |
| Projects | `ProjectCard.tsx` | GitHub REST API at build time, filtered by `config/featured-repos.ts`. Stars, language, desc |
| Writing feed | `ArticleCard.tsx` | API route fetches Medium RSS server-side, revalidates hourly. Thumbnail + title |
| Doodles | `Doodles.tsx` | Inline SVG florals using palette colors — iris flowers, mist sparkles, wisteria petals |
| Nav | `Nav.tsx` | Sticky top nav, smooth-scrolls to sections, hosts ThemeToggle, collapses on mobile |

---

## 03 — Pages & sections

| Route | Name | Type | Notes |
|---|---|---|---|
| `/` | Home | static · ISR | Single scroll: Hero → About → Skills → Experience → Projects → Writing → Contact |
| `/projects` | Projects | static · ISR | Full curated repo grid, revalidated daily |
| `/writing` | Writing | dynamic · revalidate | All Medium articles, auto-updates hourly |
| `/api/articles` | Articles API | API route | Parses Medium RSS, called by Writing section |
| `/og-image.png` | OG image | static asset | 1200×630, used for LinkedIn + Twitter previews |
| `/sitemap.xml` | Sitemap | auto-generated | Next.js 14 generates this automatically |

---

## 04 — Skills config

Edit `config/skills.ts` to control the bars and radar chart:

```ts
// config/skills.ts
export const skills = [
  { name: 'React / Next.js', pct: 92, color: '#9B8EC7' }, // iris
  { name: 'TypeScript',      pct: 88, color: '#9B8EC7' }, // iris
  { name: 'Tailwind CSS',    pct: 85, color: '#BDA6CE' }, // wisteria
  { name: 'Node.js',         pct: 80, color: '#B4D3D9' }, // mist
  { name: 'Python',          pct: 74, color: '#B4D3D9' }, // mist
  { name: 'PostgreSQL',      pct: 68, color: '#BDA6CE' }, // wisteria
  { name: 'Docker / CI',     pct: 62, color: '#9B8EC7' }, // iris
];
```

---

## 05 — Experience config

Edit `config/experience.ts` to control the timeline cards:

```ts
// config/experience.ts
export type ExperienceItem = {
  title: string;
  company: string;
  company_url: string;
  logo_path: string;
  duration: string;
  location: string;
  description: string;
  color: string; // accent dot / border color
};

export type ExperienceSection = {
  title: string;   // "Work" | "Internships" | "Volunteerships"
  items: ExperienceItem[];
};

export const experience: ExperienceSection[] = [
  {
    title: "Work",
    items: [
      {
        title: "Research Assistant",
        company: "National University of Singapore",
        company_url: "https://www.nus.edu.sg/",
        logo_path: "nus-logo.png",
        duration: "Mar 2025 – Nov 2025",
        location: "Singapore",
        description:
          "NUS Metaverse Foundry Lab — adaptive sampling for 3DGS artifacts, GPU-feature model for mobile rendering power.",
        color: "#9B8EC7",
      },
      // add more…
    ],
  },
];
```

In `Experience.tsx`, map sections to `<ExperienceCard />` inside a vertical timeline `<ol>`:

```tsx
// app/_sections/Experience.tsx
import { experience } from '@/config/experience';
import ExperienceCard from '@/components/ExperienceCard';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-display text-iris mb-12 text-center">Experience</h2>
      {experience.map((section) => (
        <div key={section.title} className="mb-10">
          <h3 className="text-xl font-mono text-wisteria uppercase tracking-widest mb-6">
            {section.title}
          </h3>
          <ol className="relative border-l border-wisteria/30 space-y-8">
            {section.items.map((item) => (
              <ExperienceCard key={item.company + item.duration} item={item} />
            ))}
          </ol>
        </div>
      ))}
    </section>
  );
}
```

---

## 06 — Curating GitHub projects

Edit `config/featured-repos.ts` — just an array of repo names:

```ts
// config/featured-repos.ts
export const featuredRepos = [
  'my-saas-project',
  'open-source-tool',
  'cool-experiment',
] as const;
```

In `Projects.tsx`, filter the API response:

```ts
const allRepos = await fetch(
  `https://api.github.com/users/YOUR_USERNAME/repos?per_page=100`,
  { next: { revalidate: 86400 } } // revalidate daily
).then(r => r.json());

const featured = allRepos.filter((r: Repo) =>
  featuredRepos.includes(r.name)
);
```

---

## 06 — Medium RSS feed

```ts
// app/api/articles/route.ts
import Parser from 'rss-parser';

export const revalidate = 3600; // revalidate every hour

export async function GET() {
  const parser = new Parser();
  const feed = await parser.parseURL(
    'https://medium.com/feed/@YOUR_MEDIUM_USERNAME'
  );
  return Response.json(feed.items.slice(0, 6));
}
```

---

## 07 — Theme toggle

```ts
// components/ThemeToggle.tsx
'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved === 'dark' || (saved === null && prefersDark);
    setDark(initial);
    document.documentElement.dataset.theme = initial ? 'dark' : 'light';
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  return (
    <button onClick={toggle} aria-label="Toggle theme">
      {dark ? '☾' : '☀'}
    </button>
  );
}
```

---

## 08 — CSS variables (globals.css)

```css
/* globals.css */

:root {
  /* your exact palette */
  --linen:    #F2EAE0;
  --mist:     #B4D3D9;
  --wisteria: #BDA6CE;
  --iris:     #9B8EC7;

  /* light theme */
  --bg:       #F2EAE0;
  --bg2:      #EAE0D4;
  --bg3:      #E0D4C4;
  --card:     #FAF6F2;
  --txt:      #2A1F18;
  --txt2:     #6B5A50;
  --txt3:     #A89488;
  --border:   rgba(42, 31, 24, 0.10);
  --accent:   #9B8EC7;  /* iris — CTAs, primary bars */
  --accent2:  #BDA6CE;  /* wisteria — secondary */
  --accent3:  #B4D3D9;  /* mist — backend bars */
}

[data-theme="dark"] {
  --bg:       #1C1720;
  --bg2:      #241E2A;
  --bg3:      #2C2534;
  --card:     #201B28;
  --txt:      #F0EAF8;
  --txt2:     #A090B8;
  --txt3:     #584E68;
  --border:   rgba(240, 234, 248, 0.09);
  --accent:   #BDA6CE;  /* wisteria becomes primary in dark */
  --accent2:  #9B8EC7;
  --accent3:  #B4D3D9;
}
```

---

## 09 — Live integrations

| Integration | Method | Cost |
|---|---|---|
| GitHub projects | REST API, build-time fetch | Free — 60 req/hr, 5000/hr with free token |
| Medium articles | Public RSS feed via `rss-parser` | Free — no API key needed |
| LinkedIn | Manual sync via `config/site.ts` | Free — no API needed |

---

## 10 — Free hosting options

| Platform | Best for | Notes |
|---|---|---|
| **Vercel** ⭐ | Next.js | Zero-config, push-to-deploy, API routes work out of the box. **Recommended.** |
| Cloudflare Pages | Fast CDN | Uses `@cloudflare/next-on-pages` adapter. API routes become Workers. |
| Netlify | Simple CI/CD | Uses Netlify Next Runtime. API routes become Netlify Functions. |

### What's free vs paid

| Thing | Free? | Notes |
|---|---|---|
| Vercel hosting | ✅ Free | Hobby plan — unlimited deploys, 100 GB bandwidth/mo |
| Custom domain | ~$10/yr | Buy on Namecheap/Cloudflare, connect to Vercel free |
| GitHub API | ✅ Free | Optional token raises limit from 60 → 5000 req/hr |
| Medium RSS | ✅ Free | Public feed, no auth |
| Google Fonts | ✅ Free | Self-hosted at build via `next/font` — zero layout shift |
| Chart.js | ✅ Free | MIT licence |
| SSL / HTTPS | ✅ Free | Auto-provisioned by Vercel/Netlify/Cloudflare |

---

## 11 — Full tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 14 | App Router, ISR, API routes, server components, auto sitemap |
| Styling | Tailwind CSS | Utility-first, pairs cleanly with CSS custom properties |
| Language | TypeScript | Type-safe config files, props, API responses |
| Charts | Chart.js | Radar chart, lightweight, no SSR issues |
| Fonts | `next/font/google` | Self-hosted at build — no layout shift, no external requests |
| Icons | Lucide React | Tree-shakeable SVG icons |
| Animation | CSS + IntersectionObserver | Zero runtime cost — bars animate on scroll natively |
| Projects data | GitHub REST API | Server Component fetch, cached, filtered by config |
| Articles data | Medium RSS + `rss-parser` | API route, revalidates hourly automatically |
| Deployment | Vercel | Free hobby plan, push-to-deploy |
| Domain | Namecheap / Cloudflare | ~$10–12/yr, connect to Vercel via DNS |
| Theming | CSS custom properties | `data-theme` on `<html>`, instant transitions, no runtime |

---

## 12 — Design system

### Palette

| Name | Hex | Usage |
|---|---|---|
| Linen | `#F2EAE0` | Page background, cards, warm base |
| Mist | `#B4D3D9` | Backend skill bars, mist sparkles, route labels |
| Wisteria | `#BDA6CE` | Secondary bars, hover borders, folder names |
| Iris | `#9B8EC7` | Hero name, CTA button, primary bars, radar chart |

### Typography

| Font | Weight | Usage |
|---|---|---|
| Space Grotesk | 400, 500, 600, 700 | Hero name, section headings — modern geometric tech feel |
| DM Sans | 300, 400, 500 | Body copy, nav links, descriptions, buttons |
| JetBrains Mono | 400, 500 | Duration labels, skill tags, eyebrows, code snippets |

---

## 13 — Quick-start

```bash
# scaffold
npx create-next-app@latest yourname-portfolio --typescript --tailwind --app
cd yourname-portfolio

# install dependencies
npm install chart.js rss-parser lucide-react

# run locally
npm run dev
# → http://localhost:3000

# deploy (free)
# 1. push repo to GitHub
# 2. go to vercel.com → New Project → import your repo
# 3. click Deploy — done, live forever on Vercel's free tier

# custom domain (optional, ~$10/yr)
# 1. buy yourname.dev on Namecheap or Cloudflare
# 2. Vercel dashboard → Settings → Domains → add domain
# 3. copy the CNAME record into your registrar's DNS panel
```

---

*Palette from colorhunt.co/palette/f2eae0b4d3d9bda6ce9b8ec7*