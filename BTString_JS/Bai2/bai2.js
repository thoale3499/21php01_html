var n = prompt ("Nhập chiều cao của tam giác đều: ");
var i,j;
for (i = 1; i<= n; i++){
 	for (j = 1;j <= n-i; j++){
        document.write('&nbsp; ');
 	}
    for (j = 1; j<= i; j++){
		document.write('* ');
    }
     document.write("<br>");
 }

