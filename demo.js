let hrs = 0;
let min = 0;
let sec = 0;
let hrsElement = document.querySelector(".hrs");
let minsElement = document.querySelector(".mins");
let secsElement = document.querySelector(".secs");

let startBtn = document.querySelector(".startbtn");
let pauseBtn = document.querySelector(".pausebtn");
let resetBtn = document.querySelector(".resetbtn");
let reverseBtn = document.querySelector(".reversebtn");

startBtn.addEventListener("click", () => {
  startTime();
  console.log("Start clicked");
});

pauseBtn.addEventListener("click", () => {
  clearTimeout(timeX);
  clearTimeout(timeXRev);
  console.log("pause clicked");
});

resetBtn.addEventListener("click", () => {
  hrs = 0;
  min = 0;
  sec = 0;
  hrsElement.innerHTML = hrs;
  minsElement.innerHTML = min;
  secsElement.innerHTML = sec;
  console.log("Reset clicked");
});

reverseBtn.addEventListener("click", () => {
  clearTimeout(timeX);
  reverseTimer();
});

function reverseTimer() {
  console.log(hrs + ":" + min + ":" + sec);
  timeXRev = setTimeout(function () {
    sec--;
    if (sec == -1 && min > 0) {
      sec = 59;
      min--;

      if (min == -1 && hrs > 0) {
        min = 59;
        hrs--;
      }
    }
    hrsElement.innerHTML = hrs;
    minsElement.innerHTML = min;
    secsElement.innerHTML = sec;
    reverseTimer();
    if (sec == 0 && min == 0 && hrs == 0) {
      clearTimeout(timeXRev);
    }
  }, 1000);
}

function startTime() {
  timeX = setTimeout(function () {
    sec++;
    if (sec > 59) {
      sec = 0;
      min++;
      if (min > 59) {
        min = 0;
        hrs++;
      }
    }
    hrsElement.innerHTML = hrs;
    minsElement.innerHTML = min;
    secsElement.innerHTML = sec;
    startTime();
  }, 1000);
}




