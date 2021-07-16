import React,{useRef} from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./form.style";
import ButtonGoogleLogin from "../ButtonGoogleLogin/ButtonGoogleLogin";
import { Grid } from "@material-ui/core";

const validationSchema = yup.object({
  firstname: yup
    .string("Enter your first name")
    .min(4, "name should be greater then 4")
    .required("First name is required"),
  lastname: yup
    .string("Enter your last name")
    .min(4, "name should be greater then 4")
    .required("Last name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

const LoginForm = ({ classes, toggleHandler }) => {

  const Divref = useRef(null)

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
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
    <div ref={Divref} className={classes.form}>
      <h1 className={classes.heading + " " + classes.marginBottom12}>
        Sign Up
      </h1>
      <form onSubmit={formik.handleSubmit} className="size">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <TextField
                  variant="outlined"
                  className={classes.inputClass}
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                  }}
                  fullWidth
                  id="firstname"
                  name="firstname"
                  label="First name"
                  type="text"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstname && Boolean(formik.errors.firstname)
                  }
                  helperText={
                    formik.touched.firstname && formik.errors.firstname
                  }
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  variant="outlined"
                  className={classes.inputClass}
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                  }}
                  fullWidth
                  id="lastname"
                  name="lastname"
                  label="Last Name"
                  type="text"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastname && Boolean(formik.errors.lastname)
                  }
                  helperText={formik.touched.lastname && formik.errors.lastname}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              className={classes.marginBottom1}
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
        </Grid>
        <ButtonGoogleLogin />
        <div className={classes.btnContainer}>
          <Button
            className={classes.btn + " " + classes.marginright}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Create
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
            Already have one?
          </Button>
        </div>
      </form>
    </div>
  );
};
export default withStyles(useStyles)(LoginForm);
