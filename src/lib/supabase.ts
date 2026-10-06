/**
 * Optional Supabase browser client.
 *
 * The site runs fully on Prisma (see src/lib/db.ts). This helper is provided
 * for when the project is connected to Supabase and you want to use Supabase
 * Auth, Storage or Realtime from client components.
 *
 * Usage:
 *   1. bun add @supabase/supabase-js
 *   2. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env
 *   3. import { getSupabaseClient } from "@/lib/supabase";
 *
 * Until those variables exist, getSupabaseClient() safely returns null —
 * nothing in the app depends on it.
 */
export function getSupabaseClient(): import("@supabase/supabase-js").SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;

  // Required dynamic import keeps @supabase/supabase-js optional.
  // When you install the package, replace this stub with:
  //
  //   import { createClient, type SupabaseClient } from "@supabase/supabase-js";
  //   return createClient(url, anonKey);

  throw new Error(
    "Supabase env vars are set but @supabase/supabase-js is not installed. Run: bun add @supabase/supabase-js"
  );
}
