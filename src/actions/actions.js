import axios from 'axios'
import store from '../store/store'

export const set_tickets = param => {
    return {
        type: "SET_TICKETS",
        search: param
        
    }
}
export const delete_start = () => {
    return {
        type: "DELETE_TICKET"
    }
}

export const delete_finished = () => {
    return {
        type: "DELETE_FINISHED"
    }
}

export const delete_error = () => {
    return {
        type: 'DELETE_ERROR'
    }
}


export const delete_ticket = ticket => {
    store.dispatch(delete_start());
    return function (dispatch, getState) {
        let url = 'https://city-fix-it.herokuapp.com/tickets/delete/'
        return axios.delete(url + ticket)
            .then(res => {
                dispatch(get_tickets())
            })
            .then(dispatch(get_tickets()))
            .catch(e => dispatch(delete_error()));
    }
};

export const update_start = () => {
    return {
        type: "UPDATE_START"
    }
}

export const update_finished = () => {
    return {
        type: "UPDATE_FINISHED"
    }
}

export const update_error = () => {
    return {
        type: "UPDATE_ERROR"
    }
}

export const update_ticket = (id, status) => {
    store.dispatch(update_start());
    return function (dispatch, getState) {
        let url = 'https://city-fix-it.herokuapp.com/tickets/'
        return axios.put(url + id, {
            status: status
        }).then(data => {
            dispatch(get_tickets())
        })
            .then(dispatch(update_finished()))
            .catch(e => dispatch(update_error()))
    }
}

export const start_tickets = () => {
    return {
        type: "GET_TICKETS"
    }
}

export const finish_tickets = res => {
    return {
        type: "GOT_TICKETS",
        tickets: res

    }
}

export const tickets_error = () => {
    return {
        type: "GET_TICKETS_ERROR"
    }
}

export const get_tickets = () => {
    store.dispatch(start_tickets())
    return function (dispatch, getState) {
        let url = "https://city-fix-it.herokuapp.com/tickets";
        axios.get(url)
            .then(response => { dispatch(finish_tickets(response.data)) })
            .catch(e => dispatch(tickets_error()))
    }

}


export const new_ticket = () => {
    return{
        type: "NEW_TICKET"
    }
}

export const new_ticket_success = () => {
    return {
        type: "TICKET_SUCCESSS"
    }
}

export const new_ticket_error = () => {
    return {
        type: "TICKET_ERROR"
    }
}


export const create_ticket = ticket => {
    store.dispatch(new_ticket())
    return function (dispatch,getState) {
        let url = 'https://city-fix-it.herokuapp.com/tickets/create'
        axios.post(url, ticket)
        .then( response => dispatch(new_ticket_success())
        )
        .catch(e => dispatch(new_ticket_error()))
    }
}
    
