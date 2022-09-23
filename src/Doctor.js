import React, {Component} from 'react';
import {Item, Button, Icon} from 'semantic-ui-react'

class Doctor extends Component {

    constructor() {
        super();
        this.state = {
            isBookingInProgress: false,
            isBooked: false,
            isSlotSelected: false
        }
    }

    updateState() {
        console.log("Updating state...")
        this.setState({
            isSlotSelected: true
        })
    }

    componentDidMount() {
        const datetimeSlotPicker = document.getElementById('dateSlotPicker' + this.props.docId);

        datetimeSlotPicker.addEventListener('slotUpdate', function(event) { 
            console.log('Updated Slots: ', event.detail); 
            //updateState
        });

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
    }

    render() {
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
                            id = {"dateSlotPicker" + this.props.docId} 
                            className="bookButton"
                            placeholder="Pick a time slot" 
                            time-slots-text="Time"
                            no-slots-text="No slots are available" 
                            language="en"
                        >
                        </datetime-slot-picker>
                        <Button primary={!this.state.isBooked} loading={this.state.isBookingInProgress} color='green' onClick={(e) => this.bookAppointment()} disabled={this.state.isBooked}>
                            {this.state.isBooked ? "Booked" : "Book now"}
                        </Button>
                    </Item.Content>
                </Item>
            </Item.Group>
        );
    }

    bookAppointment() {
        const slotPicker = document.getElementById('dateSlotPicker' + this.props.docId);
        const input = slotPicker.getElementsByClassName("neo-input")[0];
       
        const dateAndTime = input.value.split(',');
        const time = dateAndTime[2];
        const date = dateAndTime[0] + ", " + dateAndTime[1];

        this.setState({
            isBookingInProgress: true
        }, () =>{
            setTimeout(()=>{
                this.setState({
                    isBookingInProgress: false,
                    isBooked: true
                })
            }, 5000)
        });
    }
} 

export default Doctor;