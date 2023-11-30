
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

   


    function themnguoiDung() {
  // Kiểm tra tên người dùng
  var tenNguoiDung = document.getElementById("maspThem").value;
  if (tenNguoiDung == "") {
    alert("Vui lòng nhập tên người dùng!");
    return;
  }

  // Kiểm tra email
  var email = document.getElementById("emailThem").value;
  if (email == "") {
    alert("Vui lòng nhập email!");
    return;
  }

  // kiem tra dia chi
  let address = document.getElementById("diaChiThem").value;
  if(address = ""){
    alert="Vui lòng nhập địa chỉ!";
    return;
  }


  // Kiểm tra số điện thoại
    var soDienThoai = document.getElementById("soDienThoaiThem").value;
  if (isNaN(soDienThoai) || !soDienThoai) {
    alert("VUi lòng nhập số điện thoại. Số điện thoại phải là dữ liệu số!");
    return;
  }

  // Kiểm tra hình
  var anhDaiDien = document.getElementById("anhDaiDienSanPhamThem").src;
  if (anhDaiDien == "") {
    alert("Vui lòng chọn hình ảnh");
    return;
  }

  

  // Kiểm tra tài khoản
  var taiKhoan = document.getElementById("taiKhoanThem").value;
  if (taiKhoan == "") {
    alert("Vui lòng nhập tài khoản");
    return;
  }

  // Kiểm tra mật khẩu
  var matKhau = document.getElementById("matKhauThem").value;
  var matKhauNhapLai = document.getElementById("matKhauNhapLaiThem").value;
  if (matKhau == "") {
    alert("Vui lòng nhập mật khẩu");
    return;
  }

  if (matKhau != matKhauNhapLai) {
    alert("Mật khẩu nhập lại không khớp");
    return;
  }

  // Nếu tất cả các trường đều được điền đầy đủ thì thông báo nhập thành công
  alert("Thêm thành công!!");

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
  function suaSanPham() {
    
  // Validate user input
  const tenNguoiDung = document.getElementById('tenNguoiDungSua').value.trim();
  const vaiTro = document.getElementById('vaiTroSua').value;
  const email = document.getElementById('emailSua').value.trim();
  const diaChi = document.getElementById('diaChiSua').value.trim();

  // Check for empty fields
  if (!tenNguoiDung) {
    alert('Tên người dùng không được để trống');
    return;
  } else if (!vaiTro) {
    alert('Vui lòng chọn vai trò cho người dùng');
    return;
  } else if (!email) {
    alert('Email không được để trống');
    return;
  } else if (!diaChi) {
    alert('Địa chỉ không được để trống');
    return;
  }

  // Validate email format
  if (!/\S+@\S+\.\S+/.test(email)) {
    alert('Email không đúng định dạng');
    return;

  


  }

  alert("Sửa thành công!!");
    // Ẩn khung sửa sản phẩm
    document.getElementById('khungSuaSanPham').style.transform = 'scale(0)';
  }



