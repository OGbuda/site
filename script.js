


$(document).ready(function() {
	$('.burger').click(function(event) {
		$('.burger,.menu').toggleClass('active');
	});
});


window.onload=function(){
let offset = 0; // смещение от левого края
const sliderLine = document.querySelector('.slider_line');

document.querySelector('.slider_next').addEventListener('click', function(){
	offset += 356;
	if (offset > 768){
		offset = 0;
	}
	sliderLine.style.left = -offset + 'px'
});


document.querySelector('.slider_prev').addEventListener('click', function(){
	offset -= 356;
	if (offset < 0){
		offset = 768;
	}
	sliderLine.style.left = -offset + 'px'
});

}








       