import React,{Component} from 'react'
import './AddBus.css'
import { Button } from 'reactstrap';

class addBus extends Component {
    func=()=>{
        let source=this.refs.source.value;
        let destination=this.refs.destination.value;
        let name=this.refs.name.value;
        let desciption=this.refs.desciption.value;
        let sourceDate=this.refs.sourceDate.value;
        let destinationDate=this.refs.destinationDate.value;
        let sourceTime=this.refs.sourceTime.value;
        let destinationTime=this.refs.destinationTime.value;
        let price=this.refs.price.value;
        this.props.addbus(source,destination,name,desciption,sourceDate,destinationDate,sourceTime,destinationTime,price)
    }
    render(){
        return (
            <div className="Addbus">
                <input type="text" ref="source" placeholder="Source"/>
                <input type="text" ref="destination" placeholder="Destination"/><br/>
                <input type="text" ref="name" placeholder="Name"/>
                <input type="text" ref="desciption" placeholder="Description"/><br/>
                <input type="date" ref="sourceDate" placeholder="Source Date"/>
                <input type="date" ref="destinationDate" placeholder="Destination Date"/><br/>
                <input type="text" ref="sourceTime" placeholder="Source Time"/>
                <input type="text" ref="destinationTime" placeholder="Destination Time"/><br/>
                <input type="number" ref="price" placeholder="Price"/>
                <Button color="primary" 
                onClick={this.func}
                >ADD</Button>
            </div>
            
    
        )
    }

}

export default addBus;