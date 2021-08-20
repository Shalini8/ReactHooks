import React, { Component } from 'react'

export class Newperson extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fname : ""
        }
    }
    buttonClickHandler = () =>{
        console.log(this.state);
    }
    
    
    render() {
        return (
            <div>
               <div>Name: Shalini</div>
              <div>Age: 12 of </div> 
              <button type="button" onClick={this.buttonClickHandler}>click</button>
              <input type="text" name="fname"/>

            </div>
        )
    }
}

export default Newperson
