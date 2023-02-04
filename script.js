console.log('hello world');


const URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/tehran?unitGroup=metric&include=current&key=6BWV8R97HT8YYDU9CMJMLNDST&contentType=json'
const test = function(){
    fetch(URL)
.then((res)=>res.json())
.then (data=>console.log(data))

let city = data.resolvedAddress

}

test()