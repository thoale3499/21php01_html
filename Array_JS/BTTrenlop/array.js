//var myArray = {"Nam","Nguyen","Huy"};
//var myArray2 = {"Nam","Nguyen","Huy","Nam","Nguyen","Huy","Nam","Nguyen","Huy"};
//console.log(myArray);
//console.log(myArray.length);
//console.log(myArray[0]);
//console.log(myArray[1]);

//In mảng trên ra màn hình
//1.Nam
//2.Nguyen
//3.Huy
///for (var i = 0; i < myArray.length; i++){
	//document.write(i+1 + ". " +myArray[i] +"<br>");
//}

//

var array = [1,4,2,5,8,2,11,55,5,116];
var temp;
var i,j;
//var lengthString =  array.length;
//console.log(lengthString); //độ dài của chuỗi
for (i=0; i<array.length-1;i++){
	for (j = i+1; j < array.length; j++) {
		if (array[i] > array[j]) {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
         }
	}
}
document.write(array)
//In ra danh sách trên như sau
//1- Nam - 1998 - nam@yahoo.com - 098595595

