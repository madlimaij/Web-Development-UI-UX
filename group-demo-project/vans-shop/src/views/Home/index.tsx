import React from "react";
import { createUseStyles } from "react-jss";
import Hero from "./components/Hero";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Hero />
    </div>
  );
};

export default Home;
