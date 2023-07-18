const body = document.body;
const div = document.div;
const spanDay = document.querySelector("#day");
const spanNight = document.querySelector("#night");

let myBoolean = false;

const myButton = document.querySelector("#myButton");
myButton.addEventListener("click", () => {
  myBoolean = !myBoolean;
  if (myBoolean) {
    spanDay.classList.toggle("display");
    spanNight.classList.toggle("display");
    myButton.classList.remove("light");
    myButton.classList.add("dark");
    body.classList.remove("day");
    body.classList.add("night");
  } else {
    spanDay.classList.toggle("display");
    spanNight.classList.toggle("display");
    myButton.classList.remove("dark");
    myButton.classList.add("light");
    body.classList.remove("night");
    body.classList.add("day");
  }
});
