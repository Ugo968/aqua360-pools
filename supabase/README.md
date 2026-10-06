# Aqua360 Pools — Connect to Supabase (PostgreSQL)

The app runs on Prisma, which talks to **SQLite (local, zero setup)** and
**PostgreSQL (Supabase)** with the same code. Switching to Supabase is a
one-time, 10-minute process: create the project → paste one URL → push the
schema → seed the data.

> Do this **after** you have the app running locally (see the main README).
> Keep working locally on SQLite until you are ready to go live — you can
> switch back any time by reverting the two edits in Steps 3–4.

---

## Step 1 — Create a Supabase project

1. Sign up / log in at **https://supabase.com** (free tier is enough to start)
2. Click **New project**
3. Fill in:
   - **Name:** e.g. `aqua360-pools`
   - **Database Password:** create a strong password — **save it**, you'll paste it into your connection string
   - **Region:** choose the one closest to Nigeria, e.g. **London (eu-west-2)** or **Frankfurt (eu-central-1)**
4. Click **Create new project** and wait ~2 minutes for provisioning

## Step 2 — Copy your connection string

1. In your new project, click **Connect** in the top bar (or *Project Settings → Database*)
2. Choose the **Connection pooling** / **Transaction pooler** option (port **6543**)
3. Copy the string — it looks like:

```
postgresql://postgres.abcdefgh:[YOUR-PASSWORD]@aws-0-eu-west-2.pooler.supabase.com:6543/postgres
```

4. Replace `[YOUR-PASSWORD]` with the database password from Step 1

## Step 3 — Point the app at Supabase

Two small edits in your project:

**a)** In `.env`, set `DATABASE_URL` (add `?pgbouncer=true&connection_limit=1` for best behaviour on the pooler):

```bash
DATABASE_URL="postgresql://postgres.abcdefgh:YOUR-PASSWORD@aws-0-eu-west-2.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"
```

**b)** In `prisma/schema.prisma`, change the datasource provider:

```prisma
datasource db {
  provider = "postgresql"   // was "sqlite"
  url      = env("DATABASE_URL")
}
```

> `.env` is in `.gitignore` — your password will never be committed to GitHub.

## Step 4 — Create the tables & seed the data

In the VS Code terminal:

```bash
npm run db:push     # creates all 5 tables in Supabase (Service, Project, Testimonial, Stat, Inquiry)
npm run db:seed     # fills them with your services, projects, testimonials & stats
```

`npm run db:seed` runs `prisma/seed.mjs` — it wipes and recreates the four
**content** tables with the same data every run, and **never touches the
Inquiry table** (real customer enquiries stay safe).

> If `db push` fails on the pooled connection (rare), temporarily use the
> **direct** connection string for that one command:
> `postgresql://postgres:<password>@db.<ref>.supabase.co:5432/postgres`
> then switch `.env` back to the pooled URL for running the app.

## Step 5 — Verify

- Open **Supabase → Table Editor** in your browser: you should see `Service`, `Project`, `Testimonial`, `Stat`, `Inquiry` with rows filled in
- Run the site locally: `npm run dev` → http://localhost:3000 — the Projects and Services pages now load from Supabase
- Submit the contact form once and check the new row appears in Supabase → Table Editor → `Inquiry`

## Step 6 — Production (Vercel)

1. Push the repo to GitHub (main README, "Push to GitHub")
2. Import the repo at https://vercel.com
3. In **Project Settings → Environment Variables**, add:

```
DATABASE_URL = <the same pooled connection string as .env>
```

4. Deploy. The live site now reads and writes your Supabase database.

---

## Optional: Supabase client helper

Everything in this site runs on Prisma — you do **not** need `@supabase/supabase-js`.
If you later want Supabase Auth, Storage or Realtime:

```bash
npm install @supabase/supabase-js
```

Then set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in
`.env` and use `src/lib/supabase.ts` (already in this repo).

## Schema portability notes

- `Service.features` / `Project.specs` are stored as JSON strings because
  Prisma's SQLite connector has no native JSON type. On PostgreSQL you may
  switch them to `Json` columns and drop the `JSON.parse(...)` calls in
  `src/lib/data.ts`.
- All IDs are `cuid()` strings; primary keys, uniques and relations are
  PostgreSQL-compatible as-is.
