// get elements
let password1 = document.getElementById("password-first");
let password2 = document.getElementById("password-confirm");


function checkPassword(e){
    
    console.log("run");
    let passwordbordercolor;

    // check if passwords are equal
    if(e.target.value !== password1.value){
        passwordbordercolor = "red";
    }
    else{
        passwordbordercolor="green";
    }

    // change border color of confirm password field appropriately
    password2.style.border = `0.5px solid ${passwordbordercolor}`
}

password2.addEventListener("input",checkPassword);