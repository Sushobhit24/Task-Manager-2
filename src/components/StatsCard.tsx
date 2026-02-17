import type { ReactNode } from 'react';

interface StatsCardProps {
  icon: ReactNode;
  value: string | number;
  label: string;
  iconBgClass?: string;
}

export function StatsCard({ icon, value, label, iconBgClass = 'bg-slate-100 text-slate-600' }: StatsCardProps) {
  return (
    <div className="flex min-w-0 items-center gap-2 rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-200/60 sm:gap-3 sm:p-4">
      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10 ${iconBgClass}`}>
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xl font-bold text-slate-900 sm:text-2xl">{value}</p>
        <p className="text-xs font-medium text-slate-500">{label}</p>
      </div>
    </div>
  );
}
