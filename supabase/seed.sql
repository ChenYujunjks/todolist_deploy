-- 初始化 `todos` 表
CREATE TABLE IF NOT EXISTS public.todos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    is_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 插入初始数据
INSERT INTO public.todos (title, description)
VALUES ('eat', '吃饭');