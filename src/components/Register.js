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
import {registerApi as api} from "../Path"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import google from '../assets/icons/icon_facebook.png'

// import Background from '../assets/img/pills_les_cuncliffe_fotolia_41089054_m 1.png';


import axiosConfig from './axiosConfig';


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

      .then(res => res
      )
  .then(
      res => {
        console.log(res, 'myRespons');
        localStorage.setItem('token', res.data.access_token);
      }
  ).catch(error => {
     // let err =  error.json(error.responseText);
     //  console.log(err,'fff');
      console.log(error.data.ValidationException, 'err')
    });
}

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: '145px',
    //marginLeft: '120',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundImage: 'linear-gradient(90deg, #4856D1 20.94%, #39B0D6 101.76%)',
    borderRadius: '30px'
  },
  container: {
    position: 'relative',
    right: '30%',
    height: '100%'
  },
  input: {
    borderBottom: '2px solid transparent',
    borderImage: 'linear-gradient(90deg, #4856D1 20.94%, #39B0D6 101.76%)',
    borderImageSlice: '1'
  },
  color1: {
    color: '#4856D1'
  },
  color2: {
    color: '#39B0D6'
  },
  check: {
    display: 'flex',
    justifyContent: 'center'
  },
  signup: {
    paddingBottom: '20%'
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '62px',
    marginTop: '15px'
    
  },
  button: {
    backgroundImage: 'linear-gradient(90deg, #4856D1 20.94%, #39B0D6 101.76%)',
    borderRadius: '50%',
    height: '65%',
    minWidth: 0,
    width: '40px'

  }

}));

export default function SignUp() {
  const classes = useStyles();
const{register, handleSubmit} = useForm();
const onSubmit = data => to_register(data);

  return (
      <Container component="main" maxWidth="xs" className={classes.container}>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" className={classes.signup}>
            <span className = {classes.color1}>Sign</span> <span className={classes.color2}>up</span>
          </Typography>
          <form className={classes.form}  onSubmit={ handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} className = {classes.item}>
                <TextField
                    autoComplete="fullName"
                    name="fullName"
                    required
                    fullWidth
                    id="fullName"
                    label="fullName"
                    autoFocus
                    inputRef={register({ required: true })}
                    InputProps={{ disableUnderline: true }}
                    className = {classes.input}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                    filled
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    inputRef={register({ required: true })}
                    className = {classes.input}
                    InputProps={{ disableUnderline: true }}

                />
              </Grid>
              <Grid item xs={12} className = {classes.field}>
                <TextField
                    inputRef={register({ required: true })}
                    className = {classes.input}
                    InputProps={{ disableUnderline: true }}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
              </Grid>

              <Grid item xs={12} className = {classes.field}>
                <TextField
                    inputRef={register({ required: true })}
                    className = {classes.input}
                    InputProps={{ disableUnderline: true }}
                    required
                    fullWidth
                    name="password_confirmation"
                    label="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
              </Grid>

              <Grid item xs={12} className={classes.check}>
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="I agree with the privacy policy"
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
            <Grid item xs={12} className={classes.social}>
                <Button className={classes.button}>
                  <FacebookIcon/>
                </Button>
                <Button className={classes.button}>
                  <InstagramIcon/>
                </Button>
                <Button className={classes.button}>

                </Button>
                <Button className={classes.button}>
                  <LinkedInIcon/>
                </Button>
                <Button className={classes.button}>
                  <TwitterIcon/>
                </Button>
              </Grid>
            
          </form>
        </div>

      </Container>
      
  );
}