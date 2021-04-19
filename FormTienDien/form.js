//Tạo form nhập tính tiền điện gồm:
//Họ tên khách hàng (text)
//, số đầu kỳ (text)
//, số cuối kỳ (text)
//, giới tính (radio)
//, ngày sinh (date)
//, ngày đầu kỳ (date)
//, ngày cuối kỳ (date)
//1. Tất cả các trường k được để trống
//1. Số đầu kỳ phải nhỏ hơn hoặc bằng số cuối kỳ, số đầu kỳ phải lớn hơn 0, ngày đầu kỳ nhỏ hơn hoặc bằng ngày cuối kỳ
//1. Tính tiền điện: 50 số đầu giá 1000 VND/số, 100 số tiếp theo 2000 VND/số, từ 200 số trở lên sẽ tính giá 3500 VND/số
//1. In ra cái hóa đơn đẹp đẹp cho khách hàng (Nếu khách hàng là nữ thì in hóa đơn màu hồng, là nam thì in ra màu xanh green)
function validate() {
	var name = document.getElementById('name').value;
	var first = document.getElementById('fistnumber').value;
	var last = document.getElementById('lastnumber').value;
	var maleChecked = document.getElementById("male").checked;
    var femaleChecked = document.getElementById("female").checked;
	if (name == ''){
		document.getElementById("errorName").innerText = "Vui lòng nhập tên của bạn";
		document.getElementById("errorName").style.color = "red";
		document.getElementById("errorName").style.fontStyle = "italic";
	} else {
		document.getElementById("errorName").innerText = "";
	}
	
	if (first == ''){
		document.getElementById("errorFistnum").innerText = "Vui lòng nhập số đầu kỳ";
		document.getElementById("errorFistnum").style.color = "red";
		document.getElementById("errorFistnum").style.fontStyle = "italic";
	} else {
		document.getElementById("errorFistnum").innerText = "";
	}
	
	if (last == ''){
		document.getElementById("errorLastnum").innerText = "Vui lòng nhập số cuối kỳ";
		document.getElementById("errorLastnum").style.color = "red";
		document.getElementById("errorLastnum").style.fontStyle = "italic";
	} else {
		document.getElementById("errorLastnum").innerText = "";
	}
	 if (maleChecked == false && femaleChecked == false){
        document.getElementById("errorGender").innerText = "Vui lòng chọn giới tính";
		document.getElementById("errorGender").style.color = "red";
		document.getElementById("errorGender").style.fontStyle = "italic";
    } else{
       document.getElementById("errorGender").innerText = "";
	}
	checkValidate2();
	ElectricityBill();
}
function checkValidate2(){
	var firstNum = document.getElementById("fistnumber").value;
    var lastNum = document.getElementById("lastnumber").value;
    var firstDate = document.getElementById("firstdate").value;
    var lastDate = document.getElementById("lastdate").value;
    if (firstNum <= 0) {
    	alert("Số đầu kỳ phải lớn hơn 0");
    }
    if (firstNum > lastNum ){
        alert("Số đầu kỳ phải nhỏ hơn số cuối kỳ");
    }
    if (firstDate > lastDate){
        alert("Ngày đầu kỳ phải nhỏ hơn hoặc bằng ngày cuối kỳ");
    }
}

function ElectricityBill(){
	var money = 0;
    var firstNum = document.getElementById("fistnumber").value;
    firstNum = parseFloat(firstNum);
    var lastNum = document.getElementById("lastnumber").value;
    lastNum = parseFloat(lastNum);
    var number = lastNum - firstNum;
    if (number <=50){
        money = number*1000;
    } else if (number <= 150){
       money = 50*1000 + (number-50)*2000;
    } else if(number < 200){
    	money = 50*1000 + 100*2000 + (number-150)*2500;
    } else if(number >= 200){
    	money = 50*1000 + 100*2000 + 50*2500 + (number - 200)*3500;
    }
    alert("Tiền điện là: " + money);
}
//var listBill = [];
//function addBill(){
	//var username = document.getElementById("name").value;
	//var first = document.getElementById('fistnumber').value;
	//var last = document.getElementById('lastnumber').value;
    //var dob = document.getElementById("dateOfBirth").value;
    //var firstDate = document.getElementById("firstdate").value;
    //var lastDate = document.getElementById("lastdate").value;
    //var bill = {
    	//"name":username,
    	//"fistnumber":first,
    	//"lastnumber":last,
    	//"dateOfBirth":dob,
    	//"firstdate":firstDate,
    	//"lastdate":lastDate
    //};
    //this.listBill.push(bill);
    //displayBill();
//}
//function displayBill(){
	//var list = this.listBill;
	 //document.getElementById("customerName").innerHTML = "Họ và tên khách hàng: " + document.getElementById("name").value;
     //document.getElementById("customerDOB").innerHTML = "Ngày sinh: "+ document.getElementById("dateOfBirth").value;
     //document.getElementById("customerGender").innerHTML = "Giới tính: " + document.querySelector('input[name="gender"]:checked');
     //var table ='<table border="1" cellpadding="5"><thead><tr><th>Số đầu kỳ</th><th>Số cuối kỳ</th><th>Ngày đầu kỳ</th><th>Ngày cuối kỳ</th><th>Tiền điện (VNĐ)</th></tr></thead><tbody>';
     //for (i = 0; i<list.length; i++)//độ rộng trong số pt của listStudent
	//{
		//table += '<tr>';
		//table += '<td>' + listBill[i].first +'</td>';
		//table += '<td>' + listBill[i].last +'</td>';
		//table += '<td>' + listBill[i].firstdate +'</td>';
		//table += '<td>' + listBill[i].lastdate +'</td>';
		//table += '<td>' + listBill[i].money +'</td>';
		//table += '</tr>';
	//}
	//table+= '</tbody></table>';
	//document.getElementById("output").innerHTML = table;
//}