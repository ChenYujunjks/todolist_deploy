## ✅ Supabase CLI 可以完成的**核心功能列表**

### 🌐 1. 管理数据库结构（Schema）

- `supabase db push`: 把 SQL schema 推送到数据库（并生成迁移）
- `supabase db commit`: 从当前状态生成迁移文件
- `supabase db reset`: 清空数据库并重新执行迁移
- **🚫 网页版 table editor 无法管理迁移文件！**

---

### 📦 2. 管理数据库迁移文件（Migrations）

- CLI 会将每次结构变动生成 `.sql` 文件存入 `supabase/migrations/`
- 可版本控制（比如 Git），适合多人协作，类似 git commit 一样的数据库演进历史
- **✅ 网页版无法生成、回滚、管理迁移文件，只能直接改当前结构**

---

### 🧬 3. 生成类型定义（TypeScript）

- 命令：

```bash
supabase gen types typescript --project-id <project-id> --schema public > lib/supabase-types.ts
```

- 会根据当前数据库结构，生成完整的 TypeScript 类型定义

  > ✅ 用于前端表单验证、Supabase SDK 自动补全等

- **❌ 网页版无法自动生成前端类型！**

---

### 🧪 4. 本地开发环境（使用 Docker）

- `supabase start`：启动本地 Supabase（Postgres、Auth、Storage 等）
- 可以完全脱离网络、云端本地模拟开发和测试
- **❌ 网页版没有本地环境功能，只能直接连接云数据库**
  本地开发与模拟 Supabase 环境

Supabase CLI 可以让你在本地完全离线运行 Supabase 项目（Postgres、Auth、Storage 等全部服务），用于开发调试。

### 相关命令：

- 关闭服务：`npx supabase stop`
- 查看服务状态：`npx supabase status`

📝 特别适合团队协作 + Git + CI/CD 的工作流。

---

### 🔐 5. 项目绑定与配置

- `supabase link`：把 CLI 项目与某个云端 Supabase 项目绑定
- `config.toml`：记录项目信息（project ref、db 密码、端口等）
- 多项目管理支持（本地多环境）

---

## ✅ 6. 其他功能（隐藏但很强大）

| 功能                 | 命令                               | 说明                       |
| -------------------- | ---------------------------------- | -------------------------- |
| 上传 `.env` 文件管理 | `npx supabase secrets`             | 管理函数用到的环境变量     |
| 导入导出数据库       | `npx supabase db dump` / `restore` | 手动备份和迁移数据         |
| 连接数据库           | `npx supabase db remote`           | 打开 Postgres 远程连接地址 |
| 验证 RLS 规则        | （将来版本）                       | 本地验证权限规则是否生效   |
