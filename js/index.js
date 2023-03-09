function toggleSandwichIcon(x){
	x.classList.toggle("sandwich-active");
	x.nextElementSibling.classList.toggle("sandwich-active");
}