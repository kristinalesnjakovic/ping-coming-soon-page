var emailAddress = document.querySelector("input");
var submitButton = document.querySelector("button");

submitButton.addEventListener("click", function() {

    var email = emailAddress.value;

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    if (email == "" || validateEmail(email) == false) {
        document.querySelector(".main-container").classList.add("invalid");
        document.querySelector(".main-container").classList.remove("valid");
    } else {
        document.querySelector(".main-container").classList.remove("invalid");
        document.querySelector(".main-container").classList.add("valid");
    }
});