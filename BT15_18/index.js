var arrTodo = [];

function addProduct(index) {
  var tr = document.querySelector(".danhSach").querySelectorAll("tr");
  var product = tr[index + 1].querySelector(".product").innerText;
  var price = tr[index + 1].querySelector(".price").innerText;
  var number = tr[index + 1].querySelector("input").value;
  var todo = {
    product: product,
    number: +number,
    price: price
  };
  if (arrTodo.length === 0) {
    arrTodo.push(todo);
  } else {
    for (var i = 0; i < arrTodo.length; i++) {
      if (arrTodo[i].product === todo.product) {
        arrTodo[i].number = arrTodo[i].number * 1 + todo.number * 1;
        break;
      }
      if (i === arrTodo.length - 1) {
        arrTodo.push(todo);
      }
    }
  }

  tr[index + 1].querySelector("input").value = 1;

  gender();
}
function gender() {
  document.querySelector(".gioHang").innerHTML = `<h1>GIỎ HÀNG</h1>
      <table>
        <table class="list"></table>
        <button class="btn-update" onclick="update()">UpDate</button>
        <button class="btn-delete" onclick="deleteGioHang()">Delete</button>
      </table>`;
  document.querySelector(".btn-update").style.display = `inline-block`;
  document.querySelector(".btn-delete").style.display = `inline-block`;
  document.querySelector(".gioHang").style.display = `block`;
  var list = document.querySelector(".list");
  var a = ``;
  var sumNumber = 0;
  var sumPrice = 0;
  for (var i = 0; i < arrTodo.length; i++) {
    a += `<tr>
                        <td>${i + 1}</td>
                        <td>${arrTodo[i].product}</td>
                        <td>${arrTodo[i].price}</td>
                        <td><input type="text" value=${+arrTodo[i].number}></td>
                        <td>${arrTodo[i].number * arrTodo[i].price}</td>
                        <td><button onclick="removeProduct(${i})">Xoá</button></td>
                        
                    </tr>`;
    sumNumber += +arrTodo[i].number;
    sumPrice += arrTodo[i].number * arrTodo[i].price;
  }
  list.innerHTML =
    `<tr>
            <td class="bold-center">STT</td>
            <td class="bold-center">Tên sản phẩm</td>
            <td class="bold-center">Giá</td>
            <td class="bold-center">Số lượng</td>
            <td class="bold-center">Thành tiền</td>
            <td class="bold-center">Xoá</td>
          </tr>` +
    a +
    `<tr>
        <td colspan="3">Tổng</td>
        <td>${sumNumber}</td>
        <td colspan ="2">${sumPrice}</td>
        
    </tr>`;
}
function removeProduct(i) {
  arrTodo.splice(i, 1);
  gender();
}
function update() {
  var input = document.querySelector(".gioHang").querySelectorAll("input");
  for (var i = 0; i < arrTodo.length; i++) {
    var a = 1 * input[i].value;
    arrTodo[i].number = a;
  }
  gender();
}
function deleteGioHang() {
  arrTodo = [];

  document.querySelector(
    ".gioHang"
  ).innerText = `Giỏ hàng đã được xoá thành công`;
}
