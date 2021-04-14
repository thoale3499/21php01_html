const form = document.getElementById('myForm');
const myName = document.getElementById('name');
const myEmail = document.getElementById('email');
const td = document.getElementById('tieude');
const nd = document.getElementById('noidung');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = myName.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(myName, 'Username cannot be blank');
	} 
	
	

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	small.innerText = message;
}

