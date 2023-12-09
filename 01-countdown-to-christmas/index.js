const countdownDisplay = document.querySelector("#countdown-display");
const countdownDisplayFull = document.querySelector("#countdown-display-full");
const countdownDisplayNewYear = document.querySelector("#countdown-display-new-year");

const renderCountdown = () => {
    let christmas = 24
    // Task:
    // - Get today's date (you only need the day):
    let today = new Date();
    // - Calculate remaining days:
    let difference = christmas - today.getDate();
    // - Display remaining days in countdownDisplay:
    countdownDisplay.textContent = difference;
}
 
renderCountdown();

// Stretch goals:
// - Display hours, minutes, seconds.
function renderCountdownFull(){
  let christmas = new Date("Dec 23, 2023 23:59:59").getTime();

  setInterval(() => {
    let now = new Date().getTime();
    let difference = christmas - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const formatNumber = (number) => {
      return number < 10 ? `0${number}` : number;
    }

    days = formatNumber(days);
    hours = formatNumber(hours);
    minutes = formatNumber(minutes);
    seconds = formatNumber(seconds);


    countdownDisplayFull.textContent =  `${days} : ${hours} : ${minutes} : ${seconds}`;
    
  }, 1000);

}

renderCountdownFull();

// - Add a countdown for another festival - New Year:
function renderCountdownNewYear(){
  let newYear = new Date("Dec 31, 2023 23:59:59").getTime();

  setInterval(() => {
    let now = new Date().getTime();
    let difference = newYear - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const formatNumber = (number) => {
      return number < 10 ? `0${number}` : number;
    }

    days = formatNumber(days);
    hours = formatNumber(hours);
    minutes = formatNumber(minutes);
    seconds = formatNumber(seconds);


    countdownDisplayNewYear.textContent =  `${days} : ${hours} : ${minutes} : ${seconds}`;
    
  }, 1000);

}

renderCountdownNewYear();
