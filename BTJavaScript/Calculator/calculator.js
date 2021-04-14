var exp = '', number, decimal, equal, operator, allow = true;
var textview = document.forms['myForm']['textview'];
function insertNum(num){
	if(equal){
		exp = num;
		textview.value = exp;
		number = true;
		equal = false;
	}
	else{
		exp = textview.value + num;
		textview.value = exp;
		number = true;
	}
	if (operator) decimal = false;
}
function insertOp(op){
	textview.value = exp + op;
	operator = true;
	equal = false;
	allow = false;
}
function insertDec(){
	if (number &&! decimal) {
		textview.value = exp + '.';
		decimal = true;
		operator = false;
	}
}
function insertDec1(){
	if (number &&! decimal) {
		textview.value = exp + '(';
		decimal = true;
		operator = false;
	}
}
function insertDec2(){
	if (number &&! decimal) {
		textview.value = exp + ')';
		decimal = true;
		operator = false;
	}
}
function EqualTo(){
	if (exp) {
		exp = eval(exp);
		textview.value = exp;
		equal = true;
		decimal = false;
		number = false;
		allow = true;
	}
}
function remove(){
	exp = '';
	textview.value = exp;
	decimal = false;
}
