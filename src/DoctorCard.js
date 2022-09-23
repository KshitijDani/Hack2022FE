import React from 'react'
import { Button, Card, Image, Rating } from 'semantic-ui-react'

const RatingExampleStar = () => (
  <Rating icon='star' defaultRating={3} maxRating={4} />
)

const DoctorCard = () => (
    <Card fluid>
      <Card.Content>
        <Image
          size='small'
          floated='left'
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        />
        <Card.Header textAlign='left'>Steve Sanders</Card.Header>
        <Card.Meta textAlign='left'>Friends of Elliot</Card.Meta>
        <Card.Meta textAlign='left'>{RatingExampleStar()}</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Book now
          </Button>
        </div>
      </Card.Content>
    </Card>
)

export default DoctorCard
