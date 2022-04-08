const buttonMenu = document.querySelector('.menu__button');
const popupMenu = document.querySelector('.popup');
const buttonClosePopup = document.querySelector('.button-close');
const linkContainerPopup = document.querySelector('.popup__links');
const imageArray = document.querySelectorAll('.photos__card');

function closePopup() {
    popupMenu.classList.remove('popup-visible');
}

function ChangeGridPicture() {
    let a = Math.round(Math.random() * 7);
    let b = Math.round(Math.random() * 5 + 8);
    let aClass = imageArray[a].classList[1];
    let bClass = imageArray[b].classList[1];
    imageArray[a].classList.remove(imageArray[a].classList[1]);
    imageArray[b].classList.remove(imageArray[b].classList[1]);
    imageArray[a].classList.add(bClass);
    imageArray[b].classList.add(aClass);
}
function Change3GridPictures() {    
    for (let i=0; i<3; i++) {
        setTimeout(ChangeGridPicture, 300);
    }
}

buttonMenu.addEventListener('click', function () {
    popupMenu.classList.add('popup-visible');
});
buttonClosePopup.addEventListener('click', closePopup);
linkContainerPopup.addEventListener('click', closePopup);

setInterval(Change3GridPictures, 1000);