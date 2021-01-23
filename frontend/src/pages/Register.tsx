import React from 'react';
import {makeStyles} from "@material-ui/styles";
import { EmailInput, PasswordInput } from '../components/forms';

const useStyles = makeStyles({
  formBox: {
    position: 'absolute',
    left: '33.55%',
    right: '33.55%',
    top: '18.28%',
    bottom: '22.99%',
    border: '1px solid #BDBDBD',
    boxSizing: 'border-box',
    borderRadius: '24px',
    padding: '25px 50px',
  }
});

const Register = () => {
  const classes = useStyles();
  return (
    <div className={classes.formBox}>
      <h2>devchallenges</h2>
      <h3>Join thousands of learners from around the world</h3>
      <p>Master web development by making real-life projects. There are multiple paths for you to choose</p>
      <EmailInput />
      <PasswordInput />
    </div>
  )
}

export default Register;