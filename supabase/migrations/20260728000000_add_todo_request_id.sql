ALTER TABLE public.todos
ADD COLUMN request_id uuid;

CREATE UNIQUE INDEX todos_request_id_key
ON public.todos (request_id);
