
// Responsive MENU
$(document).ready(function(){
    $('#menu-btn').click(function(){
    $('#menu').toggleClass("act");
    });
    });
// Dropdown profile
    let subMenu = document.getElementById("subMenu");
    function toggleMenu(){
      subMenu.classList.toggle("open-menu");
    }

   


    function themSanPham() {

     
     
  
            // Alert success
      alert('Thêm thành công!!');

      // Close the overlay
      document.getElementById('khungThemSanPham').style.transform = 'scale(0)';
    
     
    }

    
  
    function xoaSanPham() {
      const isConfirm = confirm('Bạn có chắc muốn xóa sản phẩm này không?');
    
      if (isConfirm) {
        // Xóa sản phẩm
        // ...
    
        alert('Đã xóa thành công');
      }
    }
// Sửa
function suaSanPham(masp) {
  // Hiển thị khung sửa sản phẩm
  document.getElementById('khungSuaSanPham').style.display = 'block';

  // Lấy thông tin sản phẩm từ table
  var sp = layThongTinSanPhamTuTable('khungSuaSanPham');
  if (!sp) return;

  // Sửa
  for (var i = 0; i < list_products.length; i++) {
    if (list_products[i].masp == masp) {
      list_products[i] = sp;
    }
  }

  // Lưu vào localstorage
  setListProducts(list_products);

  // Vẽ lại table
  addTableProducts();

  alert('Sửa ' + sp.name + ' thành công');

  // Ẩn khung sửa sản phẩm
  document.getElementById('khungSuaSanPham').style.transform = 'scale(0)';
}


