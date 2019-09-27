const initialState = {
    isDeleting: false,
    isDeleted: false,
    isDeletedError: false,
    isUpdating: false,
    isUpdated: false,
    isUpdatedError: false,
    isGetting: false,
    isGot: false,
    isGetError: false,
    isNewTicket: false,
    isNewTicketSuccess: false,
    isNewTicketError: false,
    isAdmin: false,
    isUser:false,
    tickets: [
        {
            address: "Loading ... ",
            priority: "Loading ... ",
            type: "Loading ... ",
            _id: "Loading ... ",
            description:"Loading ..."

        }
    ],
    currentTickets: ""
}

const asyncReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DELETE_TICKET":{
            return Object.assign({}, state, {
                isDeleting: true
            })
        }
        case "DELETE_FINISHED":{
            return Object.assign({}, state, {
                isDeleted: true,
            })
        }
        case "DELETE_ERROR":{
            return Object.assign({}, state, {
                isDeletedError: true 
            })
        }
        case "GOT_TICKETS":{
            return Object.assign({}, state, {
                tickets: action.tickets
            } )
        }
        case "SET_TICKETS":{
            return Object.assign({}, state, {
                currentTickets: action.search
            })
        }
        case "NEW_TICKET":{
            return Object.assign({}, state, {
                isNewTicket: true,
                isNewTicketError: false,
                isNewTicketSuccess: false
                
            } )
        }
        case "TICKET_SUCCESS":{
            return Object.assign({}, state, {
                isNewTicket: false,
                isNewTicketSuccess: true,
                isNewTicketError: false
            } )
        }
        case "TICKET_ERROR":{
            return Object.assign({}, state, {
                isNewTicket: false,
                isNewTicketSuccess: false,
                isNewTicketError: true  
            } )
        }
        case "IS_ADMIN":{
            return Object.assign({}, state, {
                isAdmin:true,
                isUser: false
            })
        }
        case "IS_USER":{
            return Object.assign({}, state, {
                isAdmin:false,
                isUser: true
            })
        }
        default: 
            return state;
    }

}

export default asyncReducer;