

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


if (!profile) {
    userimg.src = "../images/default_user_image.png"
}
else {
    userimg.src = profile
}

//separar codigos em documentos diferentes

addcontact.addEventListener("click", function () {
    const modalback = document.createElement("div") //fundo do modal
    modalback.classList.add("modalback")
    modal = document.createElement("div") //modal
    modal.classList.add("modal")
    document.body.appendChild(modalback)

    modal.innerHTML = `
    <form id="formaddcontact" action="">

        <h2>Add Contact</h2>

        <div id="conteinerheader">

            <img src="../images/default_user_image.png" alt="">
            <label for="uploadimg">
                <span class="material-symbols-outlined">
                    upload
                </span>
                Upload
                <input id="uploadimg" type="file" name="" hidden>
            </label>

        </div>

        <div id="conteinermain">

            <label for="">Name<input class="configinput" type="text" name="" id="" required></label>
            <label for="">Addres<input class="configinput" type="text" name="" id="" required></label>
            <label for="">Email<input class="configinput" type="email" name="" id="" required></label>
            <label for="">Phone<input class="configinput" type="tel" name="" id="" required></label>
            <input id="inputsave" type="submit" value="Save">

        </div>

    </form>
    
    `

    modalback.appendChild(modal)

})