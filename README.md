# Aqua360 Pools — Company Website

A responsive, multi-page marketing site for **Aqua360 Pools** (swimming pool construction, water fountains & water walls — Lagos, Nigeria).

Built with **Next.js (App Router) · React · TypeScript · Tailwind CSS · Prisma · PostgreSQL (Supabase-ready)**.

## Pages

| Route       | Description                                              |
| ----------- | -------------------------------------------------------- |
| `/`         | Home — hero, featured services, highlights, CTA          |
| `/services` | Pool design & build, water fountains, water walls        |
| `/projects` | Portfolio gallery (data from the database)               |
| `/about`    | Company story, values, why choose us                     |
| `/contact`  | Contact form (saves enquiries to the database), phone    |

## Run it locally (VS Code)

### 1. Prerequisites

- **Node.js 20 or newer** — https://nodejs.org (LTS is fine)
- **VS Code** — https://code.visualstudio.com
- Recommended VS Code extensions: **ESLint** (`dbaeumer.vscode-eslint`), **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`), **Prettier** (`esbenp.prettier-vscode`)

### 2. Open the project

```bash
# unzip the project, then:
cd aqua360-pools
code .
```

### 3. Install dependencies

Open the VS Code terminal (`` Ctrl+` ``) and run:

```bash
npm install
```

### 4. Set up the database

The project ships with a local SQLite file (`db/custom.db`) that is already
seeded with services and projects, so **no database setup is required to run it**.

If the `db/` folder is missing or you want to recreate it:

```bash
npx prisma generate   # generate the Prisma client
npx prisma db push    # create tables in db/custom.db
```

Create your `.env` from the template (a working `.env` is already included):

```bash
cp .env.example .env
```

### 5. Start the dev server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser. Hot reload is on — edit any
file in `src/` and the page updates instantly.

### 6. Production build (optional)

```bash
npm run build
npm start        # serves on http://localhost:3000
```

## Switch to Supabase (PostgreSQL)

Full step-by-step guide: [`supabase/README.md`](supabase/README.md). Short version:

1. Create a project at https://supabase.com
2. In `prisma/schema.prisma` change `provider = "sqlite"` → `provider = "postgresql"`
3. In `.env`, set `DATABASE_URL` to your Supabase **pooled connection string**
4. Push the schema and seed:
   ```bash
   npm run db:push
   ```

## Push to GitHub

### Option A — VS Code UI (easiest)

1. In VS Code open the **Source Control** panel (`` Ctrl+Shift+G ``)
2. Click **Initialize Repository** (if not already a repo)
3. Stage all files → write a commit message like `Initial commit` → **Commit**
4. Click **Publish Branch** → sign in to GitHub → choose a repo name → **Publish**

### Option B — Command line

1. Create an **empty** repository on https://github.com/new (no README/.gitignore — the project already has them)
2. Then:

```bash
git init
git add .
git commit -m "Initial commit — Aqua360 Pools website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

> **Note:** `.env` is listed in `.gitignore`, so your database credentials are
> never pushed. Keep it that way.

## Deploying

The easiest free-tier option is **Vercel** (made by the Next.js team):

1. Push the repo to GitHub (above)
2. Go to https://vercel.com → **Add New Project** → import the repo
3. Add your `DATABASE_URL` environment variable (Supabase connection string)
4. Deploy

## Project structure

```
src/
  app/            # App Router pages: /, /services, /projects, /about, /contact
    api/          # API routes (contact form submission)
  components/     # Shared UI (header, footer, cards, sections)
prisma/
  schema.prisma   # Service / Project / ContactEnquiry models
db/
  custom.db       # Local SQLite (seeded)
supabase/
  README.md       # Postgres migration guide
public/
  logo.png / logo.svg / favicon.*   # Brand assets
```
