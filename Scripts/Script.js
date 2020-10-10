let menubtn = document.getElementsByClassName('bentomenu')[0];
let menu = document.querySelector('.navmenu');

let clicked = false;
menubtn.addEventListener('click', function () {
	if (clicked == false) {
		menubtn.classList.add('close')
		menu.classList.add('appear');
		clicked = true;
	} else {
		clicked = false;
		menu.classList.remove('appear');
		menubtn.classList.remove('close')
	}
});
