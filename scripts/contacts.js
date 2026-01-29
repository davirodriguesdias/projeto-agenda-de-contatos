

const divname = document.body.querySelector(".divname")
const divnumber = document.body.querySelector(".divnumber")
const userimg = document.body.querySelector("#userimage")
const addcontact = document.body.querySelector("#add")

const conteinerContacts = document.body.querySelector("#contactsConteiner")

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

function createContact() {
    //aqui ficara o codigo de criar contato para fins de organização de codigo
}

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

            <label for="contactNameInput">Name<input id="contactNameInput" class="configinput" type="text" name="" id="" required></label>
            <label for="">Addres<input class="configinput" type="text" name="" id="" required></label>
            <label for="">Email<input class="configinput" type="email" name="" id="" required></label>
            <label for="contactPhoneInput">Phone<input id="contactPhoneInput" class="configinput" type="tel" name="" id="" required></label>
            <input id="inputsave" type="submit" value="Save">

        </div>

    </form>
    
    `

    modalback.appendChild(modal)

    const formcontact = document.body.querySelector("#formaddcontact");

    formcontact.addEventListener("submit", e => {
    e.preventDefault();

    let contactNameInput = document.body.querySelector("#contactNameInput").value
    let contactPhoneInput = document.body.querySelector("#contactPhoneInput").value

    let contactAdd = document.createElement("a")
    contactAdd.classList.add("contacts")

    let contactImgAdd = document.createElement("img")
    contactImgAdd.classList.add("contactimg")
    contactImgAdd.src="../images/default_user_image.png"

    let contactInfos = document.createElement("div")
    contactInfos.classList.add("infos")

    let contactName = document.createElement("div")
    contactName.classList.add("divname")
    contactName.textContent = contactNameInput

    let contactPhone = document.createElement("div")
    contactPhone.classList.add("divnumber")
    contactPhone.textContent = contactPhoneInput

    conteinerContacts.appendChild(contactAdd) 
    contactAdd.appendChild(contactImgAdd)
    contactAdd.appendChild(contactInfos)
    contactInfos.appendChild(contactName)
    contactInfos.appendChild(contactPhone)

    modalback.style.display = "none"

    // contactsCreate();



})

});




