window.onload=function(){

const signIN = document.querySelector('.signin');
const signUP = document.querySelector('.signup');
const formBox = document.querySelector('.form_box');

signUP.addEventListener('click', function(){
	formBox.classList.add('active');
});

signIN.addEventListener('click', function(){
 	formBox.classList.remove('active');
});

}