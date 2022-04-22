const username = document.getElementById("name").value;
const lastName = document.getElementById("lastname").value;
const contacts = document.getElementById("contact").value;
const email = document.getElementById("email").value;
const address = document.getElementById("address").value;
const password = document.getElementById("password").value;


const submitButton = document.getElementById("submit-button")

submitButton.addEventListener("click",()=>{
    insertCustomerAPI()
    console.log("Event called!!")
})

console.log(typeof(contact), typeof(lastName) )

console.log({
    "name" : username,
    "lastName" : lastName,
    "contacts" :contacts,
    "email" : email,
    "address" : address,
    "password" : password
})
const insertCustomerAPI = () => {
    fetch('http://localhost:3000/addCustomers', {
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