import React from 'react'
import Bus from './Bus/Bus'

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

const busses = (props) => props.bussesList.map((bus)=>{
    return (<Bus busName={bus.busName} 
    busDescription={bus.busDescription} 
    sourceDate={bus.sourceDate}
    sourceTime={bus.sourceTime}
    destinationDate={bus.destinationDate}
    destinationTime={bus.destinationTime}
    price={bus.price}
    key={bus.busName}
    book={props.book}
    />)
})

export default busses;