import type { Priority, SortOption } from '../types';
import { PRIORITIES, SORT_OPTIONS } from '../constants';
import { ChevronDownIcon } from './Icons';

interface FilterBarProps {
  priorityFilter: string;
  onPriorityFilterChange: (priority: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  priorityCounts: Record<string, number>;
}

export function FilterBar({
  priorityFilter,
  onPriorityFilterChange,
  sortBy,
  onSortChange,
  priorityCounts,
}: FilterBarProps) {
  const filterOptions = ['All', ...PRIORITIES] as const;

  return (
    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        {filterOptions.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => onPriorityFilterChange(p)}
            className={`min-h-[44px] rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 [touch-action:manipulation] ${
              priorityFilter === p
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 active:bg-slate-300'
            }`}
          >
            {p} {priorityCounts[p] ?? 0}
          </button>
        ))}
      </div>
      <div className="relative w-full min-w-0 sm:w-auto sm:min-w-[11rem]">
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="w-full min-h-[44px] appearance-none rounded-lg border border-slate-300 bg-white py-2 pl-4 pr-9 text-base text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 [touch-action:manipulation]"
          aria-label="Sort tasks"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-2.5 top-1/2 flex -translate-y-1/2 items-center justify-center text-slate-400">
          <ChevronDownIcon className="h-4 w-4 shrink-0" />
        </span>
      </div>
    </div>
  );
}
