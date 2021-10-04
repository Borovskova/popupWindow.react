import React, {Component} from 'react';
import ComponentC from './componentC.js'



class ComponentF extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'parent component'
        }
    }
    render(){
        return(
            <div>
            <p>hello youtube {this.state.name}</p>
            <ComponentC name={this.state.name}></ComponentC>
            </div>
        )
    }
}




export default ComponentF