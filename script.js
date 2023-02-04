console.log('hello world');


const test = function(){
    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/tehran?unitGroup=metric&include=current&key=6BWV8R97HT8YYDU9CMJMLNDST&contentType=json')
.then((res)=>res.json())
.then (data=>console.log(data))
}

test()