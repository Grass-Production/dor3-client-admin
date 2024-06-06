import { IconDashboard, IconChatTeardropText, IconCloudDinary, IconFeedback, IconUsersFour } from '@/assets/svg';

import { Accounts, ActivityLog, CloudDinary, Dashboard, Feedbacks, Members, Profile, SignIn } from '@/pages';

export const ROUTES = {
  Accounts: '/accounts',
  ActivityLog: '/activitylog',
  CloudDinary: '/clouddinary',
  Dashboard: '/',
  Feedbacks: '/feedbacks',
  Members: '/members',
  Profile: '/profile',
  SignIn: '/login',
};

const routerlist = [
  {
    title: 'Dashboard',
    icon: IconDashboard,
    href: ROUTES.Dashboard,
    component: Dashboard,
  },
  {
    title: 'Accounts',
    icon: IconUsersFour,
    href: ROUTES.Accounts,
    component: Accounts,
  },
  {
    title: 'ActivityLog',
    icon: IconChatTeardropText,
    href: ROUTES.ActivityLog,
    component: ActivityLog,
  },
  {
    title: 'CloudDinary',
    icon: IconCloudDinary,
    href: ROUTES.CloudDinary,
    component: CloudDinary,
  },
  {
    title: 'Feedbacks',
    icon: IconFeedback,
    href: ROUTES.Feedbacks,
    component: Feedbacks,
  },
];

export const defaultTitle = 'Dashboard';

export const routeTitleMapper = {
  [ROUTES.Dashboard]: 'Dashboard',
  [ROUTES.Accounts]: 'Accounts',
  [ROUTES.ActivityLog]: 'ActivityLog',
  [ROUTES.CloudDinary]: 'CloudDinary',
  [ROUTES.Feedbacks]: 'Feedbacks',
  [ROUTES.SignIn]: 'Login',
};

export const getRouteTitle = (route: string): string => {
  return routeTitleMapper[route] ?? defaultTitle;
};

export default routerlist;
