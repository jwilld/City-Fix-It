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
        default: 
            return state;
    }

}

export default asyncReducer;