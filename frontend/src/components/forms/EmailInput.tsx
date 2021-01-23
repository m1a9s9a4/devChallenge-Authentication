import React from 'react';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  emailInput: {
    border: '1px solid #BDBDBD',
    boxSizing: 'border-box',
    borderRadius: '8px',
    width: '100%',
    height: '50px',
    padding: '5px 10px',
  }
})

const EmailInput = () => {
  const classes = useStyles();

  return (
    <>
      <input name="email" type="email" className={classes.emailInput} placeholder="Email"/>
    </>
  );
}

export default EmailInput;