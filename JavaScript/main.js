window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}

document.getElementById("scrollBtn").addEventListener("click", function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
});

// nav 
var nav = document.getElementById('header');
var scrollUp = "scroll-up";
var scrollDown = "scroll-down";
var lastScroll = 0;

if (window.addEventListener) {
    window.addEventListener("scroll", scrollHandler);
} else {
    window.attachEvent("scroll", scrollHandler);
}

function scrollHandler() {
     var currentScroll = window.pageYOffset;
     if (currentScroll === 0) {
         nav.classList.remove(scrollDown);
         nav.classList.remove(scrollUp);
        return;
     }
     if (currentScroll > lastScroll && !nav.classList.contains(scrollDown)) {
                // down
        nav.classList.remove(scrollUp);
        nav.classList.add(scrollDown);
    } 
    else if (currentScroll < lastScroll && nav.classList.contains(scrollDown)) {
                // up
        nav.classList.remove(scrollDown);
        nav.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
}

// cart 
let closeCart = document.querySelector('.closeCart');
let iconCart = document.querySelector('.icon-cart');
let body = document.querySelector('body');

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

function viewCart(){
    window.location.href = "cartPage.html"
}

function setupUI() {
    let logout = document.getElementById("display_login");
    let login = document.getElementById("login_btn");
    let token = localStorage.getItem("email");

    if (token) {
        logout.style.display = "flex";
        login.style.display = "none";
    } else {
        logout.style.display = "none";
        login.style.display = "inline-block";
    }
}

function logout(){
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    setupUI();
}
setupUI();

// Example JavaScript to fetch and display recommendations

// Sample data (replace with actual data fetching logic)
const recommendations = [
    {
        image: 'path/to/recommendation-1.jpg',
        name: 'Product Name 1',
        description: 'Product description or key features.',
        link: '#'
    },
    {
        image: 'path/to/recommendation-2.jpg',
        name: 'Product Name 2',
        description: 'Product description or key features.',
        link: '#'
    },
    // Add more recommendation objects as needed
];

// Function to create HTML for recommendation items
function createRecommendationItem(item) {
    return `
        <div class="recommendation-item">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <a href="${item.link}" class="btn">View Product</a>
        </div>
    `;
}

// Function to populate recommendations into the DOM
function populateRecommendations() {
    const recommendationsContainer = document.querySelector('.recommendations-grid');
    let recommendationHTML = '';

    recommendations.forEach(item => {
        recommendationHTML += createRecommendationItem(item);
    });

    recommendationsContainer.innerHTML = recommendationHTML;
}

// Call function to populate recommendations when the page loads
document.addEventListener('DOMContentLoaded', () => {
    populateRecommendations();
});


let menu = document.querySelector('.menu_icon');
let navbar = document.querySelector('.close');


menu.addEventListener('click', ()=>{
    navbar.classList.toggle('open')
})

let search_bar = document.querySelector('.search-bar');
let search_icon = document.querySelector('.search_icon');

search_icon.addEventListener('click',()=>{
    search_bar.classList.toggle('open_search')
})


let left_icon = document.querySelector('.left_icon');
let right_icon = document.querySelector('.right_icon');

let arr = [
    "Free Shipping For All Products",
    "Get 10% Off Using Coupon Code",
    "Get 5% Off On First Order"
]

let text = document.querySelector('.announcement_text');
let i = 0;

right_icon.addEventListener('click',()=>{
    i = (i+1)%arr.length;
    newtext = arr[i];
    text.textContent = newtext
})
left_icon.addEventListener('click',()=>{
    if(i>0){
        i = i-1;
    }else{
        i = i - 1 + arr.length;
    }
    newtext = arr[i];
    text.textContent = newtext;
})