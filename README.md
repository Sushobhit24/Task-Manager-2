# Task Manager

A simple, responsive single-page Task Manager web app built with React, TypeScript, and Tailwind CSS. Add tasks, filter by priority, search, and persist everything in your browser.

## Features

- **Add Task** – Task title, priority (Low / Medium / High), and optional due date
- **Display Tasks** – List view with title, priority badge, completion status, and due date
- **Complete & Delete** – Checkbox to mark complete, Delete button per task
- **Priority Filter** – Filter by All, Low, Medium, or High
- **Search** – Filter tasks by title
- **Due Date** – Optional due date; tasks sorted by due date
- **Local Storage** – Tasks are saved automatically and restored on refresh

## Tech Stack

- **React** (functional components, `useState`, `useEffect`)
- **TypeScript** – Type safety
- **Vite** – build tool and dev server
- **Tailwind CSS** – styling
- **Vitest** – unit testing
- **React Testing Library** – component tests

## Project Structure

```
src/
  components/
    TaskForm.tsx     # Add task form (title, priority, due date)
    TaskList.tsx     # Renders list of TaskItem
    TaskItem.tsx     # Single task row (checkbox, title, priority, delete)
    StatsCard.tsx    # Reusable stat display
    StatsCards.tsx   # Total, Pending, Done stats
    SearchBar.tsx    # Search input
    FilterBar.tsx    # Priority filter + sort dropdown
    AppHeader.tsx    # Logo, title, stats
    AppFooter.tsx    # Footer
    Icons.tsx        # SVG icons
  utils/
    storage.ts       # loadTasks, saveTasks, nextId
    sortTasks.ts     # Task sorting logic
  test/
    setup.ts         # Test setup (jest-dom, localStorage mock)
  types.ts           # Task, Priority, AddTaskInput, SortOption
  constants.ts       # STORAGE_KEY, PRIORITIES, SORT_OPTIONS
  App.tsx            # Main app state, filters, composition
  main.tsx
  index.css
```

## Run Locally

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview   # optional: preview production build locally
```

## Testing

```bash
npm run test        # Watch mode
npm run test:run    # Single run
```

## Deployment

- **Vercel** and **GitHub**

## License

MIT
