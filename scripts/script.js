const profileEditButton = document.querySelector('.profile__button_func_change-data');
const profileAddButton = document.querySelector('.profile__button_func_add-image');
const allPopup = document.querySelectorAll('.popup');
const closeButton = document.querySelectorAll('.popup__close-button');
const form = document.querySelectorAll('.popup__input-container');
const elementsList = document.querySelector('.elements__list');
const profileName = document.querySelector('.profile__name');
const profession = document.querySelector('.profile__prof');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const initialCards = [
	{
		firstForm: 'Архыз',
	  secondForm: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	},
	{
	  firstForm: 'Челябинская область',
	  secondForm: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
	  firstForm: 'Иваново',
	  secondForm: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
	  firstForm: 'Камчатка',
	  secondForm: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
	  firstForm: 'Холмогорский район',
	  secondForm: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
	  firstForm: 'Байкал',
	  secondForm: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
  ]; 
  const profilePrevue = document.querySelector('.popup__form-item_type_first');
  const jobPrevue = document.querySelector('.popup__form-item_type_second');

//popup opening/closing

profileEditButton.addEventListener('click', function() {
	allPopup[0].classList.add ('popup_opened');
	profilePrevue.value = profileName.textContent;
	jobPrevue.value = profession.textContent;
	}
);

profileAddButton.addEventListener('click', function() {
	allPopup[1].classList.add ('popup_opened');
	}
);

function openPicture (caption, image) {
	allPopup[2].classList.add('popup_opened');
	popupCaption.textContent = caption;
	popupImage.src = image;
};

closeButton.forEach(closeButton => {
	closeButton.addEventListener('click', () => {
		let closingPopup = closeButton.closest ('.popup');
		closingPopup.classList.remove ('popup_opened');
	});
});

//adding new card

function addCard (firstFormValue, secondFormValue) {
	const newCard = document.querySelector('#cardTemplate').content;
	const newCardClone = newCard.querySelector('.elements__card').cloneNode(true);

	newCardClone.querySelector('.elements__image').src=secondFormValue;
	newCardClone.querySelector('.elements__image').addEventListener('click', (pic) => {
		openPicture (firstFormValue, secondFormValue);		
});
	newCardClone.querySelector('.elements__name').textContent=firstFormValue;
	newCardClone.querySelector('.elements__trash').addEventListener('click', function (evt) {
		evt.target.closest('.elements__card').remove();
	});
	newCardClone.querySelector('.elements__like').addEventListener('click', function (evt) {
		evt.target.classList.toggle('elements__like_active');
	});

	elementsList.prepend(newCardClone);
};

// edit profile

function profileEdit (firstFormValue, secondFormValue) {
	profileName.textContent = firstFormValue;
	profession.textContent = secondFormValue;
};

//form interpritator

form.forEach(form => {

	const firstForm = form.firstElementChild;
	const secondForm = firstForm.nextElementSibling;
	let Popup = form.closest ('.popup');	

  form.addEventListener ('submit', function (evt) {
		evt.preventDefault();

		if (allPopup[1].classList.contains('popup_opened')===true){
				addCard(firstForm.value, secondForm.value);
				firstForm.value = '';
				secondForm.value = '';
		} else {
			profileEdit(firstForm.value, secondForm.value);
		};	
		
		Popup.classList.remove ('popup_opened');
  });
});

//initial cards

for (let i = 0; i<initialCards.length; i=i+1){
	addCard(initialCards[i]['firstForm'], initialCards[i]['secondForm']);
};


