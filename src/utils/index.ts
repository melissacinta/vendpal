import { VpIcons } from './VpIcons';

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const topBarLinks = [
  {
    label: 'Dashboard',
    icon: VpIcons['dashboard'](),
    path: '/',
  },
  {
    label: 'Approval Workflow',
    icon: VpIcons['workflow'](),
    path: '#',
  },
  {
    label: 'Budget room',
    icon: VpIcons['budget'](),
    path: '/budget-room',
  },
  {
    label: 'Analytics',
    icon: VpIcons['analysis'](),
    path: '#',
  },
];