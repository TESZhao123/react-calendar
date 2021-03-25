import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux';
import { createSchedule } from './redux/module/bucket';
import styled from"styled-components";


export default function DateAndTimePickers({history}) {
  console.log(history)
  const dispatch = useDispatch(createSchedule)
  
  const date = useRef()

  const plan = useRef()

  const myEvent = () => {
         
  const schedule = {date:date.current.value.split('T')[0],'title':plan.current.value}
  // const schedule = {'date':'2021-03-24', 'title':'내일 제출'}
  dispatch(createSchedule(schedule))
  history.push('/')

  }
 const useStyles = makeStyles((theme) => ({
   container: {
     display: 'flex',
     flexWrap: 'wrap',
   },
   textField: {
     marginLeft: theme.spacing(1),
     marginRight: theme.spacing(1),
     width:300,
     
   },
 }));
 
  const classes = useStyles();

  const Mystyled= styled.div`
  width: 100vw;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ddd;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color:#fff;
  &:hover{background-color:cornsilk}
  width: 100vw;
    padding: 32px;
    
    `;
  return (
    <div>
      <Mystyled>
    <form className={classes.container} noValidate>
      <TextField  inputRef={date}
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2021-03-23T3:48"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />  
    </form>
    <form className={classes.root} noValidate autoComplete="off">
  <TextField inputRef={plan} id="filled-basic" label="일정을 추가하세요" variant="filled" />
  
  
</form>

<Button onClick={myEvent} variant="contained" color="secondary">
  일정추가
</Button> 



</Mystyled>
    </div>
  
  );
 
}
