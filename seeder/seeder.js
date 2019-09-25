const axios = require('axios')

const url = 'https://city-fix-it.herokuapp.com/tickets/create'



for(i=0; i < 50 ; i++){
    let priorityChoice
    if(i%2 === 0){
        priorityChoice = 'Urgent'
        axios.post(url,{
            address:`5${i} Grey Rd, Washington DC 20008`,
            type: 'Damage',
            description:' Big crack in the road',
            priority: priorityChoice
        
        } )
        .catch(e => console.log(e))

    }else{
        priorityChoice = 'Routine'
        axios.post(url, {
            address:`4${i} Red Ln, Washington DC 20005`,
            type: 'Repair',
            description:' There is a massive leek',
            priority: priorityChoice
        }).catch(e => console.log(e))
        
    }

}
