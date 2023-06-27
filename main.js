const navEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const iconoHam = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")
const cardsContainer = document.querySelector(".cards-container")

navEmail.addEventListener("click",toggleDesktopMenu)
iconoHam.addEventListener("click",toggleMobileMenu)
menuCarritoIcon.addEventListener("click",toggleCarritoAside)

function toggleDesktopMenu(){
    const isAsideOpen = !aside.classList.contains("inactive")
    if(isAsideOpen){
        aside.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive")
}
function toggleMobileMenu(){
    const isAsideOpen = !aside.classList.contains("inactive")
    if(isAsideOpen){
        aside.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive")
}
function toggleCarritoAside(){
    const isMobileMenuOpen = !mobileMenu.classList.contains("inactive")
    if(isMobileMenuOpen){
        mobileMenu.classList.add("inactive")
    }
        aside.classList.toggle("inactive")
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Screen",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Compu",
    price: 520,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
        const productImg = document.createElement("img")
        productImg.setAttribute("src",product.image)
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
        const productInfoDiv = document.createElement("div")
        const productPrice = document.createElement("p")
        productPrice.innerText = `$${product.price}`
        const productName = document.createElement("p")
        productName.innerText = `${product.name}`
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement("figure")
        const productImageCart = document.createElement("img")
        productImageCart.setAttribute("src","./assets/icons/bt_add_to_cart.svg")
    
        productInfoFigure.appendChild(productImageCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)

//For of -> Recorre el objeto general
//For in -> Devuelve el contenido de cada objeto