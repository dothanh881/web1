

let productElements = document.querySelectorAll('.product');
let products = {};

productElements.forEach((element) => {
  let name = element.querySelector('.product-name').textContent;
  let id = parseInt(element.dataset.id);
  let price = parseInt(element.querySelector('.product-price').textContent);

  // Lấy đường dẫn hình ảnh
  let productImgElement = element.querySelector('.product-img img');
  if (productImgElement && productImgElement.hasAttribute('src')) {
    let imgSrc = productImgElement.getAttribute('src');
    let inCart = 0;
    if (!products[id]) {
      products[id] = {
        name: name,
        img: imgSrc,
        tag: id,
        price: price,
        inCart: inCart,
      };
    }
  }
});
var addToCartElement = document.querySelectorAll('.add-to-cart');
addToCartElement.forEach(function(element){
  var dataId = element.parentElement.getAttribute('data-id');
  element.addEventListener("click", () => {
    console.log(dataId);
    console.log(products[dataId]);
  cartNumber(products[dataId]);
  totalCost(products[dataId]);
})
});
function onLoadCartNumber()
{
	let productNumber=localStorage.getItem('cartNumber')
	if(productNumber)
	{
		document.querySelector('.dropdown-toggle span').textContent=productNumber;
	}
}
function cartNumber(product)
{
	let productNumber=localStorage.getItem('cartNumber')
	productNumber=parseInt(productNumber)
	if(productNumber)
	{
		localStorage.setItem('cartNumber', productNumber+1);
		document.querySelector('.dropdown-toggle span').textContent = productNumber+1;
	} else {
		localStorage.setItem('cartNumber',1);
		document.querySelector('.dropdown-toggle span').textContent =1;
	}
    setItem(product);
}
function setItem(product) {
  let cartItems = localStorage.getItem('productInCart');
  cartItems = JSON.parse(cartItems);

  if (cartItems !== null) {
    if (cartItems[product.tag] === undefined) {
      cartItems[product.tag] = product;
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    };
  }

  localStorage.setItem('productInCart', JSON.stringify(cartItems));
}

function totalCost(product)
{
  let cartCost=localStorage.getItem('totalCost')
  if(cartCost!=null)
  {  cartCost=parseInt(cartCost);

    localStorage.setItem("totalCost", cartCost +  product.price)
  }
  else{
    localStorage.setItem("totalCost", product.price)
  }
}
function displayCart()
{
  let cartCost=localStorage.getItem('totalCost')
  let cartItems=localStorage.getItem("productInCart");
  let productNumber=localStorage.getItem('cartNumber')
  cartItems=JSON.parse(cartItems);
  let productContainer=document.querySelector(".cart-itemlist");
  if(cartItems && productContainer)
  {
    productContainer.innerHTML=' ';
    Object.values(cartItems).map(item =>{
      productContainer.innerHTML +=  `
      <div class="table-responsive ">
      <table class="table" style="width: 100%;">
      <tr>
      <th class="pro-right" style="width: 43%;">
      <button class="butt-cart-delete" onclick="removeFromCart(${item.tag})"><i class="fa fa-close"></i></button>
      <img src="${item.img}" alt=""  class="cart-item-img"><div class="cart-item-name">${item.name}</div>
      </th>
      <th class="price-tab" style="width: 20%;" ><div class="cart-item-price">${item.price}.000.000₫</div></th>
      <th class="quantity-tab" style="width: 20%;">
          <div class="cart-input">
					  <input type="number" value="${item.inCart}" min="0" class="cart-input-number">
          </div>
      </th>
      <th  class= "total-tab" style="width: 20%;"><div class="cart-item-total">${item.inCart*item.price}.000.000₫</div></th>
      </tr>
      </table>
      </div>
      `;
    });
    productContainer.innerHTML +=  ` 
     <div class="total-container">
       <div class="numberTotal">
       TỔNG ${productNumber} SẢN PHẨM : ${cartCost}.000.000₫
       </div>
     </div>
    `
}
}

function displayCheckout(){
  let cartCost=localStorage.getItem('totalCost')
  let cartItems=localStorage.getItem("productInCart");
  cartItems=JSON.parse(cartItems);
  let productContainer=document.querySelector(".order-products");
  if(cartItems && productContainer)
  {
    productContainer.innerHTML=' ';
    Object.values(cartItems).map(item =>{
      productContainer.innerHTML +=  `
      <div class="order-col">
				<div>${item.inCart}x ${item.name} </div>
				<div>${item.inCart*item.price}.000.000₫</div>
			</div>
      `;
    });
    productContainer.innerHTML +=  ` 
    <div class="order-col">
    <div>Giao hàng</div>
    <div><strong>MIỄN PHÍ</strong></div>
  </div>
  <div class="order-col">
    <div><strong>TỔNG</strong></div>
    <div><strong class="order-total">${cartCost}.000.000₫</strong></div>
  </div>
    `;
  }
}


function displayCartDrop(){
  let cartCost=localStorage.getItem('totalCost')
  let cartItems=localStorage.getItem("productInCart");
  let productNumber=localStorage.getItem('cartNumber')
  cartItems=JSON.parse(cartItems);
  let productContainer=document.querySelector(".cart-list");
  if(cartItems && productContainer)
  {
    productContainer.innerHTML=' ';
    Object.values(cartItems).map(item =>{
      productContainer.innerHTML +=  `
      <div class="product-widget">
					<div class="product-img">
					    <img src="${item.img}" alt="">
					</div>
					<div class="product-body">
							<h3 class="product-name"><a href="#">${item.name}</a></h3>
							<h4 class="product-price"><span class="qty">${item.inCart}x</span>${item.price}.000.000₫</h4>
					</div>
					<button class="delete" onclick="removeFromCart(${item.tag})"><i class="fa fa-close"></i></button>
			</div>
      `;
    });
    productContainer.innerHTML +=  ` 
    <div class="cart-summary">
			<small>${productNumber} sản phẩm được chọn </small> 
			<h5>Tổng tiền : ${cartCost}.000.000₫ </h5>
		</div>
    `}
}
function removeFromCart(tag) {
  let cartItems = localStorage.getItem('productInCart');
  cartItems = JSON.parse(cartItems);

  let cartCost = localStorage.getItem('totalCost');
  let productNumber = localStorage.getItem('cartNumber');

  if (cartItems[tag]) {
    let removedProductPrice = cartItems[tag].price * cartItems[tag].inCart;
    cartCost = parseInt(cartCost) - removedProductPrice;
    productNumber = parseInt(productNumber) - cartItems[tag].inCart;

    delete cartItems[tag];

    localStorage.setItem('productInCart', JSON.stringify(cartItems));
    localStorage.setItem('totalCost', cartCost);
    localStorage.setItem('cartNumber', productNumber);

    displayCart();
    displayCheckout();
    displayCartDrop();
  }
}
let cartInputNumbers = document.querySelectorAll('.cart-input-number');

cartInputNumbers.forEach((input) => {
  input.addEventListener('change', function(event) {
    let newQuantity = parseInt(event.target.value); // Lấy giá trị số lượng mới từ input
    let productId = parseInt(input.dataset.productId); // Lấy id sản phẩm từ thuộc tính data

    // Cập nhật thông tin số lượng trong localStorage dựa trên giá trị mới và id sản phẩm
    updateCartQuantity(productId, newQuantity);
  });
});

function updateCartQuantity(productId, quantity) {
  let cartItems = JSON.parse(localStorage.getItem('productInCart'));
  let cartCost = parseInt(localStorage.getItem('totalCost'));
  let productNumber = parseInt(localStorage.getItem('cartNumber'));

  if (cartItems && cartItems[productId]) {
    let prevQuantity = cartItems[productId].inCart;
    let price = cartItems[productId].price;

    // Cập nhật thông tin số lượng và giá trị trong localStorage
    cartItems[productId].inCart = quantity;
    cartCost += (quantity - prevQuantity) * price;
    productNumber += (quantity - prevQuantity);

    localStorage.setItem('productInCart', JSON.stringify(cartItems));
    localStorage.setItem('totalCost', cartCost);
    localStorage.setItem('cartNumber', productNumber);

    displayCart();
    displayCheckout();
    displayCartDrop();
  }
}
onLoadCartNumber();
displayCart();
displayCheckout();
displayCartDrop()