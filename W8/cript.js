//tạo nút, bấm nút gọi hàm
//tương tác với ng dùng, sử lý dữ liệu ng dùng => dùng JavaScript
// Sử dụng ở mức tối đa ở phía ng dùng
function calculate(){
    var a = document.getElementById("a_value").value;
    // tự chuyển kiểu, calculate a!
    var result = 1;
    var output = "result: ";
    for (var i = 1; i<=a; i++){
        result *=i
    }
    document.getElementById("result").innerHTML = output +result;

}