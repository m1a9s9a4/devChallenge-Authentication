import React, {useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import {Link} from 'react-router-dom';
import { EmailInput, PasswordInput, SubmitButton } from '../components/forms';

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
  },
  inputWrapper: {
    margin: '20px 0',
  },
  text: {
    fontFamily: 'Noto Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '19px',
    letterSpacing: '-0.035em',
    color: '#828282',
    textAlign: 'center',
  }
});

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();
  const onClick = (event: React.FormEvent) => {
    let isRegistered;
    fetch('http://localhost:8080/register/email')
      .then((res) => {
        isRegistered = res;
      })
      .catch(e => {
        console.log('e');
      })
    console.log(e.target);
  };

  const onEmailChange = (e: React.FormEvent) => {

  }
  return (
    <div className={classes.formBox}>
      <h2>devchallenges</h2>
      <h3>Join thousands of learners from around the world</h3>
      <p>Master web development by making real-life projects. There are multiple paths for you to choose</p>
      <form>
        <div className={classes.inputWrapper}>
          <EmailInput saveEmail={onEmailChange}/>
        </div>
        <div className={classes.inputWrapper}>
          <PasswordInput />
        </div>
        <div className={classes.inputWrapper}>
          <SubmitButton text="Start coding now" onClick={onClick}/>
        </div>
      </form>
      <div className={classes.inputWrapper}>
        <p className={classes.text}>
          or continue with these social profile
        </p>
      </div>
      <div className={classes.inputWrapper}>
        <p className={classes.text}>
          Already a member? Login
        </p>
      </div>
    </div>
  )
}

export default Register;