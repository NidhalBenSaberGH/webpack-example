import $ from 'jquery';

    export const signinAjaxPost = () => {

            //Using ES6 arrow function
            var inputEmail = $("#inputEmail").val(),
                inputPassword = $("#inputPassword").val();
            var element =
                {
                    "mail": inputEmail,
                    "password": inputPassword
                }

            fetch('http://localhost:8080/signin',
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
                    $("#success").html(data.message).addClass("alert alert-success");
                    window.setTimeout(function() {
                        $(location).attr('href', hostname+'":8081/index.html');
                    }, 2000);


                });
        }


