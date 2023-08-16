// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener("click", function(){
    // console.log("login button is clicked")

    // step-2:get the email address inside the email input field
   const emailField= document.getElementById('user-email');
   const email=emailField.value;
//    console.log(email)

//    step-3:get password
    //3.a set id on the html element
    // 3.b get the element
    // 3.c get the value from the element
    const passwordField=document.getElementById("user-password");
    const password=passwordField.value
    // console.log(email,password)
    //Danger: Donot varify email or password on the client site
    if(email==="royhoridas64@gmail.com" && password==="1234"){
        // console.log("valid User")
        window.location.href="bank.html";
    }
    else{
        // console.log("Invalid User")
        alert("Invalid User or Wrong password");
    }
})