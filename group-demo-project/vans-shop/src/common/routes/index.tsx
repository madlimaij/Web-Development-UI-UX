import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useConstant from "use-constant";
import GuardedRoute from "../components/GuardedRoute";
import NavigationRoutes from "./navigation-routes";

const AppRoutes: React.FC = () => {
  const routeList = useConstant(NavigationRoutes);

  return (
    <BrowserRouter>
      <Routes>
        {routeList.map(({ path, Component, hasBackground }) => (
          <Route
            key={path}
            path={path}
            element={
              <GuardedRoute hasBackground={hasBackground}>
                <Component />
              </GuardedRoute>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
