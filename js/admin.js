
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
function suaNguoiDung() {
  // Kiểm tra tên người dùng
  const tenNguoiDung = document.getElementById("tenNguoiDungSua").value;
  if (tenNguoiDung === "") {
    alert("Tên người dùng không được để trống!");
    return;
  }

  // Kiểm tra email
  const email = document.getElementById("emailSua").value;
  if (email === "") {
    alert("Email không được để trống!");
    return;
  }

  // Kiểm tra vai trò
  const vaiTro = document.getElementById("vaiTroSua").value;
  if (vaiTro === "") {
    alert("Vai trò không được để trống!");
    return;
  }

  // Kiểm tra email hợp lệ
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!re.test(email)) {
    alert("Email không hợp lệ!");
    return;
  }

  // Lưu dữ liệu thành công
  alert("Lưu dữ liệu thành công!");
}


function suaSanPham() {
  // Validate product information
  const id = document.getElementById('idSua').value.trim();
  const tenSanPham = document.getElementById('tenSanPhamSua').value.trim();
  const hangSanXuat = document.getElementById('hangSanXuatSua').value;
  const hinhDaiDien = document.getElementById('anhDaiDienSanPhamSua').src;
  const ram = document.getElementById('ramSua').value.trim();
  const boNhoTrong = document.getElementById('boNhoTrongSua').value.trim();
  const resolution = document.getElementById('resolutionSua').value.trim();
  const dungLuongPin = document.getElementById('dungLuongPinSua').value.trim();

  // Check for empty fields
  if (!id) {
    alert('Mã sản phẩm không được để trống');
    return;
  } else if (!tenSanPham) {
    alert('Tên sản phẩm không được để trống');
    return;
  } else if (!hangSanXuat) {
    alert('Vui lòng chọn hàng sản xuất');
    return;
  } else if (!hinhDaiDien) {
    alert('Hình ảnh không được để trống');
    return;
  } else if (!ram) {
    alert('RAM không được để trống');
    return;
  } else if (!boNhoTrong) {
    alert('Bộ nhớ trong không được để trống');
    return;
  } else if (!resolution) {
    alert('Độ phân giải không được để trống');
    return;
  } else if (!dungLuongPin) {
    alert('Dung lượng pin không được để trống');
    return;
  }

  // Perform product update
  // ...

  // Display success message
  alert('Sửa sản phẩm thành công!');

  // Hide product edit form
  document.getElementById('khungSuaSanPham').style.transform = 'scale(0)';
}

function themSanPham() {
  // Validate product information
  const maspThem = document.getElementById('maspThem').value.trim();
  const tenspthem = document.getElementById('tenspthem').value.trim();
  const giaspthem = document.getElementById('giaspthem').value.trim();
  const ramthem = document.getElementById('ramthem').value.trim();
  const bonhotrongthem = document.getElementById('bonhotrongthem').value.trim();
  const thenho = document.getElementById('thenho').value.trim();
  const dungluongpin = document.getElementById('dungluongpin').value.trim();

  // Check for empty fields
  if (!maspThem) {
    alert('Nhập mã sản phẩm');
    return;
  } else if (!tenspthem) {
    alert('Nhập tên sản phẩm');
    return;
  } else if (!giaspthem) {
    alert('Nhập giá tiền');
    return;
  } else if (!ramthem) {
    alert('RAM không được để trống');
    return;
  } else if (!bonhotrongthem) {
    alert('Bộ nhớ trong không được để trống');
    return;
  } else if (!thenho) {
    alert('Độ phân giải không được để trống');
    return;
  } else if (!dungluongpin) {
    alert('Dung lượng pin không được để trống');
    return;
  }

  // Check for valid data types
  // if (!isNaN(maspThem) ) {
  //   alert('Nhập ');
  //   return;
  // }

  if (isNaN(giaspthem) || giaspthem < 0) {
    alert('Giá tiền phải là số không âm');
    return;
  }

  if (isNaN(ramthem) || ramthem < 0) {
    alert('RAM phải là số không âm');
    return;
  }

  if (isNaN(bonhotrongthem) || bonhotrongthem < 0) {
    alert('Bộ nhớ trong phải là số không âm');
    return;
  }

  if (isNaN(thenho) || thenho < 0) {
    alert('Độ phân giải phải là số không âm');
    return;
  }

  if (isNaN(dungluongpin) || dungluongpin < 0) {
    alert('Dung lượng pin phải là số không âm');
    return;
  }

  // Perform product adding
  // ...

  // Display success message
  alert('Thêm sản phẩm thành công!');

  // Hide product add form
  document.getElementById('khungThemSanPham').style.transform = 'scale(0)';
}