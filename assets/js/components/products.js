function products(products) {
    const dataBase = [...products]

    function printProducts() {
        const productsDom = document.querySelector('.products__container')
        let htmlProduct = ''
       
        for (const product of dataBase){
             htmlProduct += ` 
             <article class="product">
            <div class="product__image">
              <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product__content">
               <button type="button" class="product__btn add--to--cart" data-id="${product.id}">
                <i class='bx bx-cart-add'></i>
               </button>
               <span class="product__price">${product.price}</span>
               <span class="product__stock">disponible: ${product.quantity}</span>
               <span class="product__title">${product.name}</span>
            </div>
         </article> 
         `
        }
      
      productsDom.innerHTML = htmlProduct
    }
    printProducts()
      
    return{
        dataBase,
        printProducts
    }
}

export default products