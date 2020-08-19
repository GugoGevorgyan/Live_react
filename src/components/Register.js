import React from 'react';
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
import { useForm } from "react-hook-form";








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


function prom(data){
  console.log(data);
  let formdata = new FormData;
  formdata.append('fullName',data.fullName);
  // formdata.append('phone',data.phone);
  // formdata.append('address',data.address);
  // formdata.append('passport',data.c);
  // formdata.append('site',data.site);
  // formdata.append('code',data.code);
  // formdata.append('email',data.email);
  // formdata.append('password',data.password);
  // formdata.append('role_id',data.role_id);

  // console.log(typeof formdata)
  // let promis = fetch('http://127.0.0.1:8000/api/register',{
  //   method:'get',
  //   // method:'post',
  //   // body: formdata,
  // }).then((r)=>{
  //   console.log(r)
  //   if(r.ok){
  //     return r;
  //   }
  //   throw new Error('invalid status code exav')
  // })
  // promis
  //     .then(r=>{
  //       console.log(r.text())
  //     })
  fetch('http://127.0.0.1:8000/api/register', { method: 'POST', body: formdata })
      .then(res => res.json())
      .then(res => console.log(res + 'ggggggg'))

}


const useStyles = makeStyles((theme) => ({
  paper: {
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
const onSubmit = data => prom(data);
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
          <form  onSubmit={handleSubmit(onSubmit)}  >
            <Grid container spacing={2}>
              <Grid  item xs={12} sm={6}>
              {/*  <TextField*/}
              {/*      autoComplete="fname"*/}
              {/*      name="firstName"*/}
              {/*      variant="outlined"*/}
              {/*      required*/}
              {/*      fullWidth*/}
              {/*      id="firstName"*/}
              {/*      label="First Name"*/}
              {/*      autoFocus*/}
              {/*  />*/}
              </Grid>
              <Grid  item xs={12} sm={6}>
                <TextField
                    inputRef={register({ required: true })}
                    variant="outlined"
                    required
                    fullWidth
                    id="fullName"
                    label="fullName"
                    name="fullName"
                    autoComplete="fullName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    inputRef={register({ required: true })}
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                />
              </Grid>
              {/*<Grid item xs={12} >*/}
              {/*  <TextField*/}
              {/*      inputRef={register({ required: true })}*/}
              {/*      variant="outlined"*/}
              {/*      required*/}
              {/*      fullWidth*/}
              {/*      name="password"*/}
              {/*      label="Password"*/}
              {/*      type="password"*/}
              {/*      id="password"*/}
              {/*      // autoComplete="current-password"*/}
              {/*  />*/}
              {/*</Grid>*/}

              {/*<Grid item xs={12}>*/}
              {/*  <TextField*/}
              {/*      inputRef={register({ required: true })}*/}
              {/*      variant="outlined"*/}
              {/*      required*/}
              {/*      fullWidth*/}
              {/*      name="role_id"*/}
              {/*      label="role_id"*/}
              {/*      type="role_id"*/}
              {/*      id="role_id"*/}
              {/*      autoComplete="role_id"*/}
              {/*  />*/}
              {/*</Grid>*/}
              {/*<Grid item xs={12}>*/}
              {/*  <TextField*/}
              {/*      inputRef={register({ required: true })}*/}
              {/*      variant="outlined"*/}
              {/*      required*/}
              {/*      fullWidth*/}
              {/*      name="phone"*/}
              {/*      label="phone"*/}
              {/*      type="phone"*/}
              {/*      id="phone"*/}
              {/*      autoComplete="phone"*/}
              {/*  />*/}
              {/*</Grid>*/}
              {/*<Grid item xs={12}>*/}
              {/*  <TextField*/}
              {/*      inputRef={register({ required: true })}*/}
              {/*      variant="outlined"*/}
              {/*      required*/}
              {/*      fullWidth*/}
              {/*      name="address"*/}
              {/*      label="address"*/}
              {/*      type="address"*/}
              {/*      id="address"*/}
              {/*      autoComplete="address"*/}
              {/*  />*/}
              {/*</Grid>*/}
              {/*<Grid item xs={12}>*/}
              {/*  <TextField*/}
              {/*      inputRef={register({ required: true })}*/}
              {/*      variant="outlined"*/}
              {/*      required*/}
              {/*      fullWidth*/}
              {/*      name="passport"*/}
              {/*      label="passport"*/}
              {/*      type="passport"*/}
              {/*      id="passport"*/}
              {/*      autoComplete="passport"*/}
              {/*  />*/}
              {/*</Grid>*/}
              {/*<Grid item xs={12}>*/}
              {/*  <TextField*/}
              {/*      inputRef={register({ required: true })}*/}
              {/*      variant="outlined"*/}
              {/*      required*/}
              {/*      fullWidth*/}
              {/*      name="status"*/}
              {/*      label="status"*/}
              {/*      type="status"*/}
              {/*      id="status"*/}
              {/*      autoComplete="status"*/}
              {/*  />*/}
              {/*</Grid>*/}
              {/*<Grid item xs={12}>*/}
              {/*  <TextField*/}
              {/*      inputRef={register({ required: true })}*/}
              {/*      variant="outlined"*/}
              {/*      required*/}
              {/*      fullWidth*/}
              {/*      name="site"*/}
              {/*      label="site"*/}
              {/*      type="site"*/}
              {/*      id="site"*/}
              {/*      autoComplete="site"*/}
              {/*  />*/}
              {/*</Grid>*/}
              {/*<Grid item xs={12}>*/}
              {/*  <TextField*/}
              {/*      inputRef={register({ required: true })}*/}
              {/*      variant="outlined"*/}
              {/*      required*/}
              {/*      fullWidth*/}
              {/*      name="code"*/}
              {/*      label="code"*/}
              {/*      type="code"*/}
              {/*      id="code"*/}
              {/*      autoComplete="code"*/}
              {/*  />*/}
              {/*</Grid>*/}

              <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
                // onClick={prom}
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