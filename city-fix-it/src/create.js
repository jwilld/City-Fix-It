// file for 'create a ticket' component 

// import React, { Component } from "react";

// class Create extends Component {
//     constructor() {
//         super()
//         this.state = {
//             keys: ["Address", "Type", "Priority", "Description", "Status"]
//             //going to need to fix line above...didn't add "referredTo" and not sure what to do with the subvalues?
//         };
//     }
//     handleSubmit = event => {
//         event.preventDefault();
//         const data = new FormData(event.target);
//         let newTicket = {};
//         this.state.keys.forEach(key => (newTicket[key] = data.get(key)));
//         this.props.ticketList.push(newTicket);
//         const jsonTicket = JSON.stringify(newTicket)
//         fetch("http://localhost:3000/tickets/create/", {
//             //make sure the path above is correct
//             method: "POST",
//             headers:{'Content-Type':'application/json'},
//             body: jsonTicket
//         }).then(res => res.json())
//     };
//     render() {
//         return (
//             <div className="create">
//                 <h2>Create Ticket</h2>
//                 <form className="createForm" onSubmit={this.handleSubmit}>
//                     <p>Address</p>
//                     <input className="createInput" type="text" name="address" />
//                     <p>Type</p>
//                     <input className="createInput" type="text" name="type" />
//                     <p>Priority</p>
//                     <input className="createInput" type="text" name="priority" />
//                     <p>Description</p>
//                     <input className="createInput" type="text" name="description" />
//                     <p>Status</p>
//                     <input className="createInput" type="text" name="status" />
//                     <input type="submit" value="submit" />
//                 </form>
//             </div>
//         )
//     }
// }

// export default Create;
// last chunk of code from 'render' section is basic layout for a form; 
// going to need to switch it eventually so it has drop down menu 
// with the subvalues instead of a textbox to input something