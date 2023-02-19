// Cart
let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.dashboard-order')
let closeCart = document.querySelector('#close-cart')
// Open Cart
cartIcon.onclick = () =>{
    cart.classList.add('active')

}
// Close Cart
closeCart.onclick = () =>{
    cart.classList.remove('active')

}


// Home
let homeIcon = document.querySelector('#home-icon')

homeIcon.onclick = () =>{
    location.replace("home.html")
}

// Contact
let contactIcon = document.querySelector('#contact-icon')

contactIcon.onclick = () =>{
    location.replace("contact.html")
}

// Category
const manuBtns = document.querySelectorAll('.manu-btn')
const foodItems = document.querySelectorAll('.food-item')

let activeBtn = "bestSeller"

showFoodMenu(activeBtn)

manuBtns.forEach((btn) => {
    btn.addEventListener('click', () =>{
        resetActiveBtn()
        showFoodMenu(btn.id)
        btn.classList.add('active-btn')

    })
})

function resetActiveBtn(){
    manuBtns.forEach((btn) => {
        btn.classList.remove('active-btn')
    })
}

function showFoodMenu(newMenuBtn){
    activeBtn = newMenuBtn;
    foodItems.forEach((item) => {
        if(item.classList.contains(activeBtn)){
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}