import React from "react";
import { FieldValues } from "react-hook-form";
import { createUseStyles } from "react-jss";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthApi } from "../../api";
import NavigationPath from "../../common/routes/navigation-path";
import theme from "../../common/theme";
import { setAuthToken } from "../../helpers/authHelpers";
import RegisterForm from "./components/RegisterForm";

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
  loginContainer: {
    display: "flex",
    marginTop: theme.spacing.xl,
    "& > span": {
      marginRight: theme.spacing.xs
    }
  },
  loginLink: {
    fontWeight: "bold"
  }
});

const Register: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await AuthApi.register(
        data.firstName,
        data.lastName,
        data.email,
        data.password
      );
      if (response?.data && response?.status === 200) {
        setAuthToken(response.data.accessToken);
        navigate(NavigationPath.Dashboard);
      }
    } catch {
      throw new Error("Unable to register");
    }
  };

  return (
    <div className={classes.container}>
      <h3>Register</h3>
      <RegisterForm onSubmit={onSubmit} />
      <div className={classes.loginContainer}>
        <span>Already have an account?</span>
        <NavLink to="/login" className={classes.loginLink}>
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
