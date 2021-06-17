function kiemTraEmail() {
  var reg = /^[a-zA-Z]+[a-zA-Z0-9]*\@gmail.com$/;
  var txtemail = document.getElementById("txtemail").value;
  var emailDK = document.getElementById("emaildk").value;
  if (reg.test(txtemail) || reg.test(emailDK)) {
    document.getElementById("errEmail").innerHTML = "";
    return true;
  }
  {
    document.getElementById("errEmail").innerHTML =
      "&nbsp;- Yêu cầu nhập định dạng Email (vd: sonthuy@gmail.com) !";
    return false;
  }
}
function kiemTraEmailLogin() {
  var reg = /^[a-zA-Z]+[a-zA-Z0-9]*\@gmail.com$/;
  var txtemail = document.getElementById("txtemail").value;
  if (reg.test(txtemail)) {
    document.getElementById("errEmail").innerHTML = "";
    return true;
  }
  {
    document.getElementById("errEmail").innerHTML =
      "&nbsp;- Yêu cầu nhập định dạng Email (vd: sonthuy@gmail.com) !";
    return false;
  }
}
function kiemTraEmailContact() {
  var reg = /^[a-zA-Z]+[a-zA-Z0-9]*\@gmail.com$/;
  var txtemail = document.getElementById("emailContact").value;
  if (reg.test(txtemail)) {
    document.getElementById("errEmail").innerHTML = "";
    return true;
  }
  {
    document.getElementById("errEmail").innerHTML =
      "&nbsp;- Yêu cầu nhập định dạng Email (vd: sonthuy@gmail.com) !";
    return false;
  }
}
function kiemTraSDT() {
  var reg = /(^(09|03|07|08|05)+([0-9]{8})$)/;
  var SDT = document.getElementById("phonedk").value;
  if (reg.test(SDT)) {
    document.getElementById("errSDT").innerHTML = "";
    return true;
  }
  {
    document.getElementById("errSDT").innerHTML =
      "&nbsp; - Yêu cầu nhập số có 10 chữ số với 2 số đầu là (03, 05, 07, 08, 09) !";
    return false;
  }
}
function kiemTraSDTContact() {
  var reg = /(^(09|03|07|08|05)+([0-9]{8})$)/;
  var SDT = document.getElementById("sdtContact").value;
  if (reg.test(SDT)) {
    document.getElementById("errSDT").innerHTML = "";
    return true;
  }
  {
    document.getElementById("errSDT").innerHTML =
      "&nbsp; - Yêu cầu nhập số có 10 chữ số với 2 số đầu là (03, 05, 07, 08, 09) !";
    return false;
  }
}
function checkPassDK() {
  var reg1 = /^[A-Za-z0-9!@#$%^&*()]{6,}$/;
  var mkhau1 = document.getElementById("passdk").value;
  if (reg1.test(mkhau1)) {
    document.getElementById("errPassDK").innerHTML = "";
    return true;
  } else {
    document.getElementById("errPassDK").innerHTML =
      "&nbsp; - Yêu cầu mật khẩu tối thiểu 6 ký tự !";
    return false;
  }
}
function ktratrung() {
  var mkhau1 = document.getElementById("passdk").value;
  var mkhau2 = document.getElementById("cfpassdk").value;
  if (mkhau1 == mkhau2) {
    document.getElementById("errCfPassDK").innerHTML = "";
    return true;
  } else {
    document.getElementById("errCfPassDK").innerHTML =
      "&nbsp; - Các mật khẩu đã nhập không khớp. Hãy thử lại.";
    return false;
  }
}
function kiemTraTen() {
  var reg = /^[A-Z]{1}[a-zA-Z ]*$/;
  var ten = document.getElementById("namedk").value;
  if (reg.test(ten)) {
    document.getElementById("errHoTen").innerHTML = "";
    return true;
  }
  {
    document.getElementById("errHoTen").innerHTML =
      "&nbsp - Yêu cầu nhập chữ cái đầu in hoa !";
    return false;
  }
}
function kiemTraTenContact() {
  var reg = /^[A-Z]{1}[a-zA-Z ]*$/;
  var ten = document.getElementById("nameContact").value;
  if (reg.test(ten)) {
    document.getElementById("errHoTen").innerHTML = "";
    return true;
  }
  {
    document.getElementById("errHoTen").innerHTML =
      "&nbsp - Yêu cầu nhập chữ cái đầu in hoa !";
    return false;
  }
}
function checkTaiKhoan() {
  var reg = /^[A-Za-z]{2,30}[^ ]$/;
  var taikhoan = document.getElementById("taikhoandk").value;
  if (reg.test(taikhoan)) {
    document.getElementById("errTaiKhoan").innerHTML = "";
    return true;
  }
  {
    document.getElementById("errTaiKhoan").innerHTML =
      "- Viết liền - 3 ký tự trở lên!";
    return false;
  }
}
// Submit form ĐK
function sendInfo() {
  var ten = document.getElementById("namedk").value;
  if (ten == "") {
    alert("Họ tên không được để trống!");
  }
  var taikhoan = document.getElementById("taikhoandk").value;
  if (taikhoan == "") {
    alert("Tài khoản không được để trống!");
  }
  var email = document.getElementById("emaildk").value;
  if (email == "") {
    alert("Email không được để trống!");
  }
  var pass = document.getElementById("passdk").value;
  if (pass == "") {
    alert("Password không được để trống!");
  }
  var phone = document.getElementById("phonedk").value;
  if (phone == "") {
    alert("Số điện thoại không được để trống!");
  }
  var dc = document.getElementById("addressdk").value;
  if (dc == "") {
    alert("Địa chỉ không được để trống!");
  }
  var city = document.getElementById("SystemCityID");
  var strCity = city.options[city.selectedIndex].value;
  var lang = "";
  var gt = document.getElementsByName("gt");
  for (i = 0; i < gt.length; i++) {
    if (gt[i].checked) {
      lang = gt[i].value;
      break;
    }
  }
  if (lang == "") {
    alert("Bạn hãy chọn giới tính!");
  }
  var x = `
  <tr>
         <td>${ten}</td>
         <td>${taikhoan}</td>
         <td>${email}</td>
         <td>${pass}</td>
         <td>${phone}</td>
         <td>${dc}</td>
         <td>${strCity}</td>
         <td>${lang}</td>
  </tr>`;
  if (
    ten != "" &&
    taikhoan != "" &&
    email != "" &&
    pass != "" &&
    phone != "" &&
    dc != "" &&
    lang != "" &&
    strCity != ""
  ) {
    $("#table_assign").append(x);
  }
}
