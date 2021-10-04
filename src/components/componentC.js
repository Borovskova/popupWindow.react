import React, {Component} from 'react';
import App from './App.js'


const TABLE_STYLES = {
    border: 'solid',
    marginTop: '50px',
    width: '100%',
    background: 'lightGreen',
    
  }
  const TABLE_STYLES2 = {
    border: 'solid',
  } 
  const players = [
    {name: 'Anna', age: 21, work: 'actor'},
    {name: 'Andrey', age: 22, work: 'sportsmen'},
    {name: 'Victor', age: 29, work: 'actor'},
    {name: 'Tom', age: 31, work: 'actor'},
    {name: 'Anton', age: 26, work: 'actor'},
    {name: 'Alex', age: 29, work: 'actor'},
]
class ComponentC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.click = this.click.bind(this);
        this.renderPlayers = this.renderPlayers.bind(this);
        
    }
    click(){
        this.props.parentMethod()    
    }
    renderPlayers(player, index){
        return(
            <tr key ={index}>
            <td style ={TABLE_STYLES2} onClick={this.click}>{player.name}</td>
            <td style ={TABLE_STYLES2} onClick={this.click}>{player.age}</td>
            <td style ={TABLE_STYLES2} onClick={this.click}>{player.work}</td>
            </tr>
        )
    }
    render(){
        return(
            <div>
            <table style ={TABLE_STYLES}>
           <thead>
               <tr style ={TABLE_STYLES2}>
               <th style ={TABLE_STYLES2}>Name</th>
               <th style ={TABLE_STYLES2}>Age</th>
               <th style ={TABLE_STYLES2}>Work</th>
               </tr>
           </thead>
            <tbody style ={TABLE_STYLES2}>
                {players.map(this.renderPlayers)}
            </tbody>
            </table>
            </div>
        )
    }
}

export default ComponentC