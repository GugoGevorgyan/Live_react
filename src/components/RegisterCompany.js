import React from "react";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import back from "../images/general.png";
import { registerApi as api } from "../Path";
import Container from "@material-ui/core/Container";
import Select from "@material-ui/core/Select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import axiosConfig from "./axiosConfig";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function to_register(data) {
  axiosConfig
    .post(api, data)

    .then((res) => res)
    .then((res) => {
      console.log(res, "myRespons");
      localStorage.setItem("token", res.data.access_token);
    })
    .catch((error) => {
      // let err =  error.json(error.responseText);
      //  console.log(err,'fff');
      console.log(error.data.ValidationException, "err");
    });
}

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: "75px",
    marginLeft: "16%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "0",
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundImage: "linear-gradient(90deg, #4856D1 20.94%, #39B0D6 101.76%)",
    borderRadius: "30px",
    width: "100%",
  },
  container: {
    position: "relative",
    right: "30%",
    height: "100%",
  },
  input: {
    borderBottom: "2px solid transparent",
    borderImage: "linear-gradient(90deg, #4856D1 20.94%, #39B0D6 101.76%)",
    borderImageSlice: "1",
  },
  color1: {
    color: "#4856D1",
  },
  color2: {
    color: "#39B0D6",
  },
  check: {
    display: "flex",
    justifyContent: "center",
  },
  signup: {},
  social: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "62px",
    marginTop: "45px",
  },
  button: {
    backgroundImage: "linear-gradient(90deg, #4856D1 20.94%, #39B0D6 101.76%)",
    borderRadius: "50%",
    height: "65%",
    minWidth: 0,
    width: "40px",
  },
  test: {
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    backgroundImage: `url(${back})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

export default function SignUp() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => to_register(data);
  const classes = useStyles();
  const [value1, setValue1] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const [value2, setValue2] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const [country, setCountry] = React.useState("");
  const [industry, setIndustry] = React.useState("");

  const handleChange1 = (prop) => (event) => {
    setValue1({ ...value1, [prop]: event.target.value });
  };
  const handleChange2 = (prop) => (event) => {
    setValue2({ ...value2, [prop]: event.target.value });
  };

  const changeCountry = (event) => {
    setCountry(event.target.value);
  };

  const changeIndustry = (event) => {
    setIndustry(event.target.value);
  };

  const handleClickShowPassword1 = () => {
    setValue1({ ...value1, showPassword: !value1.showPassword });
  };
  const handleClickShowPassword2 = () => {
    setValue2({ ...value2, showPassword: !value2.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.test}>
      <Container component="main" maxWidth="xs" className={classes.container}>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" className={classes.signup}>
            <span className={classes.color1}>Sign</span>{" "}
            <span className={classes.color2}>up</span>
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl className={classes.input} fullWidth>
                  <InputLabel required htmlFor="fullName" xs={12}>
                    Company name
                  </InputLabel>
                  <Input id="fullname" type="text" disableUnderline={true} />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.input} fullWidth>
                  <InputLabel required htmlFor="fullName" xs={12}>
                    Contact person name
                  </InputLabel>
                  <Input id="fullname" type="text" disableUnderline={true} />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.input} fullWidth>
                  <InputLabel id="country" required>
                    Country
                  </InputLabel>
                  <Select
                    labelId="country"
                    id="demo-simple-select-disabled"
                    value={country}
                    onChange={changeCountry}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.input} fullWidth>
                  <InputLabel required htmlFor="fullName" xs={12} required>
                    City
                  </InputLabel>
                  <Input id="fullname" type="text" disableUnderline={true} />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.input} fullWidth>
                  <Input id="fullname" type="" disableUnderline={true}>
                    <PhoneInput country={"us"} />
                  </Input>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.input} fullWidth>
                  <InputLabel required htmlFor="fullName" xs={12}>
                    Tax number
                  </InputLabel>
                  <Input id="fullname" type="number" disableUnderline={true} />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.input} fullWidth>
                  <InputLabel id="industry" required>
                    Select industry
                  </InputLabel>
                  <Select
                    labelId="industry"
                    id="industry"
                    value={industry}
                    onChange={changeIndustry}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.input} fullWidth>
                  <InputLabel required htmlFor="e-mail" xs={12}>
                    E-mail
                  </InputLabel>
                  <Input id="email" type="email" disableUnderline={true} />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.input} fullWidth>
                  <InputLabel required htmlFor="password" xs={12}>
                    Password
                  </InputLabel>
                  <Input
                    id="password"
                    type={value1.showPassword ? "text" : "password"}
                    value={value1.password}
                    onChange={handleChange1("password")}
                    disableUnderline={true}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword1}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {value1.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl className={classes.input} fullWidth>
                  <InputLabel required htmlFor="password-repeat">
                    Repeat password
                  </InputLabel>
                  <Input
                    id="password-repeat"
                    type={value2.showPassword ? "text" : "password"}
                    value={value2.password}
                    onChange={handleChange2("password")}
                    disableUnderline={true}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword2}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {value2.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} className={classes.check}>
                <FormControlLabel
                  control={
                    <Checkbox color="primary" className={classes.checkbox} />
                  }
                  label="I agree with the privacy policy"
                />
              </Grid>
              <Grid item xs={12} textAlign="center" fullWidth>
                Captcha to be here
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}