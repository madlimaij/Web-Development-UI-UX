import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthApi } from "../../api";
import { getAuthToken, removeAuthToken } from "../../helpers/authHelpers";
import { IAuthUser } from "../../models/Auth";
import useEffectAsync from "../hooks/useEffectAsync";
import NavigationPath from "../routes/navigation-path";
import LayoutWrapper from "./LayoutWrapper";

interface IGuardedRouteProps {
  children: React.ReactNode;
  hasBackground: boolean;
}

const GuardedRoute: React.FC<IGuardedRouteProps> = ({ children, hasBackground }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState<IAuthUser | null>(null);
  const guardedRoutes = useMemo(() => [NavigationPath.Dashboard, NavigationPath.Admin], []);

  useEffectAsync(async () => {
    try {
      const response = await AuthApi.currentUser();
      if (response?.status === 200) {
        setCurrentUser(response.data);
      } else {
        removeAuthToken();
      }
    } catch (error) {
      throw new Error("Unable fetch current user");
    }
  }, [hasBackground]);

  useEffect(() => {
    if (!getAuthToken() && guardedRoutes.includes(location.pathname)) {
      navigate(NavigationPath.Home);
    }
  }, [currentUser, guardedRoutes, location.pathname, navigate]);

  return (
    <LayoutWrapper hasBackground={hasBackground} currentUser={currentUser}>
      {children}
    </LayoutWrapper>
  );
};

export default GuardedRoute;
