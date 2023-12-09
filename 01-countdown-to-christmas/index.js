const countdownDisplay = document.querySelector("#countdown-display")

function renderCountdown(){
    let christmas = 24
    // Task:
    // - Get today's date (you only need the day):
    let today = new Date();
    // - Calculate remaining days:
    let difference = christmas - today.getDate();
    // - Display remaining days in countdownDisplay:
    countdownDisplay.textContent = difference;
}
 
renderCountdown()

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.