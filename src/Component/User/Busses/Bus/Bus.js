import React from 'react'
import './Bus.css'
import { Card, CardText, CardBody,
    CardTitle,  Button } from 'reactstrap';

const bus = (props) =>(
<Card className="bus">
        <CardBody>
        <div className="bus_left">
          <CardTitle className="CardTitle">{props.busName}</CardTitle>
          <CardText style={{marginBottom:'0%'}}>{props.busDescription}</CardText>
         
          </div>
            <div className="bus_center">
          <p style={{marginBottom:'0%'}}>{props.sourceTime} &rarr; {props.destinationTime}</p>
            </div>
          <div className="bus_right">
          <p style={{marginBottom:'0%'}}>Price=₹{props.price}</p>
          <Button color="success" onClick={()=>props.book(props.busName)}>Book Now</Button>
          </div>
        </CardBody>
    </Card>
)

export default bus;