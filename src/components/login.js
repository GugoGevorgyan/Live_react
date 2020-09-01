import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import back from '../images/general.png';
import axiosConfig from './axiosConfig';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import {loginApi as api} from "../Path";
import {useHistory} from "react-router-dom";
import { useTranslation } from 'react-i18next';


const useStyles = makeStyles((theme) => ({
  authCover: {
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    backgroundImage: `url(${back})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  authContainer: {
    maxWidth: '530px',
    paddingTop: '110px',
    paddingLeft: '112px',
  },
  authTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '26px',
    fontSize: '22px',
    color: '#4856D1',
  },
  authInputStyle: {
    width: '100%',
    marginBottom: '1rem',
    borderBottom: '2px solid transparent',
    borderImage: 'linear-gradient(90deg, #4856D1 20.94%, #39B0D6 101.76%)',
    borderImageSlice: '1',
  },
  authInputStyleError: {
    width: '100%',
    marginBottom: '1rem',
    borderBottom: '2px solid transparent',
    borderImageSlice: '1',
    border: '1px solid red',
  },
  text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '21px',
    color: 'blue',
  },
  buttonStyle:{
    marginTop: '78px',
    backgroundImage: 'linear-gradient(90deg, #4856D1 20.94%, #39B0D6 101.76%)',
    borderRadius: '30px',
    width: '100%'
  },
  checkboxStyle:{
    marginTop: '79px',
    color: '#4856d1',
  },
  forgot:{
    display:'flex',
    justifyContent: 'flex-end',
    marginTop: '50px',
  },
  forgotStyle:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '21px',
    color:'#4956D2',
  },
  photos: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-between',
    marginTop: '40px',
  },
  margin: {
    margin: theme.spacing(1),
  },
  emailinputstyle: {
    marginLeft: '10px',
  },
}));

export default function SignIn() {
  const { t, i18n } = useTranslation();
  function handleClick(lang){
    i18n.changeLanguage(lang);
  }

  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const token = localStorage.getItem('token');
  if (token && token !== 'undefined'){
    history.push('/example');
  }
  function onSubmit(){
    handleLogin(values, history);
  }

  function handleLogin(data,history) {
    axiosConfig.post('api', data)
        .then((response) => {

          if( response.data.access_token != null){
            localStorage.setItem('token', response.data.access_token);
            history.push("/login");
          }
        }).catch((error) => {
          if (error.response.status == 401){
              console.log(error.response.data.message);
              setEmail(error.response.data.message.email);
              setPassword(error.response.data.message.password);
          }
        });
  }


  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (

      <div className={classes.authCover}>
        <div>
          <button onClick={()=>handleClick('en')}>
            English
          </button>
          <button onClick={()=>handleClick('ko')}>
            русский
          </button>
          <button onClick={()=>handleClick('chi')}>
            Chinase
          </button>
        </div>
        <Grid container>
          <Grid item lg={4} md={6} >
            <div className={classes.authContainer}>
              <Typography variant="body2" component="h1" className={classes.authTitle}>{t('Thanks.1')}</Typography>
              <form className={classes.root} noValidate autoComplete="off">
                <Grid container>
                  <Grid item xs={12}>
                    <div className={classes.emailinputstyle}>
                      <TextField
                          id="email"
                          label="email"
                          name="email"
                          InputProps={{ disableUnderline: true }}
                          className={email? classes.authInputStyleError: classes.authInputStyle}
                          autoComplete="email"
                          value={values.email}
                          onChange={handleChange('email')}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div>
                      <FormControl className={clsx(classes.margin, classes.authInputStyle)} >
                        <InputLabel htmlFor="standard-adornment-password">Password*</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                              <InputAdornment position="end" >
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            }
                        />
                      </FormControl>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div>
                      <FormControlLabel
                          value="end"
                          control={<Checkbox color="primary" icon={<CircleUnchecked />} checkedIcon={<CircleCheckedFilled />}/>}
                          label="I want to receive updates via email"
                          labelPlacement="end"
                          className={classes.checkboxStyle}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div>
                      <Button type="button" onClick={onSubmit} variant="contained" fullWidth color="primary" className={classes.buttonStyle}>Sign in</Button>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className={classes.forgot}>
                      <Typography variant="body2" className={classes.forgotStyle}>Forgot password</Typography>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className={classes.photos}>
                      <Avatar alt="Remy Sharp" src="../../images/facebook.png" />
                      <Avatar alt="Remy Sharp" src="../../images/twitter.png" />
                      <Avatar alt="Remy Sharp" src="../../images/google.png" />
                      <Avatar alt="Remy Sharp" src="../../images/linkedin.png" />
                      <Avatar alt="Remy Sharp" src="../../images/instagram.png" />
                    </div>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>

  );
}