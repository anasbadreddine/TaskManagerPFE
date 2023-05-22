import React from 'react'
import './Planning.css'

//calendar react packages
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Planning = () => {

  const events = [
    {
      title : "Task num 1",
      start: "2023-05-22T08:00:00",
      end: "2023-05-22T09:00:00",
    },
  ];


  return (
    <>
    <div className='planning_body'>
    <h1>Planning</h1>
    <Fullcalendar
    plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
    initialView={"dayGridMonth"}
    headerToolbar={{
      start: "today prev,next",
      center: "title",
      end: "dayGridMonth,timeGridWeek,timeGridDay",
    }}
    height={"90vh"}

    events={events}
    eventDidMount={(info) => {
      return new bootstrap.Popover(info.el,{
        title: info.event.title,
        placement: "auto",
        trigger: "hover",
        customClass: "popoverStyle",
        content: 
        "<p>Please subsribe<string> Bootstrap</strong></p>",
        html: true,
      });
    }}
    />
    </div>
    </>
  )
}

export default Planning