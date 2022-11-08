import React from "react";
import { createUseStyles } from "react-jss";
import VansBG from "../../assets/vans-bg.jpeg";
import { IAuthUser } from "../../models/Auth";
import theme from "../theme";
import Header from "./Header";

const useStyles = createUseStyles({
  container: {
    position: "relative",
    margin: theme.spacing.l,
    padding: [theme.spacing.l, theme.spacing.xl, theme.spacing.xl],
    backgroundColor: theme.colors.lightGray,
    height: `calc(100vh - ${theme.spacing.l * 2}px)`,
    overflowY: "scroll"
  },
  containerWithBg: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundImage: `url(${VansBG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    padding: [theme.spacing.m, theme.spacing.xl, theme.spacing.m],
    zIndex: 10,
    "&:before": {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      content: "''",
      width: "100%",
      height: "100%",
      backgroundColor: theme.colors.black,
      opacity: 0.85,
      zIndex: -1
    }
  },
  copyRight: {
    position: "fixed",
    bottom: `${theme.spacing.l * 2}px`,
    right: theme.spacing["3xl"]
  },
  copyRightWithBg: {
    composes: "$copyRight",
    color: theme.colors.white,
    bottom: `${theme.spacing.l}px`,
    right: theme.spacing.xxl
  }
});

interface ILayoutWrapperProps {
  children: React.ReactNode;
  hasBackground: boolean;
  currentUser: IAuthUser | null;
}

const LayoutWrapper: React.FC<ILayoutWrapperProps> = ({ children, hasBackground, currentUser }) => {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();

  return (
    <div className={hasBackground ? classes.containerWithBg : classes.container}>
      <Header hasBackground={hasBackground} currentUser={currentUser} />
      {children}
      <span className={hasBackground ? classes.copyRightWithBg : classes.copyRight}>
        &#169; {currentYear}
      </span>
    </div>
  );
};

export default LayoutWrapper;
