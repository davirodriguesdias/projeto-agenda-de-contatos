
const divname = document.body.querySelector("#divname")
const divnumber = document.body.querySelector("#divnumber")
const userimg = document.body.querySelector("#userimage")

profile = sessionStorage.getItem("userimg")

const params = new URLSearchParams(window.location.search);
const username = params.get("user");
const usernumber = params.get("phone");

divname.innerHTML = username
divnumber.innerHTML = usernumber


if(!profile) {
    userimg.src = "../images/default_user_image.png"
    }
else {
    userimg.src = profile
}