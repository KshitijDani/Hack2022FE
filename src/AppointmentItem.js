import React from 'react'
import {Item, Button, Icon } from 'semantic-ui-react'

const AppointmentItem = () => {    
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
                        <Item.Extra>
                            <Button primary size='small'>
                                Update
                            </Button>
                            <Button color='red' size='small'>
                                Cancel
                            </Button>
                        </Item.Extra>
                    </Item.Content>
                    <Item.Content>
                        <Item.Header as='a'>Appointment confirmed</Item.Header>
                        <Item.Meta>Date - Thu, 26 Nov 2020</Item.Meta>
                        <Item.Meta>Timings - 6AM - 7AM</Item.Meta>
                    </Item.Content>
                </Item>
            </Item.Group>
    );
};

export default AppointmentItem;
