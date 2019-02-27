import React from 'react'
import './ConfirmBooking.css'


const confirmBooking=(props)=>{
     let seatBooked=props.seatBooked.map((seat)=>(<p key={seat}>{seat}</p>));
    console.log(props.seatBooked)
    return(
        <div className="ConfirmBooking">
        Seat Booked:<br/>
        {seatBooked}<br/>
        <input type="button" color="warning" onClick={props.cancel}>Cancel</input><br/><br/>
        <input type="button" color="success" onClick={props.proceedToPayment}>Proceed To Payment</input>
    </div>
    )
    
}
export default confirmBooking;
