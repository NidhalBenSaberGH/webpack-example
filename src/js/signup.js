import $ from 'jquery';

export const signupAjaxPost = () => {
        //Using ES6 arrow function
        var inputFirstName = $("#inputFirstName").val(),
            inputName = $("#inputName").val(),
            inputPseudo = $("#inputPseudo").val(),
            inputEmail = $("#inputEmail").val(),
            inputAddress = $("#inputAddress").val(),
            inputPhone = $("#inputPhone").val(),
            inputPassword = $("#inputPassword").val();
        var element =
            {
                "mail": inputEmail,
                "firstName": inputFirstName,
                "name": inputName,
                "role": {
                    "id": 1,
                    "roleName": "CLIENT"
                },
                "pseudo": inputPseudo,
                "password": inputPassword,
                "phoneNumber": inputPhone,
                "address": inputAddress
            }

        fetch('http://localhost:8080/signup',
            {
                headers:
                    {"Content-Type": "application/json; charset=utf-8"},
                method:
                    'POST',
                body:
                    JSON.stringify(element)
            })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data);
                window.location.href = location.hostname+":8081/signin.html";
            });
    }

/*
function validatePassword() {
    if ($(inputPassword).val() != $(inputConfirmPassword).val()) {
        $(inputConfirmPassword).val().setCustomValidity("Passwords Don't Match");
    } else {
        $(inputConfirmPassword).val().setCustomValidity('');
    }
    */



