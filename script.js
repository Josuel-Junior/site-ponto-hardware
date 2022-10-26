let show = true;
const menuSection = document.querySelector(".header-bottom");
const menuToggle = menuSection.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
 document.body.style.overflow = show == true ?  "hidden" : "initial";
 
  menuSection.classList.toggle("on", show)
  show = !show;
})


function startTimer(duration) {

  var timer = duration, minutes, seconds;

  setInterval(function () {

    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10)
  
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.querySelector("#seconds").textContent = seconds;
    document.querySelector("#minuts").textContent = minutes;

    if (--timer < 0) {
      timer = duration;
    }

  }, 1000);
}

window.onload = function () {
  var duration = 60 * 49;
  startTimer(duration)
}
