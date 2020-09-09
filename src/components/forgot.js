import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import {useForm} from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },

}));
export default function Forgot() {
    const classes = useStyles();
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
        return(
           <div className={classes.root}>
               <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                   <TextField id="email" label="Email" variant="filled"   innerRef={register}/>
                   <Button variant="contained" color="secondary" type="submit">
                       Send Your email
                   </Button>
               </form>
           </div>
        );
}