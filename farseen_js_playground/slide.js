/**
 * 
 */
var count = 0, index = 0;
var slides = new Array();
function initSlides() {
	imgs = document.getElementsByTagName("img");
	for (i = 0; i < imgs.length; i++) {
		slides[i] = imgs[i];
		if (0 == i)
			imgs[i].style.display = "block";
		else {
			imgs[i].style.display = "none";
		}
		imgs[i].onclick=nextSlide;
		count++;
	}
}

function nextSlide(){
	slides[index].style.display = "none";
	index++;
	if (index >= slides.length ) index = 0;
	slides[index].style.display = "block";
}

window.onload=initSlides;