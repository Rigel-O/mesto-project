const profileEditButton = document.querySelector('.profile__button_func_change-data');
const profilePopup = document.querySelector('.popup_profile');
const profileAddButton = document.querySelector('.profile__button_func_add-image');
const cardPopup = document.querySelector('.popup_new-card');
const imagePopup = document.querySelector('.popup_image');
const closeButtons = document.querySelectorAll('.popup__close-button');
const newCard = document.querySelector('#cardTemplate').content;
const profileForm = document.forms.profile;
const cardForm = document.forms.add_card;
const profileNameForm = document.querySelector('.popup__form-item_profile-name');
const profileJobForm = document.querySelector('.popup__form-item_profile-job');
const cardNameForm = cardForm.elements.picture_name;
const cardSrcForm = cardForm.elements.picture_src;
const elementsList = document.querySelector('.elements__list');
const profileName = document.querySelector('.profile__name');
const profession = document.querySelector('.profile__prof');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const cardContainer = document.querySelector('.elements__list');

//popup opening

profileEditButton.addEventListener('click', function() {
	openPopup(profilePopup);
	profileNameForm.value = profileName.textContent;
	profileJobForm.value = profession.textContent;
	closingWithOverlay(profilePopup);
	closingWithEsc();
});

profileAddButton.addEventListener('click', function() {
	openPopup(cardPopup);
	closingWithOverlay(cardPopup);
	closingWithEsc();
	}
);

function openPicture (caption, image) {
	openPopup(imagePopup);
	popupCaption.textContent = caption;
	popupImage.src = image;
	popupImage.alt = caption;
	closingWithOverlay(imagePopup);
	closingWithEsc();
};

function openPopup (concretePopup) {
	concretePopup.classList.add('popup_opened');
};

cardContainer.addEventListener ('click', (evt) => {
	if (evt.target.classList.contains ('elements__image')) {
		openPicture (evt.target.alt, evt.target.src);
	   } else if (evt.target.classList.contains ('elements__trash')) {
			evt.target.closest('.elements__card').remove();
	   } else if (evt.target.classList.contains ('elements__like')) {
			evt.target.classList.toggle('elements__like_active');
	   }; 
});

//popup closing

function closePopup (concretePopup) {
	concretePopup.classList.remove('popup_opened');
	removeListeners (concretePopup);
};

function removeListeners (concretePopup) {
	concretePopup.removeEventListener ("click", targetingOverlay);
	concretePopup.removeEventListener ('keydown', catchPopupWhichEsc);
};

function closingWithEsc () {
	document.addEventListener('keydown', catchPopupWhichEsc);
};

function catchPopupWhichEsc (evt) {
	const actualPopup = document.querySelector('.popup_opened')
	if (evt.key === 'Escape'){
		closePopup(actualPopup);
	}
};

function closingWithOverlay (concretePopup) {
	concretePopup.addEventListener("click", targetingOverlay);
};

function targetingOverlay (evt) {
	if (evt.currentTarget === evt.target) {
		closePopup(evt.currentTarget.closest('.popup'));
	  };
};

document.addEventListener('click', (evt) => {
	if (evt.target.classList.contains ('popup__close-button')) {
		closePopup(evt.target.closest ('.popup'));
	};	
});

//adding new card

function renderCard (cardName, cardSrc) {
	elementsList.prepend(createCard(cardName, cardSrc));
};

function createCard (cardName, cardSrc) {
	const newCardClone = newCard.querySelector('.elements__card').cloneNode(true);

	newCardClone.querySelector('.elements__image').src=cardSrc;
	newCardClone.querySelector('.elements__image').alt=cardName;
	newCardClone.querySelector('.elements__name').textContent=cardName;
	
	return newCardClone;
};

// edit profile

function profileEdit (name, job) {
	profileName.textContent = name;
	profession.textContent = job;
};

//form card submit

cardForm.addEventListener ('submit', function (evt) {
	evt.preventDefault();
	renderCard(cardNameForm.value, cardSrcForm.value);
	cardForm.reset();
	closePopup(cardPopup);
});

//form profile submit

profileForm.addEventListener ('submit', function (evt) {
	evt.preventDefault();
	profileEdit(profileNameForm.value, profileJobForm.value);
	closePopup(profilePopup);
});

//validation



//initial cards

for (let i = 0; i<initialCards.length; i=i+1){
	renderCard(initialCards[i]['name'], initialCards[i]['link']);
};