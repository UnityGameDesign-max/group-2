

const getAllProducts = () => {
    fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(products => getCardProduct(products))
}
getAllProducts()


const getCardProduct = (products) =>{ 
    console.log(products);
   
    const NUM_OF_PRODUCTS_PER_SECTION = 4;
    const PRODUCT_INDEX = 6
    let numOfArticlesInSection = 1;
    let itemsInBasket = 0;
    let productId = []
    for(let i=PRODUCT_INDEX; i<products.length;i++){

        const firstSectionOfProducts = document.getElementById("product-section-1")
        const secondSectionOfProducts = document.getElementById("product-section-2");
        const basketItemNumber = document.getElementById("basketCount");
        const ADD_FAVOURITE_MESSAGE = "ADD TO FAVOURITES";
        const REMOVE_FAVOURITE_MESSAGE = "ADD TO FAVOURITES";
        
        const cardProductArticle = document.createElement("article");
        cardProductArticle.classList.add("product-card")


        const favoriteIcon = document.createElement('p');
        favoriteIcon.classList.add("fa");
        favoriteIcon.classList.add("fa-star");
        favoriteIcon.classList.add("favorite-icon");
        favoriteIcon.style.cursor = "pointer";
    
        cardProductArticle.appendChild(favoriteIcon);

        favoriteIcon.addEventListener("click", function(){
            const isToggled = favoriteIcon.classList.toggle("checked");
        })
        

        const basketIcon = document.createElement("i");
        basketIcon.style.cursor = "pointer";
        basketIcon.classList.add("fa");
        basketIcon.classList.add("fa-shopping-basket");
        basketIcon.classList.add("shopping-basket")
        cardProductArticle.appendChild(basketIcon)
        
        basketIcon.addEventListener("click", ()=>{
            itemsInBasket++;
            localStorage.setItem('ITEMS_IN_BASKET', itemsInBasket)
            basketItemNumber.textContent = localStorage.getItem('ITEMS_IN_BASKET');
            localStorage.setItem('PRODUCT_ORDER', productId)
            console.log(itemsInBasket)
            console.log(productId)
            productId.push(i)
        })
        
        console.log(itemsInBasket)
        for(let cardItems = 0; cardItems<products[i].Product.length; cardItems++){

            if(cardItems == 0){
                //// IMAGE--------------------
                const productImage = document.createElement('img');
                productImage.src = products[i].Product[cardItems]
                firstSectionOfProducts.appendChild(productImage);
                cardProductArticle.appendChild(productImage);

                /// CATEGORY -----------------

                const categoryTag=document.createElement("p");
                const categoryText=document.createTextNode(products[i].Category);
                categoryTag.appendChild(categoryText);
                cardProductArticle.appendChild(categoryTag)
                console.log(cardProductArticle);
            }

            if(cardItems == 1){
                //// PRODUCT_NAME -----------------
                const priceTag=document.createElement("h3");
                const priceText=document.createTextNode(products[i].Product[cardItems])
                priceTag.appendChild(priceText);
                cardProductArticle.appendChild(priceTag)
            }

            if(cardItems == 2){
                //// PRODUCT_PRICE -------------- 
                const productNameTag=document.createElement("h4");
                const productNameText=document.createTextNode(products[i].Product[cardItems])
                productNameTag.appendChild(productNameText);
                cardProductArticle.appendChild(productNameTag)
            }
        }
        firstSectionOfProducts.appendChild(cardProductArticle)
        console.log(cardProductArticle);

        if(numOfArticlesInSection <= NUM_OF_PRODUCTS_PER_SECTION){
            firstSectionOfProducts.appendChild(cardProductArticle)
        }
        else
            secondSectionOfProducts.appendChild(cardProductArticle)
        
        numOfArticlesInSection++;
        console.log(productId);
    }
    
}
