import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  separator: {
    borderBottom: "2px solid #FFFFFF",
  },
});

const Separator: React.FC = () => {
  const classes = useStyles();

  return <div className={classes.separator} />;
};

export default Separator;
