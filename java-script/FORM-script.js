const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', (e) => {
	e.preventDefault();
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', (e) => {
	e.preventDefault();
	container.classList.remove("right-panel-active");
});


const orgSignUp = document.querySelector('#org-sign-up');
const orgSignIn = document.querySelector('#org-sign-in');
const emailIn = document.querySelector('#email-in');
const passIn = document.querySelector('#pass-in');
const nameUp = document.querySelector('#name-up');
const emailUp = document.querySelector('#email-up');
const passUp = document.querySelector('#pass-up');
const passMsg = document.querySelector('#pass-msg');

// -----------------------SIGN IN VALIDATION---------------------------//

orgSignIn.addEventListener('click', (e) => {
	e.preventDefault();
	if (emailIn.value === '') {
		emailIn.style.outline = '1px solid rgba(225, 25, 25, .5)';
	}
	else if (passIn.value === '') {
		passIn.style.outline = '1px solid rgba(225, 25, 25, .5)';
	}
	else{
		alert("Succesfully Signed In");
		emailIn.value = '';
		passIn.value = '';

	}
})



emailIn.addEventListener('click', () => {
	emailIn.style.outline = 'none';
})

passIn.addEventListener('click', () => {
	passIn.style.outline = 'none';
})



// -----------------------SIGN UP VALIDATION---------------------------//

orgSignUp.addEventListener('click', (e) => {
	e.preventDefault();
	if (nameUp.value === '') {
		nameUp.style.outline = '1px solid rgba(225, 25, 25, .5)'
	}
	else if (emailUp.value === '') {
		emailUp.style.outline = '1px solid rgba(225, 25, 25, .5)'
	}
	else if (passUp.value === '') {
		passUp.style.outline = '1px solid rgba(225, 25, 25, .5)'
	}
	else if (passUp.value.length < 8){
		passMsg.classList.add('error');
		passMsg.innerHTML = 'pssword must be greater than 8 characters';
		passUp.style.outline = '1px solid rgba(225, 25, 25, .5)'
	}
	else{
		
		emailUp.value = '';
		passUp.value = '';
		nameUp.value = '';
		alert("Created Your Account");
	}

nameUp.addEventListener('click', () => {
	nameUp.style.outline = 'none';
})

emailUp.addEventListener('click', () => {
	emailUp.style.outline = 'none';
})

passUp.addEventListener('click', () => {
	passUp.style.outline = 'none';
	passMsg.classList.remove('error');
	passMsg.innerHTML = ' ';
})


})