import React, { Component } from "react";
import { connect } from 'react-redux'
import { create_ticket } from '../actions/actions'
import "./create-ticket.css";


class CreateTicket extends Component {
  constructor(){
    super()
    this.state = {
      address:'',
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
    this.props.dispatch(create_ticket(newTicket))

  }


  render() {
    let headers = ['Address','Type','Priority','Description']
    let createForm = headers.map((name,i)=>(
      name === 'Description' ?
      <div key={i}>
        <span>{name}</span>
        <textarea  className= 'textarea-box input ' type="text" name={name.toLowerCase()}></textarea>
      </div>
      :
      <div key={i}>
        <span >{name}</span>
        <input className= 'input'type="text" name={name.toLowerCase()}/>
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
const mapStateToProps = state => {
  return {
    data: state
  };
};
export default connect(mapStateToProps)(CreateTicket)
