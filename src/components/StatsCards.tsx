import { ListIcon, PendingIcon, DoneIcon } from './Icons';
import { StatsCard } from './StatsCard';

interface StatsCardsProps {
  total: number;
  pending: number;
  donePercent: number;
}

export function StatsCards({ total, pending, donePercent }: StatsCardsProps) {
  return (
    <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-3">
      <StatsCard
        icon={<ListIcon className="h-4 w-4 sm:h-5 sm:w-5" />}
        value={total}
        label="Total"
      />
      <StatsCard
        icon={<PendingIcon className="h-4 w-4 sm:h-5 sm:w-5" />}
        value={pending}
        label="Pending"
        iconBgClass="bg-amber-100 text-amber-600"
      />
      <StatsCard
        icon={<DoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />}
        value={`${donePercent}%`}
        label="Done"
        iconBgClass="bg-emerald-100 text-emerald-600"
      />
    </div>
  );
}
