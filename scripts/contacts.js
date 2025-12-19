

const divname = document.body.querySelector("#divname")
const divnumber = document.body.querySelector("#divnumber")
const userimg = document.body.querySelector("#userimage")
const addcontact = document.body.querySelector("#add")

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

addcontact.addEventListener("click", function(){
    // title = document.createElement("h2")
    // title = document.createElement("img")
    // uploadimg = document.createElement("input")
    // nameinput = document.createElement("input")
    // addresinput = document.createElement("input")
    // emailinput = document.createElement("input")
    // datainput = document.createElement("input")
    // submitinput = document.createElement("input")
    // form = document.createElement("form")
    const modalback = document.createElement("div") //fundo do modal
    modalback.classList.add("modalback")
    modal = document.createElement("div") //modal
    modal.classList.add("modal")
    document.body.appendChild(modalback)
    modalback.appendChild(modal)

})