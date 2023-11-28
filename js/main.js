(function($) {
	"use strict"

	// Mobile Nav toggle
	$('.menu-toggle > a').on('click', function (e) {
		e.preventDefault();
		$('#responsive-nav').toggleClass('active');
	})

	// Fix cart dropdown from closing
	$('.cart-dropdown').on('click', function (e) {
		e.stopPropagation();
	});

	/////////////////////////////////////////

	// Products Slick
	$('.products-slick').each(function() {
		var $this = $(this),
				$nav = $this.attr('data-nav');

		$this.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			infinite: true,
			speed: 300,
			dots: false,
			arrows: true,
			appendArrows: $nav ? $nav : false,
			responsive: [{
	        breakpoint: 991,
	        settings: {
	          slidesToShow: 2,
	          slidesToScroll: 1,
	        }
	      },
	      {
	        breakpoint: 480,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	        }
	      },
	    ]
		});
	});

	// Products Widget Slick
	$('.products-widget-slick').each(function() {
		var $this = $(this),
				$nav = $this.attr('data-nav');

		$this.slick({
			infinite: true,
			autoplay: true,
			speed: 300,
			dots: false,
			arrows: true,
			appendArrows: $nav ? $nav : false,
		});
	});

	/////////////////////////////////////////

	// Product Main img Slick
	$('#product-main-img').slick({
    infinite: true,
    speed: 300,
    dots: false,
    arrows: true,
    fade: true,
    asNavFor: '#product-imgs',
  });

	// Product imgs Slick
  $('#product-imgs').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
		centerPadding: 0,
		vertical: true,
    asNavFor: '#product-main-img',
		responsive: [{
        breakpoint: 991,
        settings: {
					vertical: false,
					arrows: false,
					dots: true,
        }
      },
    ]
  });

	// Product img zoom
	var zoomMainProduct = document.getElementById('product-main-img');
	if (zoomMainProduct) {
		$('#product-main-img .product-preview').zoom();
	}

	/////////////////////////////////////////

	// Input number
	// $('.input-number').each(function() {
	// 	var $this = $(this),
	// 	$input = $this.find('input[type="number"]'),
	// 	up = $this.find('.qty-up'),
	// 	down = $this.find('.qty-down');

	// 	down.on('click', function () {
	// 		var value = parseInt($input.val()) - 1;
	// 		value = value < 0 ? 0 : value;
	// 		$input.val(value);
	// 		$input.change();
	// 		updatePriceSlider($this , value)
	// 	})

	// 	up.on('click', function () {
	// 		var value = parseInt($input.val()) + 1;
	// 		$input.val(value);
	// 		$input.change();
	// 		updatePriceSlider($this , value)
	// 	})
	// });

	// var priceInputMax = document.getElementById('price-max'),
	// 		priceInputMin = document.getElementById('price-min');

	// priceInputMax.addEventListener('change', function(){
	// 	updatePriceSlider($(this).parent() , this.value)
	// });

	// priceInputMin.addEventListener('change', function(){
	// 	updatePriceSlider($(this).parent() , this.value)
	// });

	// function updatePriceSlider(elem , value) {
	// 	if ( elem.hasClass('price-min') ) {
	// 		console.log('min')
	// 		priceSlider.noUiSlider.set([value, null]);
	// 	} else if ( elem.hasClass('price-max')) {
	// 		console.log('max')
	// 		priceSlider.noUiSlider.set([null, value]);
	// 	}
	// }

	// Price Slider
// 	var priceSlider = document.getElementById('price-slider');
// if (priceSlider) {
//     noUiSlider.create(priceSlider, {
//         start: [0 , 35000000],
//         connect: true,
//         step: 1000000,
//         range: {
//             'min': 1000000,
//             'max': 40000000
        
// 		}

//     });


//     priceSlider.noUiSlider.on('update', function(values, handle) {
//         var value = values[handle];
//         handle ? priceInputMax.value = value : priceInputMin.value = value;
//     });
// }
})(jQuery);







function signup(e){
	event.preventDefault();
	let username = document.getElementById("username").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
	let confirmPassword = document.getElementById("confirm_password").value;


	
	// Kiểm tra tên người dùng
	var regex = /^[a-zA-Z0-9]+$/;
	if (!regex.test(username)) {
	  alert('Tên người dùng chỉ được nhập các kí tự chữ và số.');
	  return false;
	}
	else if (username.length < 6 || username.length > 20) {
		alert("Tên người dùng phải có ít nhất 6 ký tự và không quá 20 ký tự.");
		return;
	}
	else if (!username) {
	  alert('Vui lòng nhập tên người dùng.');
	  return false;
	}
  
	// Kiểm tra email
	const emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	if (!emailRegex.test(email)) {
	  alert('Email không hợp lệ. Vui lòng nhập lại.');
	  return false;
	}
  
	// Kiểm tra mật khẩu
	if (!password) {
	  alert('Vui lòng nhập mật khẩu.');
	  return false;
	}
	else if (password.length < 8 || password.length > 32) {
		alert("Mật khẩu phải có ít nhất 8 ký tự và không quá 32 ký tự.");
		return;
	  }
  
	// Kiểm tra mật khẩu và mật khẩu nhập lại
	if (password !== confirmPassword) {
	  alert('Mật khẩu không khớp. Vui lòng nhập lại.');
	  return false;
	}
  
	
  

	let user = {
		username : username,
		email : email,
		password : password,
	}

	let json = JSON.stringify(user);
	localStorage.setItem(username,json);
	
	
	alert("Đăng kí thành công");

}


//  adminInfo = [{
//     "username": "admin12",
//     "password": "admin123456"
// }];
   
function login(e) {
	event.preventDefault();
  
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
  
	if (!username || !password) {
	  alert("Vui lòng nhập cả tên người dùng và mật khẩu!");
	  return;
	}
  
	// Kiểm tra tài khoản admin
	if (username === "admin12" && password === "admin123456") {
	  alert("Xin chào admin!");
	  window.location.href = "admin/admin.html";
	  return;
	}
  

	if (username === "user1234" && password === "user123456") {
		alert("Đăng nhập thành công!");
		window.location.href = "user.html";
		return;
	  }

	// Kiểm tra tài khoản người dùng đã đăng kí
	let user_data = localStorage.getItem(username);
	if (user_data) {
	  const data = JSON.parse(user_data);
	  if (username === data.username && password === data.password) {
		alert("Đăng nhập thành công!");
		window.location.href = "user.html";
		return;
	  }
	}
  
	// Không trùng lặp
	alert("Tài khoản hoặc mật khẩu không đúng!");
  }



//cart
const quantityInput = document.getElementById('cart-input');
const increaseButton = document.getElementById('qty-increase');
const decreaseButton = document.getElementById('qty-decrease');

increaseButton.addEventListener('click', function() {
  // Tăng giá trị của input
  quantityInput.value = parseInt(quantityInput.value) + 1;
});

decreaseButton.addEventListener('click', function() {
  // Giảm giá trị của input (đảm bảo giá trị không nhỏ hơn 0)
  if (parseInt(quantityInput.value) > 0) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }

  // Kiểm tra nếu giá trị bằng 0, xóa sản phẩm
  if (parseInt(quantityInput.value) === 0) {
    var remove_cart;
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i]
  button.addEventListener("click", function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
  })
}
  }
});

// // Hàm xóa sản phẩm
/// xóa cart

function logout() {
	// Hiển thị hộp thoại xác nhận
	const confirmDialog = window.confirm("Bạn có chắc muốn đăng xuất khỏi tài khoản không?");
  
	// Nếu người dùng nhấn OK
	if (confirmDialog) {
	  window.location.href = "index.html";
	} else {
	 
	  return;
	}
  }


  function checkout() {
	const paymentMethodRadio1 = document.getElementById("payment-1");
	const paymentMethodRadio3 = document.getElementById("payment-3");
	const termsCheckbox = document.getElementById("terms");
	const billingDetails = document.querySelector(".billing-details");
  

	if (!(paymentMethodRadio1.checked || paymentMethodRadio3.checked)) {
	  alert("Bạn cần chọn phương thức thanh toán!");
	  return;
	}
  
	if (!termsCheckbox.checked) {
		alert("Bạn cần chấp nhận điều khoản và điều kiện!");
		return;
	  }

	if (paymentMethodRadio1.checked) {
	
	  const requiredFields = [...billingDetails.querySelectorAll("input[required]")];
	  for (const field of requiredFields) {
		if (!field.value) {
		  alert(`Bạn cần điền "${field.placeholder}"`);
		  return;
		}
	  }	
	  alert("Thanh toán thành công!");
	  return;
	}

	if (paymentMethodRadio3.checked) {
	 
	  window.location.href="payment.html";
	  return;
	}

  }




 