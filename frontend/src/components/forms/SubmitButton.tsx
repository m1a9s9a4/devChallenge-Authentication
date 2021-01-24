import React from 'react';
import {makeStyles} from "@material-ui/styles";

interface Props {
  text: string;
  onClick: (e: React.FormEvent) => void;
}

const useStyles = makeStyles({
  submitBtn: {
    backgroundColor: '#2F80ED',
    borderRadius: '8px',
    border: '1px solid',
    width: '100%',
    height: '50px',
    fontSize: '20px',
    color: '#FFF',
  }
})

const SubmitButton: React.FC<Props> = props => {
  const classes = useStyles();
  return (
    <>
      <button type="submit" onClick={props.onClick} className={classes.submitBtn}>{props.text}</button>
    </>
  )
}

export default SubmitButton;