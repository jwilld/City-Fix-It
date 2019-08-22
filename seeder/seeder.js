const axios = require('axios')

const url = 'https://city-fix-it.herokuapp.com/tickets/create'


for(i=0; i < 100 ; i++){
    let priorityChoice
    if(i%2 === 0){
        priorityChoice = 'Urgent'
        axios.post(url,{
            address:{
                street: '111 Washington St',
                apartment: '5',
                city: 'washington',
                state: 'dc'
            },
            type: 'damage',
            description:' broken hydrant',
            priority: priorityChoice
        
        } )

    }else{
        priorityChoice = 'Routine'
        axios.post(url, {
            address:{
                street: '112 Washington St',
                apartment: '20',
                city: 'washington',
                state: 'dc'
            },
            type: 'damage',
            description:' destroyed road',
            priority: priorityChoice
        })
        
    }

}
