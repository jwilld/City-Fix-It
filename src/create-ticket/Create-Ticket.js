import React, { Component } from "react";
import "./create-ticket.css";
import axios from 'axios'


class CreateTicket extends Component {
  constructor(){
    super()
    this.state = {
      type:'',
      priority:'',
      description:'',
      status:'Pending'
    }
  }
  
  createTicket = event => {
    event.preventDefault()
    let form = new FormData(event.target)
    let newTicket = {}
    let keys = Object.keys(this.state)
    keys.forEach(key => (newTicket[key] = form.get(key)))
    console.log(newTicket)
    const url = 'https://city-fix-it.herokuapp.com/tickets/create'
    axios.post(url, newTicket)
    .then( response => console.log(response))
  }


  render() {
    let keys = Object.keys(this.state)

    let headers = ['Address','Type','Priority','Description']
    let createForm = headers.map(name =>(
      name === 'Description' ?
      <div>
        <span>{name}</span>
        <textarea  className= 'textarea-box input ' type="text" name={name}></textarea>
      </div>
      :
      <div>
        <span>{name}</span>
        <input  className= 'input'type="text" name={name}/>
      </div>
    ))
    return (
      <div className="create-form" onSubmit={this.createTicket}>
        <form className="form">
        <div className='form-label'>
          <label >Create Ticket</label>
        </div>
        <div className= 'form-inputs'>
          {createForm}
          <input className='form-submit'type="submit" value="submit"/>
        </div>
        
        </form>
      </div>
    );
  }
}
export default CreateTicket;
