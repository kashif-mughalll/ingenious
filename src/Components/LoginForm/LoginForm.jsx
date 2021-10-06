import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./form.style";
import ButtonGoogleLogin from "../ButtonGoogleLogin/ButtonGoogleLogin";
import { LoginWithEmailPass } from "./../../Redux/Auth/authActions";
import { connect } from "react-redux";
import { HideLoader, ShowLoader } from "./../../Redux/Loader/LoaderActions";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

const LoginForm = ({
  classes,
  toggleHandler,
  LoginWithEmailPass,
  ShowLoader,
  HideLoader,
}) => {
  const [Error, setError] = useState(false);
  const [Error2, setError2] = useState(false);
  const Divref = useRef(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async ({ email, password }) => {
      ShowLoader();
      await LoginWithEmailPass(email, password, setError, setError2);
      HideLoader();
    },
  });

  return (
    <div ref={Divref} className={classes.form}>
      <h1 className={classes.heading + " " + classes.marginBottom12}>Login</h1>
      <form onSubmit={formik.handleSubmit} className="size">
        <TextField
          variant="outlined"
          className={classes.marginBottom1}
          InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
          classes={{
            outlined: classes.label
          }}
          fullWidth
          autoFocus
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={(e) => {
            setError(false);
            formik.handleChange(e);
          }}
          error={
            (formik.touched.email && Boolean(formik.errors.email)) || Error
          }
          helperText={
            Error
              ? "Incorrect email address"
              : formik.touched.email && formik.errors.email
          }
        />
        <TextField
          variant="outlined"
          className={classes.inputClass}
          InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={(e) => {
            setError2(false);
            formik.handleChange(e);
          }}
          error={
            (formik.touched.password && Boolean(formik.errors.password)) ||
            Error2
          }
          helperText={
            Error2
              ? "Incorrect password try again"
              : formik.touched.password && formik.errors.password
          }
        />
        <ButtonGoogleLogin />
        <div className={classes.btnContainer}>
          <Button
            className={classes.btn + " " + classes.marginright}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Login
          </Button>
          <Button
            className={classes.btn}
            color="primary"
            variant="contained"
            fullWidth
            onClick={() => {
              Divref.current.classList.add("fade-out");
              Divref.current.classList.remove("fade-in");
              setTimeout(() => {
                toggleHandler();
              }, 600);
            }}
          >
            Create new account
          </Button>
        </div>
      </form>
    </div>
  );
};

var actions = {
  LoginWithEmailPass,
  ShowLoader,
  HideLoader,
};

export default connect(null, actions)(withStyles(useStyles)(LoginForm));
