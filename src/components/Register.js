import React from 'react';
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
import {registerApi as api} from "../Path"
import {useHistory} from "react-router-dom";
import {func} from "prop-types";

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
    color1: {
        color: "#4856D1",
    },
    color2: {
        color: "#39B0D6",
    },
    authInputStyle: {
        width: '100%',
        marginBottom: '1rem',
        borderBottom: '2px solid transparent',
        borderImage: 'linear-gradient(90deg, #4856D1 20.94%, #39B0D6 101.76%)',
        borderImageSlice: '1',
    },
    text: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '21px',
        color: 'blue',
    },
    buttonStyle: {
        marginTop: '78px',
        backgroundImage: 'linear-gradient(90deg, #4856D1 20.94%, #39B0D6 101.76%)',
        borderRadius: '30px',
        width: '100%'
    },
    checkboxStyle: {
        marginTop: '79px',
        color: '#4856d1',
    },
    forgot: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '50px',
    },
    forgotStyle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '21px',
        color: '#4956D2',
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

    const classes = useStyles();
    const history = useHistory();
    const token = localStorage.getItem('token');
    if (token && token !== 'undefined') {
        history.push('/example');
    }

    const [myEmail, setMyEmail] = React.useState('');
    const [myFullName, setMyFullName] = React.useState('');
    const [myPassword, setMyPassword] = React.useState('');

    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState({
        password: '',
        showPassword: false,
    });
    const [password_confirmation, setPassword_confirmation] = React.useState({
        password_confirmation: '',
        showPassword1: false,
    });

    const handleChange = (prop) => (event) => {
        setFullName({...fullName, [prop]: event.target.value});
        setEmail({...email, [prop]: event.target.value});
        setPassword({...password, [prop]: event.target.value});
        setPassword_confirmation({...password_confirmation, [prop]: event.target.value});
    };
    const handleClickShowPassword = () => {
        setPassword({...password, showPassword: !password.showPassword});
    };
    const handleClickShowPassword1 = () => {
        setPassword_confirmation({...password_confirmation, showPassword1: !password_confirmation.showPassword1});
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleLogin = (data, history) => {
        axiosConfig.post(api, data)
            .then(res => res)
            .then(res => {
                    console.log(res, "res");
                    if (res.data.access_token === undefined) {
                        console.log('krkin pordzer');
                        return;
                    }
                    localStorage.setItem('token', res.data.access_token);
                    history.push("/login");
                }
            ).catch((error) => {
            console.log(error.response.data.errors, 'mes');
            ff(error)
        });
    }
    const ff = (errors) => {
        const {email, fullName, password} = errors.response.data.errors;
        setMyEmail({...myEmail, myEmail: email});
        setMyFullName({...myFullName, myFullName: fullName});
        setMyPassword({...myPassword, myPassword: password});
    }

    const onSubmit = () => {
        const values = {
            "fullName": fullName.fullName,
            'email': email.email,
            'password': password.password,
            'password_confirmation': password_confirmation.password_confirmation,
        }
        handleLogin(values, history);
    }

    return (
        <div className={classes.authCover}>
            <Grid container>
                <Grid item lg={4} md={6}>
                    <div className={classes.authContainer}>
                        <Typography variant="body2" component="h1" className={classes.authTitle}>
                            <span className={classes.color1}>Sign</span>{" "}
                            <span className={classes.color2}>up</span>
                        </Typography>
                        <form className={classes.root} noValidate autoComplete="off">
                            <Grid container>
                                <Grid item xs={12}>
                                    <div className={classes.emailinputstyle}>
                                        <TextField
                                            id="fullName"
                                            label="fullName"
                                            name="fullName"
                                            InputProps={{disableUnderline: true}}
                                            className={classes.authInputStyle}
                                            autoComplete="fullName"
                                            value={fullName.fullName}
                                            onChange={handleChange('fullName')}
                                        />
                                        {myFullName.myFullName && (<p>{myFullName.myFullName}</p>)}
                                    </div>
                                </Grid>
                                <Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.emailinputstyle}>
                                        <TextField
                                            id="email"
                                            label="email"
                                            name="email"
                                            InputProps={{disableUnderline: true}}
                                            className={classes.authInputStyle}
                                            autoComplete="email"
                                            value={email.email}
                                            onChange={handleChange('email')}
                                        />
                                        {myEmail.myEmail && (<p>{myEmail.myEmail}</p>)}
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div>

                                        <FormControl className={clsx(classes.margin, classes.authInputStyle)}>
                                            <InputLabel htmlFor="standard-adornment-password">Password*</InputLabel>
                                            <Input
                                                id="standard-adornment-password"
                                                type={password.showPassword ? 'text' : 'password'}
                                                value={password.password}
                                                onChange={handleChange('password')}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                        >
                                                            {password.showPassword ? <Visibility/> : <VisibilityOff/>}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                        {myPassword.myPassword && (<p>{myPassword.myPassword}</p>)}
                                    </div>
                                    <div>
                                        <FormControl className={clsx(classes.margin, classes.authInputStyle)}>
                                            <InputLabel htmlFor="standard-adornment-passwords">Password*</InputLabel>
                                            <Input
                                                id="standard-adornment-passwords"
                                                type={password_confirmation.showPassword1 ? 'text' : 'password'}
                                                value={password_confirmation.password_confirmation}
                                                onChange={handleChange('password_confirmation')}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword1}
                                                            onMouseDown={handleMouseDownPassword}
                                                        >
                                                            {password_confirmation.showPassword1 ? <Visibility/> :
                                                                <VisibilityOff/>}
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
                                            control={<Checkbox color="primary" icon={<CircleUnchecked/>}
                                                               checkedIcon={<CircleCheckedFilled/>}/>}
                                            label="I agree with the privacy policy"
                                            labelPlacement="end"
                                            className={classes.checkboxStyle}
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={12} textAlign="center" fullWidth>
                                    Captcha to be here
                                </Grid>
                                <Grid item xs={12}>
                                    <div>
                                        <Button type="button" onClick={onSubmit} variant="contained" fullWidth
                                                color="primary" className={classes.buttonStyle}>Sign up</Button>
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.photos}>
                                        <Avatar alt="Remy Sharp" src="../../images/facebook.png"/>
                                        <Avatar alt="Remy Sharp" src="../../images/twitter.png"/>
                                        <Avatar alt="Remy Sharp" src="../../images/google.png"/>
                                        <Avatar alt="Remy Sharp" src="../../images/linkedin.png"/>
                                        <Avatar alt="Remy Sharp" src="../../images/instagram.png"/>
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