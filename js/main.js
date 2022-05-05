

let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick= ()=>{
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
};

window.onscroll = ()=>{
    menu.classList.remove("move");
    navbar.classList.remove("open-menu");
}


   



//Email JS

function validate(){
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");
   

    sendBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        if(name.value=="" || email.value=="" || msg.value==""){
            emptyerror();
        }else{
            sendmail(name.value, email.value, msg.value);
            success();
            name.value="";
            email.value="";
            msg.value="";
        }
    })
}

validate();

function sendmail(name, email,msg) {
    emailjs.send("service_xcl9yri","template_aqoeoom",{
        from_name:email,
        to_name: name,
        message: msg,
        });


}

function emptyerror(){
    swal("Oh No...", "Fields cannot be empty", "error");
}

function success(){
    swal("Email send successfully", "I will try to reply as soon as possible", "success");
}

