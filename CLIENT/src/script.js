
const getAllProducts = () => {
    fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => CreateCard(data))
}

const getAllProducts1 = () => {
    fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => CreateCard1(data))
}
getAllProducts()
getAllProducts1()

// getAllProducts().map((item) => {
//     console.log(item)
// })

const CreateCard = (data) =>{ 
    console.log(data)
    data.map(item => {
        `
            <article>
                <img src="" alt="">
                <p>${item.C}</p>
                <h3></h3>
                <h2></h2>
            </article>
        `
    })

    /*const para=document.createElement("p");
    const paraText=document.createTextNode(data[0].P[0])
    para.appendChild(paraText);
    document.getElementById("product").appendChild(para)
    //document.body.appendChild(para)*/

    const imagesArray = ["../assets/ItemImages/Beef.png","../assets/ItemImages/onions.png","../assets/ItemImages/Royal.png","../assets/ItemImages/Bananas.png","../assets/ItemImages/Rajah.png","../assets/ItemImages/milk.png","../assets/ItemImages/Doritos.png","../assets/ItemImages/Bread.png"];
    var count=1;
    for(var i=6; i<=9;i++){
       
        
//----------Category----------------

    const paraArt=document.createElement("article")
    const para=document.createElement("p")
    const paraText=document.createTextNode(data[i].C)
    para.appendChild(paraText);
    paraArt.appendChild(para)
   
    //console.log(paraArt);
/////////////////////////////////////////////////

//------------image------------------------

    var img = document.createElement('img');
    img.src = imagesArray[i-6];
    //img.appendChild(img.src);
    document.getElementById("product-section-1").appendChild(img)
    paraArt.appendChild(img)
/////////////////////////////////////////////////

    //console.log(img)

    var count1=1;

    for(var x=0; x<2;x++)
    {

        //---------------Product name and price----------------

        if(count1==1)
        {
            const head3=document.createElement("h4");
            const head3Text=document.createTextNode(data[i].P[x])
            head3.appendChild(head3Text);
           // paraArt1.appendChild(head3)
            paraArt.appendChild(head3)
        }
        else
        {
            const head3=document.createElement("h3");
            const head3Text=document.createTextNode(data[i].P[x])
            head3.appendChild(head3Text);
           // paraArt1.appendChild(head3)
            paraArt.appendChild(head3)
        }

        count1++;
       
    }
    document.getElementById("product-section-1").appendChild(paraArt)
    console.log(paraArt);

}
console.log(document.getElementById("product-section-1"));
}

//second artice

const CreateCard1 = (data) =>{ 
    console.log(data)

    const imagesArray = ["../assets/ItemImages/Beef.png","../assets/ItemImages/onions.png","../assets/ItemImages/Royal.png","../assets/ItemImages/Bananas.png","../assets/ItemImages/Rajah.png","../assets/ItemImages/milk.png","../assets/ItemImages/Doritos.png","../assets/ItemImages/Bread.png"];
    var count=1;
    for(var i=10; i<data.length;i++){
       
        
//----------Category----------------
const paraArt1=document.createElement("article")
    const para=document.createElement("p")
    const paraText=document.createTextNode(data[i].C)
    para.appendChild(paraText);
    document.getElementById("product-section-2").appendChild(para)
    paraArt1.appendChild(para)
   

//------------image------------------------

    var img = document.createElement('img');
    img.src = imagesArray[i-6];
    //img.appendChild(img.src);
    document.getElementById("product-section-2").appendChild(img)
    paraArt1.appendChild(img)
/////////////////////////////////////////////////

   // console.log(img)

    for(var x=0; x<2;x++)
    {

        //---------------Product name and price----------------
        const head3=document.createElement("h3");
        const head3Text=document.createTextNode(data[i].P[x])
        head3.appendChild(head3Text);
        document.getElementById("product-section-2").appendChild(head3)
        console.log(head3);
        paraArt1.appendChild(head3)
    }
    document.getElementById("product-section-2").appendChild(paraArt1)

    console.log(paraArt1)
}
console.log(document.getElementById("product-section-2"))
}

// const product = document.getElementById("product")
// product.innerHTML = ""


//console.log(CreateCard())
