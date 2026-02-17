import { LogoIcon } from './Icons';
import { StatsCards } from './StatsCards';

interface AppHeaderProps {
  total: number;
  pending: number;
  donePercent: number;
}

export function AppHeader({ total, pending, donePercent }: AppHeaderProps) {
  return (
    <header className="mb-6 sm:mb-8">
      <div className="flex min-w-0 items-center gap-2 sm:gap-3">
        <LogoIcon className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
        <div className="min-w-0">
          <h1 className="truncate text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
            Task Manager
          </h1>
          <p className="text-xs text-slate-600 sm:text-sm">Stay organized, get things done.</p>
        </div>
      </div>
      <StatsCards total={total} pending={pending} donePercent={donePercent} />
    </header>
  );
}
