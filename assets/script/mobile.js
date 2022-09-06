var btnProductNav = document.querySelector('.toggle-btn-product-nav')  
var navListProduct = document.querySelector('.nav-product-list') 
var height
btnProductNav.onclick = () => { 
    if(navListProduct.clientHeight == 0) { 
        navListProduct.style.height = "auto"; 
    } else { 
        navListProduct.style.height = "0px"; 
    }
}    

