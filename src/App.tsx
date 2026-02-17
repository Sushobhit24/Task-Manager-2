import { useState, useEffect } from 'react';
import type { SortOption, AddTaskInput } from './types';
import { PRIORITIES } from './constants';
import { loadTasks, saveTasks, nextId } from './utils/storage';
import { sortTasks } from './utils/sortTasks';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { AppHeader } from './components/AppHeader';
import { AppFooter } from './components/AppFooter';
import { SearchBar } from './components/SearchBar';
import { FilterBar } from './components/FilterBar';

export default function App() {
  const [tasks, setTasks] = useState(loadTasks);
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('newest');

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  function handleAddTask({ title, priority, dueDate }: AddTaskInput) {
    setTasks((prev) => [
      ...prev,
      {
        id: nextId(prev),
        title,
        priority,
        completed: false,
        dueDate,
        createdAt: Date.now(),
      },
    ]);
  }

  function handleToggleComplete(id: number) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function handleDelete(id: number) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  const filteredByPriority =
    priorityFilter === 'All'
      ? tasks
      : tasks.filter((t) => t.priority === priorityFilter);

  const filteredBySearch = searchQuery.trim()
    ? filteredByPriority.filter((t) =>
        t.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
      )
    : filteredByPriority;

  const sortedTasks = sortTasks(filteredBySearch, sortBy);

  const total = tasks.length;
  const pending = tasks.filter((t) => !t.completed).length;
  const donePercent = total ? Math.round(((total - pending) / total) * 100) : 0;

  const priorityCounts: Record<string, number> = { All: tasks.length };
  PRIORITIES.forEach((p) => {
    priorityCounts[p] = tasks.filter((t) => t.priority === p).length;
  });

  return (
    <div className="min-h-screen bg-slate-100 px-3 py-6 text-slate-800 sm:px-6 sm:py-8 md:px-8 lg:px-8">
      <div className="mx-auto w-full min-w-0 max-w-2xl">
        <AppHeader total={total} pending={pending} donePercent={donePercent} />

        <div className="space-y-4 sm:space-y-6">
          <TaskForm onAddTask={handleAddTask} />

          <div className="min-w-0 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/60 sm:p-6">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <FilterBar
              priorityFilter={priorityFilter}
              onPriorityFilterChange={setPriorityFilter}
              sortBy={sortBy}
              onSortChange={setSortBy}
              priorityCounts={priorityCounts}
            />
            <TaskList
              tasks={sortedTasks}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDelete}
            />
          </div>
        </div>

        <AppFooter />
      </div>
    </div>
  );
}
