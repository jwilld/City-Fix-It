const axios = require('axios')

const url = 'https://city-fix-it.herokuapp.com/tickets/create'



for(i=0; i < 50 ; i++){
    let priorityChoice
    if(i%2 === 0){
        priorityChoice = 'Urgent'
        axios.post(url,{
            address:`53${i} Red Rd, Washington DC 20008`,
            type: 'damage',
            description:' broken hydrant',
            priority: priorityChoice
        
        } )
        .catch(e => console.log(e))

    }else{
        priorityChoice = 'Routine'
        axios.post(url, {
            address:`54${i} Green Ln, Washington DC 20005`,
            type: 'repair',
            description:' destroyed road',
            priority: priorityChoice
        }).catch(e => console.log(e))
        
    }

}
