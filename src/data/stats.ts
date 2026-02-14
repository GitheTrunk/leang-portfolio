import { listProjects } from './project'
export const stats = [
  {
    label: 'Experience',
    value: 0,
    icon: 'pi pi-briefcase',
    accent: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300',
  },
  {
    label: 'Certificates',
    value: 0,
    icon: 'pi pi-graduation-cap',
    accent: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300',
  },
  {
    label: 'Projects',
    value: listProjects.length,
    icon: 'pi pi-folder',
    accent: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300',
  },
  {
    label: 'Current learning',
    value: 4,
    icon: 'pi pi-book',
    accent: 'bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300',
  },
]
