import React from "react";
import { FieldValues } from "react-hook-form";
import { createUseStyles } from "react-jss";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthApi } from "../../api";
import NavigationPath from "../../common/routes/navigation-path";
import theme from "../../common/theme";
import { setAuthToken } from "../../helpers/authHelpers";
import LoginForm from "./components/LoginForm";

const useStyles = createUseStyles({
  container: {
    margin: "auto",
    backgroundColor: theme.colors.whiteOpacity,
    padding: theme.spacing.xl,
    width: theme.breakPoints.sm
  },
  submitButton: {
    marginTop: theme.spacing.s
  },
  registerContainer: {
    display: "flex",
    marginTop: theme.spacing.xl,
    "& > span": {
      marginRight: theme.spacing.xs
    }
  },
  registerLink: {
    fontWeight: "bold"
  }
});

const Login: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await AuthApi.login(data.email, data.password);
      if (response?.data && response?.status === 200) {
        setAuthToken(response.data.accessToken);
        navigate(NavigationPath.Dashboard);
      }
    } catch {
      throw new Error("Unable to login");
    }
  };

  return (
    <div className={classes.container}>
      <h3>Login</h3>
      <LoginForm onSubmit={onSubmit} />
      <div className={classes.registerContainer}>
        <span>Do not have an account?</span>
        <NavLink to="/register" className={classes.registerLink}>
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
