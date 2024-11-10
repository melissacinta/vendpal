import { SITE_ROUTES } from './routes';
import { VpIcons } from './VpIcons';

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const topBarLinks = [
  {
    label: 'Dashboard',
    icon: VpIcons['dashboard'](),
    path: SITE_ROUTES.HOME,
  },
  {
    label: 'Approval Workflow',
    icon: VpIcons['workflow'](),
    path: '#',
  },
  {
    label: 'Budget room',
    icon: VpIcons['budget'](),
    path: SITE_ROUTES.BUDGET_ROOM,
  },
  {
    label: 'Analytics',
    icon: VpIcons['analysis'](),
    path: '#',
  },
];
