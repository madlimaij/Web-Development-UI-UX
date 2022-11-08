import NavigationPath from "./navigation-path";
import { Home, Login, Register, Dashboard, Admin } from "../../views";

interface INavigationRoute {
  path: string;
  Component: React.FC;
  hasBackground: boolean;
}

const NavigationRoutes = (): INavigationRoute[] => [
  {
    path: NavigationPath.Home,
    Component: Home,
    hasBackground: true
  },
  {
    path: NavigationPath.Login,
    Component: Login,
    hasBackground: true
  },
  {
    path: NavigationPath.Register,
    Component: Register,
    hasBackground: true
  },
  {
    path: NavigationPath.Dashboard,
    Component: Dashboard,
    hasBackground: false
  },
  {
    path: NavigationPath.Admin,
    Component: Admin,
    hasBackground: false
  }
];

export default NavigationRoutes;
