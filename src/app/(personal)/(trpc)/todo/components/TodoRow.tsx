import { CalendarDays, Check, Trash2 } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import type { Todo } from "@/lib/types/Todo";
import { cn } from "@/lib/utils";

type TodoRowProps = {
  todo: Todo;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
  completed?: boolean;
  showDueDate?: boolean;
};

export function TodoRow({
  todo,
  onComplete,
  onDelete,
  completed = false,
  showDueDate = true,
}: TodoRowProps) {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <button
          type="button"
          onClick={() => !completed && onComplete(todo.id)}
          aria-disabled={completed}
          className={cn(
            "group block w-full rounded-md border border-[--color-card-border] bg-[--color-task-card] px-3 py-3 text-left text-[--color-foreground] shadow-sm",
            !completed && "cursor-pointer transition-colors hover:border-[--color-ring] hover:bg-[--color-accent] hover:text-[--color-foreground] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring]",
            completed && "cursor-default text-[--color-muted-foreground]"
          )}
        >
          <span className="flex items-center gap-3">
            <span
              className={cn(
                "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
                completed
                  ? "border-[--color-muted-foreground] bg-[--color-muted]"
                  : "border-[--color-card-border] transition-colors group-hover:border-[--color-ring]"
              )}
            >
              {completed && <Check className="h-3 w-3" />}
            </span>
            <span className="flex min-w-0 flex-1 items-center gap-3">
              <span
                className={cn(
                  "min-w-0 shrink-0 truncate text-sm font-medium leading-5",
                  todo.description && "max-w-[45%]",
                  completed && "line-through"
                )}
              >
                {todo.title}
              </span>
              {todo.description && (
                <span
                  title={todo.description}
                  className="min-w-0 flex-1 truncate text-right text-sm leading-5 text-[--color-muted-foreground]"
                >
                  {todo.description}
                </span>
              )}
              {showDueDate && todo.due_date && (
                <span className="ml-auto flex shrink-0 items-center gap-1.5 text-xs text-[--color-muted-foreground]">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {todo.due_date.slice(0, 10)}
                </span>
              )}
            </span>
          </span>
        </button>
      </ContextMenuTrigger>

      <ContextMenuContent>
        {!completed && (
          <ContextMenuItem onSelect={() => onComplete(todo.id)}>
            <Check className="h-4 w-4" />
            标记为已完成
          </ContextMenuItem>
        )}
        {!completed && <ContextMenuSeparator />}
        <ContextMenuItem
          variant="destructive"
          onSelect={() => onDelete(todo.id)}
        >
          <Trash2 className="h-4 w-4" />
          删除
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
