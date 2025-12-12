# 🌐 devvify.dev

Portfolio + resume hub for **Md. Serajul Islam (Devvify)**. The project already ships a fully structured frontend (Next.js + TypeScript + Framer Motion) along with a Node.js/Express API scaffold that will evolve into the blog/CMS backend.

## 🧱 Monorepo layout

```
devvify.dev/
├── apps/
│   ├── web/   # Next.js App Router frontend
│   └── api/   # Express REST API skeleton (future blog/contact backend)
├── apps/web/public/ # Shared static files (og image, resume, etc.)
├── package.json
└── README.md
```

Key directories inside the web app:

- `src/components/layout` – header/footer wrappers and section shell
- `src/components/sections` – hero, projects, experience, skills, writing, contact
- `src/data` – strongly typed content used to render the resume
- `src/lib/motion.ts` – shared Framer Motion variants for consistent easing

The API exposes `/projects`, `/posts`, `/contact`, and `/health` routes backed by in-memory data that will later be swapped with MySQL/MongoDB/Redis stores.

## 🚀 Tech stack

| Layer | Tools |
| --- | --- |
| Frontend | Next.js 16 (App Router), React 19, TypeScript, CSS Modules, Framer Motion |
| Backend | Node.js 20, Express 4, Helmet, CORS, Morgan |
| Data (planned) | MySQL + Prisma, MongoDB for content, Redis caching |
| DevOps | Nginx reverse proxy, Ubuntu self-host, GitHub Actions CI (planned) |

## 🧑‍💻 Local development

```bash
# Install all workspace dependencies
npm install

# Run the frontend (http://localhost:3000)
npm run dev:web

# Run the API (http://localhost:4000)
npm run dev:api
```

Environment variables:

- `apps/api/.env.example` documents `PORT`, `HOST`, and `CLIENT_URL`
- Frontend currently reads static data, so no `.env` is required yet

## ✨ Frontend features

- Rich single-page layout with hero, stats, about, projects, experience, skills, writing, and contact sections
- Design tokens + gradients defined in `globals.css`, Space Grotesk + Inter typography
- Shared UI primitives (buttons, section headings, tags, stat cards)
- Framer Motion interactions on hero, stats, and cards
- Accessibility baked-in (focus outlines, semantic navigation, reduced flicker)

## 🔌 Backend roadmap

1. Replace in-memory data with database adapters (Prisma for MySQL + Mongoose for MongoDB)
2. Add Redis caching + rate limiting for `/contact`
3. Introduce authentication & admin routes for blog/project CRUD
4. Wire the web app to fetch from `/api/*` endpoints via server actions

## 📦 Deployment notes

- Serve `apps/web` via Node/PM2 or Docker behind Nginx at `devvify.dev`
- Reverse proxy `/api` to the Express service running on port 4000
- Use Certbot for TLS and systemd/Compose to keep processes healthy
- Tailor GitHub Actions to lint/test both workspaces and rsync builds to the Ubuntu server

---

Questions or ideas? [Email](mailto:ekdomtaza@gmail.com) · [GitHub](https://github.com/Devvify)
