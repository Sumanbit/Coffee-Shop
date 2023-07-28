let navbar=documnent.queryselector('.navbar');

document.querySelector('#menu-btn').online=()=>{
    navbar.classList.toggle('active');
    searchFormclassList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').online=()=>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem=document.querySelector('.cart-item-container');

document.querySelector('#cart-btn').online=()=>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll=()=>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}