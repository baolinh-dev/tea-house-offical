var trahoaqua = [
    {
        imagesPath: './assets/imgs/tra-hoa-qua/tra-phuc-bon-tu.png', 
        name: 'Trà Phúc Bồn Tử', 
        price: '40.000 đ'
    },  
    {
        imagesPath: './assets/imgs/tra-hoa-qua/tra-viet-quat.webp', 
        name: 'Trà Việt Quất', 
        price: '40.000 đ'
    },  
    {
        imagesPath: './assets/imgs/tra-hoa-qua/tra-vai.webp', 
        name: 'Trà Vải', 
        price: '40.000 đ'
    },  
    {
        imagesPath: './assets/imgs/tra-hoa-qua/tra-dau-tay.webp', 
        name: 'Trà Dâu Tây', 
        price: '40.000 đ'
    },  
    {
        imagesPath: './assets/imgs/tra-hoa-qua/tra-cam-dao.webp', 
        name: 'Trà Cam Đào', 
        price: '45.000 đ'
    },  
    {
        imagesPath: './assets/imgs/tra-hoa-qua/tra-xoai.webp', 
        name: 'Trà Xoài', 
        price: '35.000 đ'
    },  
    {
        imagesPath: './assets/imgs/tra-hoa-qua/tra-tao.webp', 
        name: 'Trà Táo', 
        price: '35.000 đ'
    },  
    {
        imagesPath: './assets/imgs/tra-hoa-qua/tra-chanh.webp', 
        name: 'Trà Chanh', 
        price: '30.000 đ'
    },  
] 
var caphes = [
    {
        imagesPath: './assets/imgs/caphe/caphe-latte.webp', 
        name: 'Latte', 
        price: '55.000 đ'
    },  
    {
        imagesPath: './assets/imgs/caphe/caphe-espresso.webp', 
        name: 'Espresso', 
        price: '40.000 đ'
    },  
    {
        imagesPath: './assets/imgs/caphe/caphe-cappucino.webp', 
        name: 'Cappuccino', 
        price: '45.000 đ'
    },  
    {
        imagesPath: './assets/imgs/caphe/caphe-caramel.webp', 
        name: 'Caramel Macchiato', 
        price: '35.000 đ'
    },  
]   
var smoothies = [
    {
        imagesPath: './assets/imgs/smoothies/smoothies-chuoi-dua.webp', 
        name: 'Smoothies chuối dừa', 
        price: '40.000 đ'
    },  
    {
        imagesPath: './assets/imgs/smoothies/smoothies-dau-viet-quat.webp', 
        name: 'Smoothies dâu việt quất', 
        price: '40.000 đ'
    },  
    {
        imagesPath: './assets/imgs/smoothies/smoothies-dau.webp', 
        name: 'Smoothies dâu', 
        price: '45.000 đ'
    },  
    {
        imagesPath: './assets/imgs/smoothies/smoothies-dau-dau.webp', 
        name: 'Smoothies dâu chuối', 
        price: '35.000 đ'
    },  
]
var banhngots = [
    {
        imagesPath: './assets/imgs/banh-ngot/banh-caphe-phomai.webp', 
        name: 'Bánh cà phê phomai', 
        price: '40.000 đ'
    },  
    {
        imagesPath: './assets/imgs/banh-ngot/banh-triramisu.webp', 
        name: 'Tiramisu', 
        price: '40.000 đ'
    },  
    {
        imagesPath: './assets/imgs/banh-ngot/banh-caramel-phomai.webp', 
        name: 'Caramel Phomai', 
        price: '45.000 đ'
    },  
    {
        imagesPath: './assets/imgs/banh-ngot/banh-bonglan-cuon.webp', 
        name: 'Bông lan cuộn trà xanh', 
        price: '35.000 đ'
    },  
]

  
var products = [
    trahoaqua, caphes, smoothies, banhngots
]   
    
var containerEle = document.createElement('div'); 
containerEle.classList.add('container')  

var rowEle = document.createElement('div'); 
rowEle.classList.add('row')   



function concatChild(indexBtn ,indexChild) {  
    var colEle = document.createElement('div');  
    colEle.classList.add('col-lg-3')   
    colEle.classList.add('col-md-6')   
    colEle.classList.add('col-6')   
    colEle.innerHTML = `
        <div class="drink-item">
            <div class="drink-item__img-wrap">
                <img src="${products[indexBtn][indexChild].imagesPath}" alt="" class="drink-item__img"> 
                <div class="add-to-cart-part"> 
                    <p>thêm vào giỏ hàng</p>
                </div>
            </div>
            <div class="drink-item__content">
                <h3 class="drink-item__content-heading">
                    ${products[indexBtn][indexChild].name}
                </h3>
                <p class="drink-item__content-price">
                    giá: <span class="drink-item__content-price-number">${products[indexBtn][indexChild].price}</span>
                </p>
            </div>
        </div>
    `  
    rowEle.appendChild(colEle)
} 

var htmlRender =  `
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="drink-item">
                                    <div class="drink-item__img-wrap">
                                        <img src="${products[0][0].imagesPath}" alt="" class="drink-item__img"> 
                                        <div class="add-to-cart-part"> 
                                            <p>thêm vào giỏ hàng</p>
                                        </div>
                                    </div>
                                    <div class="drink-item__content">
                                        <h3 class="drink-item__content-heading">
                                            ${products[0][0].name}
                                        </h3>
                                        <p class="drink-item__content-price">
                                            giá: <span class="drink-item__content-price-number">${products[0][0].price}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="drink-item">
                                    <div class="drink-item__img-wrap">
                                        <img src="${products[0][1].imagesPath}" alt="" class="drink-item__img"> 
                                        <div class="add-to-cart-part"> 
                                            <p>thêm vào giỏ hàng</p>
                                        </div>
                                    </div>
                                    <div class="drink-item__content">
                                        <h3 class="drink-item__content-heading">
                                            ${products[0][1].name}
                                        </h3>
                                        <p class="drink-item__content-price">
                                            giá: <span class="drink-item__content-price-number">${products[0][1].price}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="drink-item">
                                    <div class="drink-item__img-wrap">
                                        <img src="${products[0][2].imagesPath}" alt="" class="drink-item__img"> 
                                        <div class="add-to-cart-part"> 
                                            <p>thêm vào giỏ hàng</p>
                                        </div>
                                    </div>
                                    <div class="drink-item__content">
                                        <h3 class="drink-item__content-heading">
                                            ${products[0][2].name}
                                        </h3>
                                        <p class="drink-item__content-price">
                                            giá: <span class="drink-item__content-price-number">${products[0][2].price}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="drink-item">
                                    <div class="drink-item__img-wrap">
                                        <img src="${products[0][3].imagesPath}" alt="" class="drink-item__img"> 
                                        <div class="add-to-cart-part"> 
                                            <p>thêm vào giỏ hàng</p>
                                        </div>
                                    </div>
                                    <div class="drink-item__content">
                                        <h3 class="drink-item__content-heading">
                                            ${products[0][3].name}
                                        </h3>
                                        <p class="drink-item__content-price">
                                            giá: <span class="drink-item__content-price-number">${products[0][3].price}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="drink-item">
                                    <div class="drink-item__img-wrap">
                                        <img src="${products[0][4].imagesPath}" alt="" class="drink-item__img"> 
                                        <div class="add-to-cart-part"> 
                                            <p>thêm vào giỏ hàng</p>
                                        </div>
                                    </div>
                                    <div class="drink-item__content">
                                        <h3 class="drink-item__content-heading">
                                            ${products[0][4].name}
                                        </h3>
                                        <p class="drink-item__content-price">
                                            giá: <span class="drink-item__content-price-number">${products[0][4].price}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="drink-item">
                                    <div class="drink-item__img-wrap">
                                        <img src="${products[0][5].imagesPath}" alt="" class="drink-item__img"> 
                                        <div class="add-to-cart-part"> 
                                            <p>thêm vào giỏ hàng</p>
                                        </div>
                                    </div>
                                    <div class="drink-item__content">
                                        <h3 class="drink-item__content-heading">
                                            ${products[0][5].name}
                                        </h3>
                                        <p class="drink-item__content-price">
                                            giá: <span class="drink-item__content-price-number">${products[0][5].price}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="drink-item">
                                    <div class="drink-item__img-wrap">
                                        <img src="${products[0][6].imagesPath}" alt="" class="drink-item__img"> 
                                        <div class="add-to-cart-part"> 
                                            <p>thêm vào giỏ hàng</p>
                                        </div>
                                    </div>
                                    <div class="drink-item__content">
                                        <h3 class="drink-item__content-heading">
                                            ${products[0][6].name}
                                        </h3>
                                        <p class="drink-item__content-price">
                                            giá: <span class="drink-item__content-price-number">${products[0][6].price}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="drink-item">
                                    <div class="drink-item__img-wrap">
                                        <img src="${products[0][7].imagesPath}" alt="" class="drink-item__img"> 
                                        <div class="add-to-cart-part"> 
                                            <p>thêm vào giỏ hàng</p>
                                        </div>
                                    </div>
                                    <div class="drink-item__content">
                                        <h3 class="drink-item__content-heading">
                                            ${products[0][7].name}
                                        </h3>
                                        <p class="drink-item__content-price">
                                            giá: <span class="drink-item__content-price-number">${products[0][7].price}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
`
var btnAddCarts = document.querySelectorAll('.menu-mains__item-btn') 
var drinkList = document.querySelector('.drink-list') 
btnAddCarts.forEach((btnAddCart, indexBtn)=>{
    btnAddCart.onclick = () => {     
        while (rowEle.firstChild) {
            rowEle.removeChild(rowEle.lastChild);
        } 
        // Nối con cho row
        products[indexBtn].forEach((item, index) => { 
            concatChild(indexBtn, index) 
        })     
        containerEle.appendChild(rowEle) 
        drinkList.innerHTML = containerEle.outerHTML
    } 
})
