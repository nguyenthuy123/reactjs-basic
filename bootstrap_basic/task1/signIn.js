function validateForm() {
    let mess1 = document.getElementById("validate-name")
    let mess2 = document.getElementById("validate-lastname")
    let mess3 = document.getElementById("validate-email")
    let mess4 = document.getElementById("validate-pass")
    let a = document.forms["myForm"]["firstname"].value;
    let b = document.forms["myForm"]["lastname"].value;
    let x = document.forms["myForm"]["email"].value;
    let y = document.forms["myForm"]["password"].value;


    const email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if (a === "") {
        mess1.innerText = "Firstname is required"
        return false;
    } 
    else if (b === "") {
        mess2.innerText = "Lastname is required"
        return false;
    }
    else if (!email.test(x) || x === "") {
        mess3.innerText = "Email is required"
        return false;
    }
    else if (!password.test(y) || y === "") {
        mess4.innerText = "Password is required"
        return false;
    } 
        return true;
}

