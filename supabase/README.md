# Question wall setup

1. Create a Supabase project and run `supabase/questions.sql` in the SQL Editor.
2. Set the variables from `.env.example` in local `.env.local` and in the Vercel project settings.
3. Use `https://your-site.example/admin/questions` to sign in with `QUESTION_ADMIN_PASSWORD`.

`SUPABASE_SERVICE_ROLE_KEY`, `QUESTION_ADMIN_PASSWORD`, and
`QUESTION_SESSION_SECRET` are server-only secrets. Do not rename them with a
`NEXT_PUBLIC_` prefix or commit their real values. Use a different random value
for the session secret than the administrator password.

The anon key can read active questions because those questions are intentionally
shown on the public question wall. Inserts and random draw/delete operations go
through server routes using the service-role key.
