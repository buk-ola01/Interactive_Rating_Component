const span = document.getElementById("rate");
const inputRadio = document.querySelectorAll(".rating");
const submitBtn = document.getElementById("submit_btn");
const ratingPage = document.getElementById("rating-page");
const thankYouPage = document.getElementById("thank-you-page");
const Body = document.body;
//Show input in thank you page
inputRadio.forEach((item) => {
     item.addEventListener("click", function (e) {
          switch (e.target.id) {
               case "one":
                    span.innerHTML = "1";
                    break;
               case "two":
                    span.innerHTML = "2";
                    break;
               case "three":
                    span.innerHTML = "3";
                    break;
               case "four":
                    span.innerHTML = "4";
                    break;
               case "five":
                    span.innerHTML = "5";
                    break;
          }
     });
});

//function to change state
function changePage() {
     ratingPage.style.visibility = "hidden";
     thankYouPage.style.visibility = "visible";
     Body.style.flexDirection = "column-reverse";
}

//function to check if input is empty
function checkFunc() {
     if (
          document.querySelectorAll('input[type="radio"]:checked').length === 0
     ) {
          alert("Please enter a value");
     } else {
          changePage();
     }
}

//Applying function to submit button
submitBtn.addEventListener("click", function () {
     checkFunc();
});

function centerDiv(div) {
     const divWidth = div.offsetWidth;
     const divHeight = div.offsetHeight;

     const screenWidth = window.innerWidth;

     const screenHeight = window.innerHeight;

     const top = (screenHeight - divHeight) / 2;
     const left = (screenWidth - divWidth) / 2;

     div.style.left = `${left}px`;
     div.style.top = `${top}px`;
}

window.addEventListener("resize", centerDiv(thankYouPage));
window.addEventListener("load", centerDiv(thankYouPage));
