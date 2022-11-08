import React from "react";
import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoWhite } from "../../assets/svg/logoWhite.svg";
import { ReactComponent as LogoDark } from "../../assets/svg/logoDark.svg";
import theme from "../theme";
import NavigationLinks from "./NavigationLinks";
import { IAuthUser } from "../../models/Auth";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: [theme.spacing.m, 0]
  }
});

interface IHeaderProps {
  hasBackground: boolean;
  currentUser: IAuthUser | null;
}

const Header: React.FC<IHeaderProps> = ({ hasBackground, currentUser }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <NavLink to="/">{hasBackground ? <LogoWhite /> : <LogoDark />}</NavLink>
      <NavigationLinks currentUser={currentUser} hasBackground={hasBackground} />
    </div>
  );
};

export default Header;
