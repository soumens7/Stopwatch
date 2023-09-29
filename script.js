// Assigning the initial values of milliseconds, seconds, minutes, and hour using an array
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
// created variable displayTime to store value in local variable
let displayTime = document.getElementById("displayTime");
// it shows that no interval is present or started
let timer = null;

// created a function for the StopWatch
function stopWatch() {
  milliseconds += 10; // increase milliseconds by 10 after each encounter
  if (milliseconds == 1000) {
    //when milliseconds reach to 1000, it will go to 00 and increase the seconds by 1
    milliseconds = 0o0;
    seconds++;
    if (seconds == 60) {
      //when seconds counter reaches 60, it will change the value to 0 and increase minutes by 1
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        //when the minutes counter reaches 60, it will change the value to 0 and increase hours by 1
        minutes = 0;
        hours++;
      }
    }
  }

  // if hour is less than 10 add a 0 prior to hours and store it in a local variable for future use
  let h = hours < 10 ? "0" + hours : hours;
  // if minutes is less than 10 add a 0 prior to minutes and store it in a local variable for future use
  let m = minutes < 10 ? "0" + minutes : minutes;
  // if seconds is less than 10 add a 0 prior to seconds and store it in a local variable for future use
  let s = seconds < 10 ? "0" + seconds : seconds;
  // if milliseconds are less than 10 add a 0 prior to milliseconds and store it in a local variable for future use
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  // display the latest time
  displayTime.innerHTML = h + ":" + m + ":" + s + "." + ms;
}

// created a function to start the StopWatch
function watchStart() {
  // if any ongoing interval is present (or running) stop it and then restart it
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 10);
}

// created a function to stop the StopWatch
function watchStop() {
  //Clear the previous interval
  clearInterval(timer);
}

// create a function to reset the StopWatch
function watchReset() {
  clearInterval(timer);
  //Clear the previous interval and assign the default values to the timer
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  displayTime.innerHTML = "00:00:00.000";
}
