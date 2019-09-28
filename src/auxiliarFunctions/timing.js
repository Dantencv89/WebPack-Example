
let showTime=function (){
     setInterval(function(){
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        document.getElementById('timeId').innerText=time;
        
     },1000)
}


export {showTime};