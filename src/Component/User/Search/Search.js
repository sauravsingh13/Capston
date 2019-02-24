import React,{Component} from 'react'
import { Button } from 'reactstrap';
import './Search.css'


class Search extends Component  {

    func=()=>{
        console.log(this.refs.leaving)
        this.props.search(this.refs.leavingFrom.value,this.refs.goingTo.value,this.refs.leavingDate.value)
    }
    
    render(){
        return(
            <div>
                <input className="search" type="text" name="leaving" ref="leavingFrom" placeholder=" &#x2197; Leaving From"></input><br/>
                <input className="search" type="text" ref="goingTo" placeholder="&#x2199; Going To"></input><br/>
                <input className="search" ref="leavingDate"  placeholder="&#x2199; Going To" type="date"></input><br/><br/>
                <Button color="primary" 
                onClick={this.func}
                >Go</Button>
            </div>
        )
    }
}

export default Search;