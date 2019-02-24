import React from 'react'
import ViewBus from './ViewBus/ViewBus'



const viewBusses = (props) => props.busses.map((bus)=>{
    return (<ViewBus busName={bus.busName} 
    busDescription={bus.busDescription}
    source={bus.source}
    destination={bus.destination} 
    sourceDate={bus.sourceDate}
    sourceTime={bus.sourceTime}
    destinationDate={bus.destinationDate}
    destinationTime={bus.destinationTime}
    price={bus.price}
    key={bus.busName}
    delete={props.delete}
    />)
})

export default viewBusses;