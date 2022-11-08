import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";
import { NavLink, useLocation } from "react-router-dom";
import LoginIcon from "@mui/icons-material/LoginRounded";
import PersonIcon from "@mui/icons-material/PersonRounded";
import AdminIcon from "@mui/icons-material/AdminPanelSettings";
import theme from "../theme";
import { IAuthUser } from "../../models/Auth";
import NavigationPath from "../routes/navigation-path";
import { removeAuthToken } from "../../helpers/authHelpers";

const useStyles = createUseStyles({
  navList: {
    display: "flex",
    listStyle: "none"
  },
  navListItem: {
    position: "relative",
    marginLeft: theme.spacing.l,
    "&:not(:last-child)": {
      "&:before": {
        position: "absolute",
        content: "''",
        width: 1,
        height: "100%",
        right: -theme.spacing.s,
        top: theme.spacing.xxs,
        backgroundColor: theme.colors.mediumGray
      }
    }
  },
  navLink: {
    display: "flex",
    alignItems: "center",
    "& > span": {
      fontSize: theme.font.size.s,
      color: theme.colors.white,
      marginRight: theme.spacing.s
    }
  },
  navLinkDark: {
    composes: "$navLink",
    "& > span": {
      color: theme.colors.black
    }
  },
  authUserLink: {
    display: "flex",
    alignItems: "center",
    "& > span": {
      marginLeft: theme.spacing.s
    }
  },
  loginIcon: {
    fill: theme.colors.white
  },
  personIcon: {
    fill: theme.colors.white
  }
});

interface INavigationLinksProps {
  hasBackground: boolean;
  currentUser: IAuthUser | null;
}

const NavigationLinks: React.FC<INavigationLinksProps> = ({ hasBackground, currentUser }) => {
  const classes = useStyles();
  const location = useLocation();

  const handleLogout = () => {
    window.location.reload();
    removeAuthToken();
  };

  return (
    <ul className={classes.navList}>
      {currentUser && (
        <>
          {location.pathname.includes(NavigationPath.Dashboard) && (
            <li className={classes.navListItem}>
              <NavLink
                to={NavigationPath.Admin}
                className={classnames(classes.authUserLink, classes.navLinkDark)}
              >
                <AdminIcon />
                <span>Admin</span>
              </NavLink>
            </li>
          )}
          <li className={classes.navListItem}>
            <NavLink
              to={NavigationPath.Dashboard}
              className={classnames(
                classes.authUserLink,
                hasBackground ? classes.navLink : classes.navLinkDark
              )}
            >
              <PersonIcon className={hasBackground ? classes.personIcon : ""} />
              <span>{`${currentUser.firstName} ${currentUser.lastName}`}</span>
            </NavLink>
          </li>
        </>
      )}
      {currentUser ? (
        <li className={classes.navListItem}>
          <a
            href={NavigationPath.Home}
            onClick={handleLogout}
            className={hasBackground ? classes.navLink : classes.navLinkDark}
          >
            <span>Logout</span>
            <LoginIcon className={hasBackground ? classes.loginIcon : ""} />
          </a>
        </li>
      ) : (
        <li className={classes.navListItem}>
          <NavLink
            to={NavigationPath.Login}
            className={hasBackground ? classes.navLink : classes.navLinkDark}
          >
            <span>Login</span>
            <LoginIcon className={hasBackground ? classes.loginIcon : ""} />
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavigationLinks;
