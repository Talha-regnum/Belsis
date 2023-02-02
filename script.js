$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() >50);
});
let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= 100) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
