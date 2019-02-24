import React from 'react'
import { Row,Col,Container
   } from 'reactstrap';
import './User.css'
import Busses from './Busses/Busses'
import Search from './Search/Search'
import SeatSelection from './SeatSelection/SeatSelection'
import Backdrop from './Backdrop/Backdrop'
import ConfirmBooking from './ConfirmBooking/ConfirmBooking'

const bussesArray = [
  {source:'A',
  destination:'Z',
  busName:'SAURAV TRAVELS',
  busDescription:'SCANIA AC Multi Axle Semi Sleeper (2 + 2)',
  sourceDate:'2019-02-09',
  destinationDate:'2019-02-10',
  sourceTime:'4:30',
  destinationTime:'5:30',
  price:23.4},
  {source:'B',
  destination:'Y',
  busName:'KUMAR TRAVELS',
  busDescription:'SCANIA AC Multi Axle Semi Sleeper (2 + 2)',
  sourceDate:'2019-02-11',
  destinationDate:'2019-02-09',
  sourceTime:'5:30',
  destinationTime:'6:30',
  price:45.4}
]
const seatStatus=[{
  row:'A',
  status:['unbooked','unbooked','unbooked','booked','booked']
},
{
  row:'B',
  status:['booked','booked','unbooked','booked','unbooked']
},{
  row:'C',
  status:['booked','unbooked','booked','booked','booked']
},{
  row:'D',
  status:['booked','unbooked','unbooked','booked','unbooked']
},{
  row:'E',
  status:['booked','booked','unbooked','booked','booked']
},{
  row:'F',
  status:['unbooked','unbooked','booked','booked','booked']
},{
  row:'G',
  status:['booked','unbooked','unbooked','booked','booked']
},{
  row:'H',
  status:['booked','unbooked','booked','booked','booked']
},]

export default class User extends React.Component {
    state={
      busses:[],
      seatStatus:seatStatus,
      SeatSelection:false,
      confirmSeat:false,
      seatBooked:[],
    }
    searchBuses=(source,destination,date)=>{
    //   console.log(source,destination,date)
    //  let busses=bussesArray.filter((bus)=>
    //     source===bus.source  && destination===bus.destination && date===bus.sourceDate
    //   )

      this.setState({busses:bussesArray})
    }
    bookbus=(bus)=>{
      this.setState({SeatSelection:true})

    }
    cancelBooking=()=>{
      this.setState({SeatSelection:false})
      this.setState({confirmSeat:false})
    }
    confirmSeat=(seatBooked)=>{
      this.setState({seatBooked:seatBooked})
      this.setState({SeatSelection:false})
      this.setState({confirmSeat:true})
      console.log(seatBooked)
    }
    proceedToPayment=()=>{
      this.setState({SeatSelection:false})
      this.setState({confirmSeat:false})
      alert('PAYMENT SUCCESSFILL')
    }
    render(){
       
        
        return(
             <div>
                <Backdrop show={this.state.SeatSelection} ><SeatSelection cancel={this.cancelBooking}
                seatStatus={this.state.seatStatus} confirmSeat={this.confirmSeat}/></Backdrop>
                <Backdrop show={this.state.confirmSeat} ><ConfirmBooking seatBooked={this.state.seatBooked} 
                cancel={this.cancelBooking} proceedToPayment={this.proceedToPayment}/></Backdrop>
                <h1>WELCOME USER</h1>
                <Container>
                  <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                      <Search search={this.searchBuses}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                      <Busses bussesList={this.state.busses} book={this.bookbus}/>
                    </Col>
                  </Row>
                </Container>
            </div>
        )
    }
}