document.querySelector(".button-left").addEventListener("click", left);
document.querySelector(".button-right").addEventListener("click", right);
counter = 0;
function left(params) {
  if (counter === 0) {
    document.querySelector(
      ".comment"
    ).innerHTML = `“ If you want to lay the best foundation possible I’d recommend taking
this course. The depth the instructors go into is incredible. I now feel
so confident about starting up as a professional developer. ”`;
    document.querySelector(".person-span").innerHTML = "John Tarkpor";
    document.querySelector(".person").innerHTML =
      "&nbsp;Junior Front-end Developer";
    counter = 1;
  } else if (counter === 0) {
    document.querySelector(
      ".comment"
    ).innerHTML = `“ I’ve been interested in coding for a while but never taken the jump,
        until now. I couldn’t recommend this course enough. I’m now in the job
        of my dreams and so excited about the future. ”`;
    document.getElementById("image").src = "./images/image-tanya.jpg";
    document.querySelector(".person-span").innerHTML = "Tanya Sinclair";
    document.querySelector(".person").innerHTML = "&nbsp;UX Engineer";
    counter = 0;
  }

  document.getElementById("image").src = "./images/image-john.jpg";
}
function right(params) {
  if (counter === 0) {
    document.querySelector(
      ".comment"
    ).innerHTML = `“ If you want to lay the best foundation possible I’d recommend taking
  this course. The depth the instructors go into is incredible. I now feel
  so confident about starting up as a professional developer. ”`;
    document.querySelector(".person-span").innerHTML = "John Tarkpor";
    document.querySelector(".person").innerHTML =
      "&nbsp;Junior Front-end Developer";
    counter = 1;
  } else if (counter === 1)
    document.querySelector(
      ".comment"
    ).innerHTML = `“ I’ve been interested in coding for a while but never taken the jump,
  until now. I couldn’t recommend this course enough. I’m now in the job
  of my dreams and so excited about the future. ”`;
  document.getElementById("image").src = "./images/image-tanya.jpg";
  document.querySelector(".person-span").innerHTML = "Tanya Sinclair";
  document.querySelector(".person").innerHTML = "&nbsp;UX Engineer";
  counter = 0;
}
console.log("2");
