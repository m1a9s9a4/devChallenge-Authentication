import React from 'react';
import {makeStyles} from "@material-ui/styles";

interface Props {
  saveEmail: (e: React.FormEvent) => void;
}

const useStyles = makeStyles({
  emailInput: {
    border: '1px solid #BDBDBD',
    boxSizing: 'border-box',
    borderRadius: '8px',
    width: '100%',
    height: '50px',
    padding: '5px 20px',
    fontSize: '18px',
  }
})

const EmailInput: React.FC<Props> = props => {
  const classes = useStyles();

  return (
    <>
      <input name="email" type="email" className={classes.emailInput} placeholder="Email" onChange={props.saveEmail}/>
    </>
  );
}

export default EmailInput;