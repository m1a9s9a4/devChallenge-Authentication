import React from 'react';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  passwordInput: {
    border: '1px solid #BDBDBD',
    boxSizing: 'border-box',
    borderRadius: '8px',
    fontSize: '18px',
    width: '100%',
    height: '50px',
    padding: '5px 20px',
  }
});

const PasswordInput = () => {
  const classes = useStyles();
  return (
    <>
      <input className={classes.passwordInput} type="password" placeholder="Password" />
    </>
  )
}

export default PasswordInput;