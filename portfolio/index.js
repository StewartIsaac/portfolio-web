const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
const smallMenu = document.querySelector('.header__sm-menu');
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
);
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link');

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active');
  } else {
    smallMenu.classList.add('header__sm-menu--active');
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
  } else {
    headerHamMenuBtn.classList.add('d-none');
    headerHamMenuCloseBtn.classList.remove('d-none');
  }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active');
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
  });
}

const headerLogoConatiner = document.querySelector('.header__logo-container');

headerLogoConatiner.addEventListener('click', () => {
  location.href = '/';
});

window.onload = function () {
  const overlay = document.getElementById('form-overlay');
  const overlayMessage = document.getElementById('overlay-message');
  const overlayIcon = document.getElementById('overlay-icon');
  const closeOverlay = document.getElementById('close-overlay');

  const successSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4caf50" width="100px" height="100px">
      <circle cx="12" cy="12" r="10" fill="#4caf50"/>
      <path d="M10 14.17l5.88-5.88 1.42 1.41L10 16.99 6.71 13.7l1.42-1.42L10 14.17z" fill="#fff"/>
    </svg>
  `;

  const errorSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f44336" width="100px" height="100px">
      <circle cx="12" cy="12" r="10" fill="#f44336"/>
      <line x1="8" y1="8" x2="16" y2="16" stroke="#fff" stroke-width="2"/>
      <line x1="16" y1="8" x2="8" y2="16" stroke="#fff" stroke-width="2"/>
    </svg>
  `;

  document
    .getElementById('contact-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      emailjs
        .sendForm('Portfolio Website', 'template_p4za2tj', '#contact-form')
        .then(
          () => {
            // Show success overlay
            overlayIcon.innerHTML = successSVG;
            overlayMessage.textContent =
              'Your message has been sent. I will get back to you as soon as possible!';
            overlay.classList.remove('hidden');
          },
          (error) => {
            // Show error overlay
            overlayIcon.innerHTML = errorSVG;
            overlayMessage.textContent =
              'Oops... Your message did not go through. Please try again.';
            overlay.classList.remove('hidden');
            console.error('FAILED...', error);
          }
        );
    });

  // Close overlay
  closeOverlay.addEventListener('click', () => {
    overlay.classList.add('hidden');
  });
};
