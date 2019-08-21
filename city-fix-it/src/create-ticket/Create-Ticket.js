import React, { Component } from "react";
import "./create-ticket.css";
import axios from 'axios'


class CreateTicket extends Component {
  constructor(){
    super()
    this.state = {
      Address:'',
      Type:'',
      Priority:'',
      Description:'',
      Status:'',
    }
  }
  
  createTicket = event => {
    event.preventDefault()
    let form = new FormData(event.target)
    let newTicket = {}
    let keys = Object.keys(this.state)
    keys.forEach(key => (newTicket[key] = form.get(key)));
    console.log(newTicket)
    const url = 'https://city-fix-it.herokuapp.com/tickets'
    axios.post(url).then(response =>{
      console.log(response.data)
    })
  }


  render() {
    let keys = Object.keys(this.state)

    let headers = ['Address','Type','Priority','Description','Status']
    let createForm = headers.map(name =>(
      <div>
        <span>{name}</span>
        <input type="text" name={name}/>
      </div>
    ))
    return (
      <div className="create-form" onSubmit={this.createTicket}>
        <form className="form">
        <div className='form-label'>
          <label >Create Ticket</label>
        </div>
        <div>
          {createForm}
          <input type="submit" value="submit"/>
        </div>
        
        </form>
      </div>
    );
  }
}
export default CreateTicket;
