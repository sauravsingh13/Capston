import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';

import './ViewBus.css'

const viewBus = (props) => {
    return(

    <div className="ViewBus">
        <h3><strong>NAME:-</strong>{props.busName}</h3>
        <p><strong>DESCRIPTION:-</strong>{props.busDescription}</p>
        <Row>
        <Col  sm="12" md="6">
        <p><strong>SOURCE:-</strong>{props.source}</p>
        </Col>
        <Col  sm="12" md="6">
        <p><strong>DESTINATION:-</strong>{props.destination}</p>
        </Col>
        </Row>
        {/* <p><strong>SOURCE:-</strong>{props.source}</p>
        <p><strong>DESTINATION:-</strong>{props.destination}</p> */}
        <Row>
        <Col  sm="12" md="6">
        <p><strong>SOURCE-DATE:-</strong>{props.sourceDate}</p>
        </Col>
        <Col  sm="12" md="6">
        <p><strong>SOURCE-TIME:-</strong>{props.sourceTime}</p>
        </Col>
        </Row>
        <Row>
        <Col  sm="12" md="6">
        <p><strong>DESTINATION-DATE:-</strong>{props.destinationDate}</p>
        </Col>
        <Col  sm="12" md="6">
        <p><strong>DESTINATION-TIME:-</strong>{props.destinationTime}</p>
        </Col>
        </Row>
        <Row>
        <Col  sm="12" md="6">
        <p><strong>PRICE:-</strong>{props.price}</p>
        </Col>
        <Col  sm="12" md="6">
        <Button color="warning">UPDATE</Button>  
        <Button style={{marginLeft:'10px'}}color="danger" onClick={()=>props.delete(props.busName)}>DELETE</Button>            
         </Col>
        </Row>
    </div>
    )
}
export default viewBus;