import React from 'react'
import {Icon, Loader} from 'semantic-ui-react'
import {Item, Button } from 'semantic-ui-react'
import AppointmentItem from './AppointmentItem';

const Appointments = () => {    
    return (
        <div className='bookingsContainer'>
            <h2> Your upcoming appointments</h2>
            <AppointmentItem/>
            <AppointmentItem/>
            <AppointmentItem/>
        </div>
    );
};

export default Appointments;
