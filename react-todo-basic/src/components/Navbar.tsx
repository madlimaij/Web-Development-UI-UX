import React from "react";
import { createUseStyles } from "react-jss";
import { Link, useLocation } from "react-router-dom";
import NavigationPath from "../models/NavigationPath";

const useStyles = createUseStyles({
  container: {
    backgroundColor: "#FFFFFF",
    height: 50,
    position: "sticky",
    top: 0,
  },
  title: {
    display: "flex",
    alignItems: "center",
    color: "black",
    whiteSpace: "nowrap",
    textAlign: "center",
    fontWeight: 700,
  },
  ul: {
    listStyle: "none",
    display: "flex",
    textDecoration: "none",
    "& li": {
      borderLeft: "1px solid black",
      paddingLeft: 5,
    },
    "& li:first-child": {
      borderLeft: "none",
      paddingRight: 5,
    },
  },
  navContent: {
    padding: [0, 20],
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
});

const Navbar: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div className={classes.container}>
      <div className={classes.navContent}>
        <div className={classes.title}>
          <span>Todo App</span>
        </div>

        <div>
          <ul className={classes.ul}>
            {NavigationPath.map((el, index) => (
              <li key={index}>
                <Link
                  to={el.path}
                  style={{
                    textDecoration:
                      location.pathname === el.path ? "underline" : "none",
                    color: "black",
                  }}
                >
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
