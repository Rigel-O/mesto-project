const profileEditButton = document.querySelector('.profile__button_func_change-data');
const profilePopup = document.querySelector('.popup_profile');
const profileAddButton = document.querySelector('.profile__button_func_add-image');
const cardPopup = document.querySelector('.popup_new-card');
const imagePopup = document.querySelector('.popup_image');
const closeButtons = document.querySelectorAll('.popup__close-button');
const newCard = document.querySelector('#cardTemplate').content;
const profileForm = document.querySelector('.popup__input-container_profile');
const cardForm = document.querySelector('.popup__input-container_card');
const profileNameForm = document.querySelector('.popup__form-item_profile-name');
const profileJobForm = document.querySelector('.popup__form-item_profile-job');
const cardNameForm = document.querySelector('.popup__form-item_card-name');
const cardSrcForm = document.querySelector('.popup__form-item_card-src');
const elementsList = document.querySelector('.elements__list');
const profileName = document.querySelector('.profile__name');
const profession = document.querySelector('.profile__prof');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

//popup opening/closing

profileEditButton.addEventListener('click', function() {
	openPopup(profilePopup);
	profileNameForm.value = profileName.textContent;
	profileJobForm.value = profession.textContent;
	}
);

profileAddButton.addEventListener('click', function() {
	openPopup(cardPopup);
	}
);

function openPicture (caption, image) {
	openPopup(imagePopup);
	popupCaption.textContent = caption;
	popupImage.src = image;
	popupImage.alt = caption;
};

function openPopup (concretePopup) {
	concretePopup.classList.add('popup_opened');
};

function closePopup (concretePopup) {
	concretePopup.classList.remove('popup_opened');
};

closeButtons.forEach(closeButton => {
	closeButton.addEventListener('click', () => {
		closePopup(closeButton.closest ('.popup'));
	});
});

//adding new card

function renderCard (cardName, cardSrc) {
	elementsList.prepend(createCard(cardName, cardSrc));
};

function createCard (cardName, cardSrc) {
	const newCardClone = newCard.querySelector('.elements__card').cloneNode(true);

	newCardClone.querySelector('.elements__image').src=cardSrc;
	newCardClone.querySelector('.elements__image').alt=cardName;
	newCardClone.querySelector('.elements__image').addEventListener('click', () => {
		openPicture (cardName, cardSrc);		
	});
	newCardClone.querySelector('.elements__name').textContent=cardName;
	newCardClone.querySelector('.elements__trash').addEventListener('click', function (evt) {
		evt.target.closest('.elements__card').remove();
	});
	newCardClone.querySelector('.elements__like').addEventListener('click', function (evt) {
		evt.target.classList.toggle('elements__like_active');
	});

	return newCardClone;
};

// edit profile

function profileEdit (firstFormValue, secondFormValue) {
	profileName.textContent = firstFormValue;
	profession.textContent = secondFormValue;
};

//form card submit

cardForm.addEventListener ('submit', function (evt) {
	evt.preventDefault();
	renderCard(cardNameForm.value, cardSrcForm.value);
	cardNameForm.value = '';
	cardSrcForm.value = '';
	closePopup(cardForm.closest('.popup'));
});

//form profile submit

profileForm.addEventListener ('submit', function (evt) {
	evt.preventDefault();
	profileEdit(profileNameForm.value, profileJobForm.value);
	closePopup(profileForm.closest('.popup'));
});

//initial cards

for (let i = 0; i<initialCards.length; i=i+1){
	renderCard(initialCards[i]['name'], initialCards[i]['link']);
};


