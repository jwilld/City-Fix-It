const axios = require('axios')

const url = 'https://city-fix-it.herokuapp.com/tickets/create'




for(i=0; i < 50 ; i++){
    let priorityChoice
    if(i%2 === 0){
        priorityChoice = 'Routines'
        axios.post(url,{
            address:`5${i} Orange Ct, Washington DC 20003`,
            type: 'Damage',
            description:' Big crack in the road',
            priority: priorityChoice
        
        } )
        .catch(e => console.log(e))

    }else{
        priorityChoice = 'Routine'
        axios.post(url, {
            address:`4${i} Pink Way, Washington DC 20001`,
            type: 'Repair',
            description:' There is a massive leek',
            priority: priorityChoice
        }).catch(e => console.log(e))
        
    }

}
