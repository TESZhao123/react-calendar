import './home.css';
import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Button } from '@material-ui/core';
import {  Link } from "react-router-dom";
import { Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch, useSelector } from 'react-redux';
import Detail from"./Detail";



    


function Home() {
  
  const [isOpen, setIsOpen] = useState(false)
  const selector = useSelector((state) => state.bucket.list);
  console.log(selector)
  const onClickEvent = (e) => {  setIsOpen(true)
    console.log(e.event.plan)
    console.log(e.event.date)}
  return (
    
    <div>
      
      <Link to ="/"></Link>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        weekends={false}
        eventClick={onClickEvent} 

        events = {selector}

        

        
        
          
        
        
   /> 
      <Link to ="/schedule"><Fab color="secondary" aria-label="edit">
      <EditIcon />
      </Fab></Link>
      {isOpen && <Detail />}
    </div>
    
  )
}


export default Home;
