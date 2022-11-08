import HomePage from "../pages/HomePage";
import SecondPage from "../pages/SecondPage";

type NavType = {
  name: string;
  path: string;
  component: React.FC;
};

const NavigationPath: NavType[] = [
  {
    name: "Home",
    path: "/",
    component: HomePage,
  },
  {
    name: "Second",
    path: "/second",
    component: SecondPage,
  },
];

export default NavigationPath;
