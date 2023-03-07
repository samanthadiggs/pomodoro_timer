let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');

let workTime = 45;
let breakTime = 10;
let seconds = '00'
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;
    workTitle.classList.add('active');

} 
function start() {
    seconds = 59;
    let workMinutes = workTime - 1;
    let breakMinutes =  breakTime - 1;
    breakCount = 0;

    let timerFunction = () => {
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        seconds = seconds - 1;
    }
    setInterval(timerFunction, 1000);
}
