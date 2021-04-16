//var StudentList = [['Thoa',22,'kimthoa@gmail.com','0389926111'],
					//['Huong',21,'diemhuong@gmail.com','0389926112'],
					//['Huy',22,'huy@gmail.com','0389926113'],
					//['Tuan',22,'tuan@gmail.com','0389926111']];

//for(var i=1; i<=StudentList.length;i++)
	//document.write(i + "- " +StudentList[i][0] +"<br>");
var listStudent = [];
class Student{
	id;
	fullname;
	age;
	email;
	address;
}
function addStudent(){
	std = new Student();
	std.id = document.getElementById("stt").value;
	std.fullname = document.getElementById("name").value;
	std.age = document.getElementById("age").value;
	std.em = document.getElementById("email").value;
	std.ad = document.getElementById("address").value;

		this.listStudent.push(std);
		display();
		
}
function display(){
	var list = this.listStudent;
	var table ='<table border="1" cellpadding="5"><thead><tr><th>STT</th><th>Họ và tên</th><th>Tuổi</th><th>Email</th><th>Quê quán</th><th>     </th><th>     </th></tr></thead><tbody>';
	
	for (i = 0; i<list.length; i++)//độ rộng trong số pt của listStudent
	{
		table += '<tr>';
		table += '<td>' + listStudent[i].id +'</td>';
		table += '<td>' + listStudent[i].fullname +'</td>';
		table += '<td>' + listStudent[i].age +'</td>';
		table += '<td>' + listStudent[i].em +'</td>';
		table += '<td>' + listStudent[i].ad +'</td>';
		table += '<td><button onclick = "update(' + (listStudent.length -1) +');">Sửa </button></td>';
		table += '<td><button onclick = "remove(' + listStudent[i].id +');">Xóa </button></td>';
		table += '</tr>';
	}
	table+= '</tbody></table>';
	document.getElementById("output").innerHTML = table;
}
function remove(id){
	var list = this.listStudent;
	for (var i = 0;  i<list.length; i++){
		if (list[i].id == id) {
			if (list[i].age > 23 && list[i].age < 26) {
				list.splice(i,1);
				display();
			}else
				alert('Học viên này không nằm trong độ tuổi từ 23-26');
		}
		return true;
	}
}
var currIndex = -1; //chưa chọn pt nào
function update(index){
	currIndex = index;
	var list = this.listStudent[index];
	 document.getElementById("stt").value = list.id ;
	 document.getElementById("name").value = list.fullname ;
	 document.getElementById("age").value = list.age; 
	 document.getElementById("email").value = list.em ;
	 document.getElementById("address").value= list.ad ;
}

