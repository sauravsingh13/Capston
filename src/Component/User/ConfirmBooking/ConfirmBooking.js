import React from 'react'
import './ConfirmBooking.css'
import { Button } from 'reactstrap';


const confirmBooking=(props)=>{
     let seatBooked=props.seatBooked.map((seat)=>(<p key={seat}>{seat}</p>));
    console.log(props.seatBooked)
    return(
        <div className="ConfirmBooking">
        Seat Booked:<br/>
        {seatBooked}<br/>
        <Button color="warning" onClick={props.cancel}>Cancel</Button><br/><br/>
        <Button color="success" onClick={props.proceedToPayment}>Proceed To Payment</Button>
    </div>
    )
    
}
export default confirmBooking;
