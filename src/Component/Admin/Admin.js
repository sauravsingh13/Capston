import React from 'react'
import Addbus from './AddBus/AddBus'
import ViewBusses from './ViewBusses/ViewBusses'
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
export default class Admin extends React.Component {
    state={
        busses:bussesArray
    }
    addbus=(source,destination,name,desciption,sourceDate,destinationDate,sourceTime,destinationTime,price)=>{
        let buss={
            source:source,
            destination:destination,
            busName:name,
            busDescription:desciption,
            sourceDate:sourceDate,
            destinationDate:destinationDate,
            sourceTime:sourceTime,
            destinationTime:destinationTime,
            price:price
        }
        let busses = this.state.busses;
        busses.push(buss);
        this.setState({busses:busses})
    }
    delete=(name)=>{
        let oldBussesList=this.state.busses;
        let updatedBussesList=oldBussesList.filter((bus)=>{
            return bus.busName!==name})
        this.setState({busses:updatedBussesList})

    }
    render(){
        return(
            <div>
                <h1>WELCOME ADMIN</h1>
                <Addbus addbus={this.addbus}/>
                <ViewBusses busses={this.state.busses} delete={this.delete}/>
            </div>
            
        )
    }
}