-- 创建 todos 表
create table if not exists public.todos (
  id serial primary key,
  title text not null,
  description text,
  is_completed boolean not null default false,
  created_at timestamp with time zone default timezone('utc'::text, now())
);
