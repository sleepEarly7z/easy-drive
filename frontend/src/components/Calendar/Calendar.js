import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { Scheduler } from "@aldabil/react-scheduler";

const availability = [
    {
        // this object will be "parsed" into an Event Object
        // id: 1,
        title: 'Available', // a property!
        start: '2022-06-23T14:30:00', // a property!
        end: '2022-06-23T15:30:00', // a property! ** see important note below about 'end' **
    },
    {
        title: 'Available',
        start: '2022-06-25T11:30:00',
        end: '2022-06-25T12:30:00',
    },
    {
        title: 'Booked',
        start: '2022-06-25T14:30:00',
        end: '2022-06-25T15:30:00',
    },
]

const Calendar = () => {
    return (
        <section>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={availability}
                height="600px"
            />
        </section>
    )
}

export default Calendar
