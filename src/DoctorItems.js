import React from 'react'
import {useRef, useEffect} from 'react';
import {Item, ItemContent, Button, Icon} from 'semantic-ui-react'

function DoctorItems() {

    useEffect(() => {
      const datetimeSlotPicker = document.querySelector('datetime-slot-picker');
      datetimeSlotPicker.addEventListener('slotUpdate', function(event){ console.log('Updated Slot: ', event.detail) });
      datetimeSlotPicker.slots = [
        {
          "date": 'Thu, 26 Nov 2020',
          "timeSlots": [
            '6 AM - 7 AM',
            '7 AM - 8 AM',
            '8 AM - 9 AM',
            '9 AM - 10 AM',
            '10 AM - 11 AM',
            '11 AM - 12 PM',
            '12 PM - 1 PM',
            '1 PM - 2 PM',
            '2 PM - 3 PM',
            '3 PM - 4 PM',
            '4 PM - 5 PM',
            '5 PM - 6 PM',
            '6 PM - 7 PM',
            '7 PM - 8 PM',
            '8 PM - 9 PM',
            '9 PM - 10 PM',  
            '10 PM - 11 PM',
            '11 PM - 12 AM'     
           ]
        },
        {
          "date": 'Fri, 27 Nov 2020',
          "timeSlots": [
          ]
        },
        {
          "date": 'Mon, 30 Nov 2020',
          "timeSlots": [
            '10 AM - 11 AM',
            '11 AM - 12 PM',
            '4 PM - 5 PM',
            '5 PM - 6 PM'
          ]
        },
        {
          "date": 'Tue, 1 Dec 2020',
          "timeSlots": [
            '10 AM - 11 AM',
            '11 AM - 12 PM',
            '4 PM - 5 PM',
            '5 PM - 6 PM'
          ]
        },
        {
          "date": 'Mon, 4 Jan 2021',
          "timeSlots": [
            '6 AM - 7 AM',
            '7 AM - 8 AM',
            '8 AM - 9 AM',
            '1 PM - 2 PM',
            '2 PM - 3 PM',
            '4 PM - 5 PM',
            '5 PM - 6 PM',
            '6 PM - 7 PM',
            '7 PM - 8 PM',
            '8 PM - 9 PM'  
          ]
        }
      ];
    },[]);

    return (
        <Item.Group relaxed className='doctorItem'>
            <Item>
                <Item.Image size='small' src='https://doccure.dreamguystech.com/template/assets/img/doctors/doctor-thumb-01.jpg' />
                <Item.Content>
                    <Item.Header as='a'>Ruby Perrin</Item.Header>
                    <Item.Meta>MDS - Periodontology and Oral Implantology, BDS</Item.Meta>
                    <Item.Extra>
                        <Icon name="map marker alternate"></Icon>
                        {"Florida, USA"}
                    </Item.Extra>
                    <Item.Extra>
                        <Icon name="money bill alternate"></Icon>
                        {"$ 160"}
                    </Item.Extra>
                </Item.Content>
                <Item.Content>
                    <datetime-slot-picker
                        className="bookButton"
                        placeholder="Pick a time slot" 
                        time-slots-text="Time"
                        no-slots-text="No slots are available" 
                        language="en"
                    >
                    </datetime-slot-picker>
                    <Button primary={true} color='green'>
                        Book now
                    </Button>
                </Item.Content>
            </Item>
        </Item.Group>
    );
}


export default DoctorItems