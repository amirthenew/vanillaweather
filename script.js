let locationTag = document.querySelector('.location')
let tempTag = document.querySelector('.temp')
let conditionTag = document.querySelector('.condition')
let iconTag = document.querySelector('.icon')
let londonTag = document.querySelector('.london')
let theranTag = document.querySelector('.tehran')


let apiTehran = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/tehran?unitGroup=metric&key=6BWV8R97HT8YYDU9CMJMLNDST&contentType=json'
let apiLondon = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?unitGroup=metric&key=6BWV8R97HT8YYDU9CMJMLNDST&contentType=json'



const showLondon = function(){

    fetch(apiLondon)
    .then((res)=>res.json())
.then (
    (data)=>{
        console.log(data)
        let location = data.resolvedAddress
        let temp = data.currentConditions.temp
        let condition = data.currentConditions.conditions
        let icon = data.currentConditions.icon
        locationTag.innerHTML = location
        tempTag.innerHTML = temp
        conditionTag.innerHTML = condition
        iconTag.innerHTML = icon

        console.log(location);
        console.log(temp);
        console.log(condition);
    
    
    }
    
    )
}

const showTehran = function(){
    fetch(apiTehran)
.then((res)=>res.json())
.then (
    (data)=>{
        console.log(data)
        let location = data.resolvedAddress
        let temp = data.currentConditions.temp
        let condition = data.currentConditions.conditions
        let icon = data.currentConditions.icon
        locationTag.innerHTML = location
        tempTag.innerHTML = temp
        conditionTag.innerHTML = condition
        iconTag.innerHTML = icon

        console.log(location);
        console.log(temp);
        console.log(condition);
    
    
    }
    
    )

}
londonTag.addEventListener('click',showLondon)
theranTag.addEventListener('click',showTehran)