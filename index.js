setInterval(setClock,1000);

const hourHand=document.getElementById('hour');
const minuteHand=document.getElementById("minute");
const secondHand=document.getElementById("second");

function setClock(){
    const currentDate= new Date();
    const secondRatio=currentDate.getSeconds()/60;
    const minuteRatio=(secondRatio+currentDate.getMinutes())/60;
    const hourRatio=(minuteRatio + currentDate.getHours())/12;
    setRotation(secondHand,secondRatio);
    setRotation(minuteHand,minuteRatio);
    setRotation(hourHand,hourRatio);
    console.log(currentDate);
}
function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio * 360);
}