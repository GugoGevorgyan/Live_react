import React from 'react';
import { useForm } from "react-hook-form";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// <<<<<<< HEAD
import {registerApi as api} from "../Path";
import Background from '../assets/img/pills_les_cuncliffe_fotolia_41089054_m 1.png';
// =======
import axiosConfig from './axiosConfig';

// >>>>>>> 8c63d6ba816fe4358024af82d15cc1ab13fbc300
function Copyright() {
  return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
  );
}

function to_register(data){
    axiosConfig.post(api,data)
      .then(res => res)
  .then(
      res => {
        localStorage.setItem('token', res.data.access_token)
      }
  )
}

const useStyles = makeStyles((theme) => ({
  body:{
    backgroundImage: `url(${"Background"})`,
  },
  paper: {
    // backgroundImage: `url(${"Background"})`,
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
const{register, handleSubmit} = useForm();
const onSubmit = data => to_register(data);

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form}  onSubmit={ handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                    autoComplete="fullName"
                    name="fullName"
                    variant="outlined"
                    required
                    fullWidth
                    id="fullName"
                    label="fullName"
                    autoFocus
                    inputRef={register({ required: true })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    inputRef={register({ required: true })}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                    inputRef={register({ required: true })}
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                    inputRef={register({ required: true })}
                    variant="outlined"
                    required
                    fullWidth
                    name="role_id"
                    label="role_id"
                    type="role_id"
                    id="role_id"
                    autoComplete="role_id"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    inputRef={register({ required: true })}
                    variant="outlined"
                    required
                    fullWidth
                    name="phone"
                    label="phone"
                    type="phone"
                    id="phone"
                    autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    inputRef={register({ required: true })}
                    variant="outlined"
                    required
                    fullWidth
                    name="address"
                    label="address"
                    type="address"
                    id="address"
                    autoComplete="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    inputRef={register({ required: true })}
                    variant="outlined"
                    required
                    fullWidth
                    name="passport"
                    label="passport"
                    type="passport"
                    id="passport"
                    autoComplete="passport"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    inputRef={register({ required: true })}
                    variant="outlined"
                    required
                    fullWidth
                    name="site"
                    label="site"
                    type="site"
                    id="site"
                    autoComplete="site"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    inputRef={register({ required: true })}
                    variant="outlined"
                    required
                    fullWidth
                    name="code"
                    label="code"
                    type="code"
                    id="code"
                    autoComplete="code"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
  );
}