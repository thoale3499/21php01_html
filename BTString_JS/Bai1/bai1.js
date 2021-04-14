var n = prompt ("Nhập chiều cao của tam giác cân: ");
var i,j;
document.write('<table border = "0">');
for ( i = 0; i<n; i++){ //Vòng for in theo dòg
	for (j=n-1;j>i;j--){
		document.write('<td>');
		document.write('&nbsp;');
		document.write('</td>');
	}
	for (j=1;j<=i*2-1;j++){//In ra kí tự * tăng dần theo số lẻ
		document.write('<td>');
		document.write('*');
		document.write('</td>');
	}
	document.write('</tr>');
}
document.write('</table>');
