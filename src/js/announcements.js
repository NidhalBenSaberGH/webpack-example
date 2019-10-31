export const AjaxGet = () => {

    //Using ES6 arrow function

    fetch('http://localhost:8080/announcements')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            let result = "";
            let index = 0;
            data.forEach((announcement) => {
                index++;
                const {id, title, description, price} = announcement
                result +=
                    ` <tr id="${index}">
                            <th scope="row">${index}</th>
                            <td> ${id}</td>
                            <td>${title}</td>
                            <td>${description}</td>
                            <td>${price}</td>
                        </tr>`;
                document.getElementById('result').innerHTML = result;
            });
        })

};

