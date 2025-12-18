   
//     const yourname = document.body.querySelector("#name")
//     const yourphone = document.body.querySelector("#tel")
//     const youremail = document.body.querySelector("#email")
//     const youraddres = document.body.querySelector("#addres")
const file = document.body.querySelector("#imginput")
const form = document.body.querySelector("#formuser")
const imagedefault = document.body.querySelector("#imgdefault")

file.addEventListener("change", function(){
    const reader = new FileReader()

    if(!file.files[0]){
        return
    }
    
    reader.onload = function(){
        imagedefault.src = reader.result
    }
    reader.readAsDataURL(file.files[0])
})

form.addEventListener("submit", function(e) {
    e.preventDefault()
// file.files[0] == null
    if(!file.files[0]){
        form.submit()
        return;
    }


    const reader = new FileReader();
    reader.onload = function() {
    sessionStorage.setItem("userimg", reader.result);
    form.submit()
    };

reader.readAsDataURL(file.files[0]);



});
//     // sessionStorage.setItem("numberuser", yourphone.value)

// esta é outra forma de usar os dados

