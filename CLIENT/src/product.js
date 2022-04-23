
const getAllProducts = () => {
    fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => getCardProduct(data))
}
getAllProducts()

const getCardProduct = (data) =>{ 
    console.log(data);
    let numOfArticlesInSection=1;

    for(let i=6; i<data.length;i++){

    const sec1=document.getElementById("product-section-1")
    const sec2=document.getElementById("product-section-2");
    const paraArt=document.createElement("article");

    const changeColorOfFavourite = () => {
        favoriteIcon.classList.add("checked");
    }

    const favoriteIcon = document.createElement('p');
    const favouriteIconLink = document.createElement('a');
    favoriteIcon.classList.add("fa");
    favoriteIcon.classList.add("fa-star");


    favoriteIcon.addEventListener("click", function(){
        changeColorOfFavourite()
    })
    favouriteIconLink.appendChild(favoriteIcon)
    favouriteIconLink.href = "#product-section"
    //img.appendChild(img.src);
    //document.getElementById("product-section-1").appendChild(img);
    paraArt.appendChild(favouriteIconLink);

    const para=document.createElement("p");
    const paraText=document.createTextNode(data[i].C);
    para.appendChild(paraText);
    paraArt.appendChild(para)

    
    

    for(let x=0; x<data[i].P.length;x++)
    {

        //---------------Product name and price----------------



        if(x== 0){
           
            const img = document.createElement('img');
            img.src = data[i].P[x]
            //img.appendChild(img.src);
            document.getElementById("product-section-1").appendChild(img);
            paraArt.appendChild(img);
            const para=document.createElement("p");
            const paraText=document.createTextNode(data[i].C);
            para.appendChild(paraText);
            paraArt.appendChild(para)
           
            console.log(paraArt);
            //console.log(img)
        }


        if(x==1)
        {
        const head3=document.createElement("h3");
        const head3Text=document.createTextNode(data[i].P[x])
        head3.appendChild(head3Text);
       // paraArt1.appendChild(head3)
        paraArt.appendChild(head3)
        }

        if(x==2)
        {
            const head2=document.createElement("h4");
            const head2Text=document.createTextNode(data[i].P[x])
            head2.appendChild(head2Text);
           // paraArt1.appendChild(head3)
            paraArt.appendChild(head2)
        }
       
    }
    document.getElementById("product-section-1").appendChild(paraArt)
    console.log(paraArt);

    if(numOfArticlesInSection<=4)
    {
        sec1.appendChild(paraArt)
    }
    else
    sec2.appendChild(paraArt)
    
numOfArticlesInSection++;
}
console.log(document.getElementById("product-section-1"));
}
