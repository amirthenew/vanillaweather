let locationTag = document.querySelector('.location')
let tempTag = document.querySelector('.temp')
let conditionTag = document.querySelector('.condition')

const URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/tehran?unitGroup=metric&include=current%2Cdays&key=6BWV8R97HT8YYDU9CMJMLNDST&contentType=json'
const test = function(){
    fetch(URL)
.then((res)=>res.json())
.then (
    (data)=>{
        console.log(data)
        let location = data.resolvedAddress
        let temp = data.currentConditions.temp
        let condition = data.currentConditions.conditions
        locationTag.innerHTML = location
        tempTag.innerHTML = temp
        conditionTag.innerHTML = condition

        console.log(location);
        console.log(temp);
        console.log(condition);
    
    
    }
    
    )

}

test()