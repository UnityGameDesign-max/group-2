const username = document.getElementById("name").value;
const lastName = document.getElementById("lastname").value;
const contacts = document.getElementById("contact").value;
const email = document.getElementById("email").value;
const address = document.getElementById("address").value;
const password = document.getElementById("password").value;
const URL_OBJECT = require("../constants/URL")


const submitButton = document.getElementById("submit-button")

submitButton.addEventListener("click",()=>{
    insertCustomerAPI()
    console.log("Event called!!")
})

console.log(typeof(contact), typeof(lastName) )


const insertCustomerAPI = () => {
    fetch(URL_OBJECT.addCustomerEndPoint, {
        method: 'POST',
        headers: {"Accept": "application/json","Content-type": "application/json"},
        body: JSON.stringify({
            "name" : username,
            "lastName" : lastName,
            "contacts" :contacts,
            "email" : email,
            "address": address,
            "password" : password
        }),
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => console.log(data));
}