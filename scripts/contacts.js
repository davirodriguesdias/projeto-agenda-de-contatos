

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

let blobURLProfile = null

function createContact(namevalue, phonevalue) {


    //aqui ficara o codigo de criar contato para fins de organização de codigo
    let contactAdd = document.createElement("a")
    contactAdd.classList.add("contacts")

    let contactImgAdd = document.createElement("img")
    contactImgAdd.classList.add("contactimg")
    if(blobURLProfile) {
        contactImgAdd.src = blobURLProfile
    } else {
        contactImgAdd.src = "../images/default_user_image.png"
    }

    let contactInfos = document.createElement("div")
    contactInfos.classList.add("infos")

    let contactName = document.createElement("div")
    contactName.classList.add("divname")
    contactName.textContent = namevalue

    let contactPhone = document.createElement("div")
    contactPhone.classList.add("divnumber")
    contactPhone.textContent = phonevalue

    conteinerContacts.appendChild(contactAdd)
    contactAdd.appendChild(contactImgAdd)
    contactAdd.appendChild(contactInfos)
    contactInfos.appendChild(contactName)
    contactInfos.appendChild(contactPhone)
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

            <img id="imgcontact" src="../images/default_user_image.png" alt="">
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
    const uploadImg = document.body.querySelector("#uploadimg")
    const imgContact = document.body.querySelector("#imgcontact")
    let blobURL = null
    

    uploadImg.addEventListener("change", function () {

        if (!uploadImg.files[0]) {
            return
        }

        if (blobURL) {
            URL.revokeObjectURL(blobURL)
        }

        blobURL = URL.createObjectURL(uploadImg.files[0]);
        imgContact.src = blobURL

    })


    formcontact.addEventListener("submit", e => {
        e.preventDefault();

        if(uploadImg.files[0]) {
            blobURLProfile = URL.createObjectURL(uploadImg.files[0]);
            //ver uma forma melhor depois ou verificar se esta certo
        }

        if (blobURL) {
            URL.revokeObjectURL(blobURL)
            blobURL = null
        }


        let contactNameInput = document.body.querySelector("#contactNameInput").value
        let contactPhoneInput = document.body.querySelector("#contactPhoneInput").value

        modalback.style.display = "none"

        createContact(contactNameInput, contactPhoneInput);



    })

//permitir criar multiplos contatos
//entender por que fica branco ao criar outro contato
//aceitar somente imagens






});




