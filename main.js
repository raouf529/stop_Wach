const play = document.querySelector("#play");
const stop_b = document.querySelector("#stop");
const  repeat = document.querySelector("#repeat");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
let interval = undefined;
play.addEventListener("click", (event)=>{
    event.preventDefault();
    interval = start_timer(hours, minutes, seconds);
});

repeat.addEventListener("click", (event)=>{
    event.preventDefault();
    if(interval){
        clearInterval(interval);
        reset_timer(hours, minutes, seconds);
        interval = start_timer(hours, minutes, seconds);
    }
});
stop_b.addEventListener("click", (event)=>{
    event.preventDefault();
    if(interval){
        clearInterval(interval);
    }
});
function start_timer(hours, minutes, seconds){
    let h = parseInt(hours.textContent), m = parseInt(minutes.textContent), s=parseInt(seconds.textContent);
    const interval = setInterval(() => {
        if(s<59){
            s++;
        }
        else{
            s=0;
            if(m<59){
                m++;
            }
            else{
                m=0;
                if(h<23){
                    h++;
                }
                else{
                    h=0;
                }
            }
        }
        hours.textContent = (h<10)?`0${h}`:h;
        minutes.textContent = (m<10)?`0${m}`:m;
        seconds.textContent = (s<10)?`0${s}`:s;
    }, 1000)
    return interval
}

function reset_timer(hours, minutes, seconds){
    clearInterval();
    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";
}