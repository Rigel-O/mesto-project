const profileEditButton = document.querySelector('.profile__button_func_change-data');
const profileAddButton = document.querySelector('.profile__button_func_add-image');
const closeButton = document.querySelectorAll('.popup__close-button');
const submitButton = container.querySelectorAll('.popup__submit-button');

profileEditButton.addEventListener('click', function() {
  const profileEditData = document.querySelector('.popup_profile');
	profileEditData.classList.add ('popup_opened');
	}
);

profileAddButton.addEventListener('click', function() {
  const profileAddData = document.querySelector('.popup_new-card');
	profileAddData.classList.add ('popup_opened');
	}
);

closeButton.forEach(closeButton => {
	closeButton.addEventListener('click', () => {
		let Popup = closeButton.closest ('.popup');
		Popup.classList.remove ('popup_opened');
	});
});

submitButton.forEach(submitButton =>{
  submitButton.addEventListener ('submit', () => {
    evt.preventDefault();
    const firstForm = submitButton.closest('.popup__form-item_type_first');
    const secondForm = submitButton.closest('.popup__form-item_type_second');
		
	addCard(artist.value, title.value);
	firstForm.value = '';
	secondForm.value = '';	
  });
});



function addCard (firstFormValue, secondFormValue) {
	const newCard = document.querySelector('#cardTemplate').content;
	const newCardClone = newCard.querySelector('.elements__card').cloneNode(true);
	newCardClone.querySelector('.elements__image').src=secondFormValue;
	newCardClone.querySelector('.elements__name').textContent=firstFormValue;
	newCardClone.querySelector('.elements__image').src=url;
	newCardClone.querySelector('.elements__image').src=url;

};

