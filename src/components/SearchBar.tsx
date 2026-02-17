import { SearchIcon } from './Icons';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative mb-4">
      <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 shrink-0 text-slate-400" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search tasks..."
        className="w-full min-w-0 rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 text-base text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 [touch-action:manipulation]"
        aria-label="Search tasks by title"
      />
    </div>
  );
}
