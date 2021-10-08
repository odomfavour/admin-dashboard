const sidenavOpenButton = document.querySelector('#top__nav__toggle');
const sidenav = document.querySelector('#side-nav');
const sideNavCloseButton = document.querySelector('#body__click');

sidenavOpenButton.addEventListener('click', () => {
    console.log('here')
    // body.classList.add('body__active');
    sidenav.classList.add('sidenav__active');
    sidenav.classList.remove('sidenav__unactive');
    sideNavCloseButton.classList.add('body__click__active');
});

sideNavCloseButton.addEventListener('click', () => {
    sidenav.classList.add('sidenav__unactive');
    sideNavCloseButton.classList.remove('body__click__active');
});