const username = document.getElementById("name");
const lastName = document.getElementById("lastname");
const contact = document.getElementById("contact");
const email = document.getElementById("email");
const password = document.getElementById("password");

console.log(username)


const insertCustomerAPI = () => {
    fetch('/', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer abcdxyz',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password,
        }),
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => console.log(data));
}