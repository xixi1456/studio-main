create extension if not exists pgcrypto;

create table if not exists public.questions (
  id uuid primary key default gen_random_uuid(),
  text text not null check (char_length(trim(text)) between 1 and 100),
  created_at timestamptz not null default now()
);

alter table public.questions enable row level security;

drop policy if exists "Questions are publicly readable" on public.questions;
create policy "Questions are publicly readable"
  on public.questions for select
  to anon, authenticated
  using (true);

do $$
begin
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'questions'
  ) then
    alter publication supabase_realtime add table public.questions;
  end if;
end;
$$;

create or replace function public.draw_and_delete_question()
returns setof public.questions
language plpgsql
security definer
set search_path = public
as $$
declare
  picked public.questions;
begin
  perform pg_advisory_xact_lock(hashtext('question-wall-draw-pool'));

  select * into picked
  from public.questions
  order by random()
  limit 1;

  if not found then
    return;
  end if;

  delete from public.questions where id = picked.id;
  return next picked;
end;
$$;

revoke all on function public.draw_and_delete_question() from public, anon, authenticated;
grant execute on function public.draw_and_delete_question() to service_role;
grant select on public.questions to anon, authenticated;
