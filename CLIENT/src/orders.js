const items = localStorage.getItem('ITEMS_IN_BASKET');
const orders = localStorage.getItem('PRODUCT_ORDER');

console.log(orders)

const orderArticle = document.getElementById("orders")
const orderImageItem = document.createElement("img")
const descriptionSection = document.createElement("section")
const productName = document.createElement("h3") 
const productDescription = document.createElement("p") 
const shippingInfo = document.createElement("strong") 
const PriceSection = document.createElement("section") 
const price = document.createElement("h4")
const deleteImage = document.createElement("i");

for(let i=0; i<items; i++){

    descriptionSection.appendChild(productName)
    descriptionSection.appendChild(productDescription)
    descriptionSection.appendChild(shippingInfo)
    PriceSection.appendChild(price)
    PriceSection.appendChild(deleteImage)
    orderArticle.appendChild(orderImageItem)
    orderArticle.appendChild(descriptionSection)
    orderArticle.appendChild(PriceSection)
    console.log(document.getElementById("orders-section"))


    const getProductOrdered = (productId) => {
        fetch(`/product/${productId}`)
    }
}



