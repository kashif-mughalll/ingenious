import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./form.style";
import ButtonGoogleLogin from "../ButtonGoogleLogin/ButtonGoogleLogin";

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

const LoginForm = ({ classes, toggleForm }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });
  return (
    <div className={classes.form}>
      <h1 className={classes.heading + " " + classes.marginBottom1}>Login</h1>
      <form onSubmit={formik.handleSubmit} className="size">
        <TextField
          variant="outlined"
          className={classes.marginBottom1}
          InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
          size="normal"
          fullWidth
          autoFocus
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
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
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <ButtonGoogleLogin />
        <div className={classes.btnContainer}>
          <Button
            className={classes.btn}
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
            onClick={toggleForm}
          >
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};
export default withStyles(useStyles)(LoginForm);
