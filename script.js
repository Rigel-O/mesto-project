const profileEditButton = document.querySelector('.profile__button_func_change-data');
const profileAddButton = document.querySelector('.profile__button_func_add-image');
let closeButton = document.querySelector('.popup__close-button');




profileEditButton.addEventListener('click', function() {
  let profileEditData = document.querySelector('.popup_profile');
	profileEditData.classList.add ('popup_opened');
	if (profileEditData.classList.contains ('popup_opened') === true) {
		let closeButton = profileEditData.querySelector('.popup__close-button');
		closeButton.addEventListener('click', function() {
			let popup = document.querySelector('.popup_profile');
			popup.classList.remove ('popup_opened');
		});
	};
});

profileAddButton.addEventListener('click', function() {
  let profileAddData = document.querySelector('.popup_new-card');
	profileAddData.classList.add ('popup_opened');
	if (profileAddData.classList.contains ('popup_opened') === true) {
		let closeButton = profileAddData.querySelector('.popup__close-button');
		closeButton.addEventListener('click', function() {
			let popup = document.querySelector('.popup_new-card');
			popup.classList.remove ('popup_opened');
		});
	};
});

