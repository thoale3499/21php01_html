var n = 4;
var count = 1;
var i,j;
for (i=n;i>0;i--){
	for (j=i;j<n+1;j++){
		document.write("   "+count);
		count++;
	}
	document.write("<br/>");
}
