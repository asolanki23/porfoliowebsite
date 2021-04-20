
//javascript for navigation bar effect on scroll

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
  });

  //javascript for responsive navigation sidebar menu
  var menu = document.querySelector('.menu');
  var menuBtn = document.querySelector('.menu-btn');
  var closeBtn = document.querySelector('.close-btn');

  menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
  });



  // Typing Text Animation //

  const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Photoshop Artist", "Photographer", "Web Developer"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

// Types a character then pauses for typing delay, before erasing

function type() {
  if (charIndex < textArray[textArrayIndex].length) { 
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex); 
    charIndex++;  // increase character by one
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

// Removes a character form the strings which creates the erasing function

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250); 
});

//=========================================== Percentage Progress Cards =========================================== //

// On page load the number character increases to its given number vlaue
// Progress bar increases to its given percentage value 

let options = {
  startAngle: -1.55,
  size: 150,
  value: 0.85,
  fill: { gradient: ["#0099ff", "#005f9e"] },
};
$(".circle .bar")
  .circleProgress(options)
  .on("circle-animation-progress", function (event, progress, stepValue) {
    $(this)
      .parent()
      .find("span")
      .text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
$(".js .bar").circleProgress({
  value: 0.5,
});
$(".photoshop .bar").circleProgress({
  value: 0.9,
});


//=========================================== Contact Form =========================================== //

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add('success');
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add('error');
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}