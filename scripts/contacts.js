
const divname = document.body.querySelector("#divname")
const divnumber = document.body.querySelector("#divnumber")

// divname.innerHTML = sessionStorage.getItem("username")
// divnumber.innerHTML = sessionStorage.getItem("numberuser")

const params = new URLSearchParams(window.location.search);
const username = params.get("user");
const usernumber = params.get("phone");

divname.innerHTML = username
divnumber.innerHTML = usernumber