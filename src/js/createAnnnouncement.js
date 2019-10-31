import $ from 'jquery';


export const createAjaxPost = () => {
            //Using ES6 arrow function
            var inputTitle = $("#inputTitle").val(),
            inputDescription = $("#inputDescription").val(),
            inputCategory = $("#inputCategory").val();
            var element =
                {
                    "title": inputTitle,
                    "description": inputDescription,
                    "price": 24.98,
                    "photo": null,
                    "datePub": "2019-01-25 8:32:12",
                    "status": true,
                    "nbrViews": 2,
                    "location": "Paris 9iÃ¨me",
                    "category": {
                        "id": 1,
                        "categoryName": inputCategory,
                        "categoryDescription": "VÃªtement lÃ©ger souvent mis lÃ©tÃ©."
                    },
                    "user": {
                        "id": 1,
                        "mail": "johnyPirate@Cara.com",
                        "firstName": "Pirate",
                        "name": "CaraÃ¯bes",
                        "role": {
                            "roleName": "CLIENT"
                        },
                        "pseudo": "Johny",
                        "password": "unmotdepassedepirate",
                        "phoneNumber": "1563214560",
                        "address": "Entre latlantic et le pacific."
                    }
                }


            fetch('http://localhost:8080/announcement/add',
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
                });
        }

