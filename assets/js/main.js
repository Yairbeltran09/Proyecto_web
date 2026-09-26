document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initAnnouncementBar();
  initPricingToggle();
  initCookieBanner();
  initBackToTop();
  initForms();
  initGreetButton();
});

function initMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

function initAnnouncementBar() {
  const bar = document.querySelector('.announcement-bar');
  const closeButton = document.querySelector('.announcement-bar__close');
  if (!bar || !closeButton) return;

  closeButton.addEventListener('click', () => {
    bar.hidden = true;
  });
}

function initPricingToggle() {
  const buttons = document.querySelectorAll('.pricing__toggle-button');
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((b) => {
        b.classList.remove('is-active');
        b.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('is-active');
      button.setAttribute('aria-pressed', 'true');
    });
  });
}

function initCookieBanner() {
  const banner = document.querySelector('.cookie-banner');
  if (!banner) return;

  if (localStorage.getItem('cookiesAceptadas') === 'true') return;

  banner.hidden = false;
  const [rejectButton, acceptButton] = banner.querySelectorAll('button');

  acceptButton.addEventListener('click', () => {
    localStorage.setItem('cookiesAceptadas', 'true');
    banner.hidden = true;
  });
  rejectButton.addEventListener('click', () => {
    banner.hidden = true;
  });
}

function initBackToTop() {
  const button = document.querySelector('.back-to-top');
  if (!button) return;

  button.style.display = 'none';
  window.addEventListener('scroll', () => {
    button.style.display = window.scrollY > 400 ? 'flex' : 'none';
  });
}

function initForms() {
  document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = form.querySelector('.form__status');
      if (status) {
        status.textContent = '¡Gracias! Te contactaremos pronto.';
      } else {
        alert('¡Gracias por suscribirte!');
      }
      form.reset();
    });
  });
}

function initGreetButton() {
  const actions = document.querySelector('.site-header__actions');
  if (!actions) return;

  const boton = document.createElement('button');
  boton.type = 'button';
  boton.className = 'button greet-button';
  boton.textContent = 'Saludar';

  boton.addEventListener('click', () => {
    alert('¡Hola! Gracias por visitar Soluciones SA.');
  });

  actions.appendChild(boton);
}
