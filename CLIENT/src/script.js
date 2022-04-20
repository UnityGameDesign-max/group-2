

console.log(username)
const getAllProducts = () => {
    fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => CreateCard(data))
}
getAllProducts()



const CreateCard = (data) =>{ 
    console.log(data.length)
    data.map(item => {
       return `
            <article>
                <img src="" alt="">
                <p>${item.C}</p>
                <h3></h3>
                <h2></h2>
            </article>
        `
    })

    console.log(CreateCard())


    /*const para=document.createElement("p");
    const paraText=document.createTextNode(data[0].P[0])
    para.appendChild(paraText);
    document.getElementById("product").appendChild(para)
    document.body.appendChild(para)*/

    for(let i=0; i<data.length;i++){
        const productCard = document.createElement("article")
        const para = document.createElement("p")

        const paraText = document.createTextNode(data[i].C)
        para.appendChild(paraText);
        document.getElementById("product-section").appendChild(para)
        console.log(para);

    // console.log(data.length)

        for(let x=0; x<2;x++){
            const head3=document.createElement("h3");
            const head3Text=document.createTextNode(data[i].P[x])
            head3.appendChild(head3Text);
            document.getElementById("product-section").appendChild(head3)
            console.log(head3);
        }
    }
}

const product = document.getElementById("product")
product.innerHTML = ""


console.log(CreateCard())

const ShowData = (data) => {
    const productName = document.getElementById("name")
    const price = document.getElementById("price")
    let arr = [];
    
    console.log(data)
    
    productName.innerHTML += data[0].P[0]
    price.innerHTML += data[1].P[1]
    console.log(product.Price)
    const node = CreateCard(product);
    return data
       
    
}