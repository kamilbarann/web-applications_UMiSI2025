
/* Zegar */
document.addEventListener('DOMContentLoaded', () => {
    const yearE1 = document.getElementById('year')
    if (yearE1) {
        yearE1.textContent = new Date().getFullYear();
    }

    const clockE1 = document.getElementById('clockTime')
    if (clockE1) {
        const pad = (n) => String(n).padStart(2, '0');
        const tick = () => {
            const now = new Date();
            clockE1.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
        };
        tick();
        setInterval(tick, 1000);

    }
    const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('#nav-menu a').forEach((a) => {
        const href = a.getAttribute('href').toLowerCase();
        if ((current === '' && href.endsWith('index.html')) || current === href) {
            a.setAttribute('aria-current', 'page');
        }
    });


    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            navMenu.classList.toggle('show');
        });
    }
});


// Lightbox galerii
const gallery = document.querySelector('.gallery-grid');
if (gallery) {
  gallery.querySelectorAll('img').forEach((img) => {
    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.className = 'lightbox';
      overlay.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
      overlay.addEventListener('click', () => overlay.remove());
      document.body.appendChild(overlay);
    });
  });
}


// Walidacja formularza kontaktowego
const form = document.getElementById('contactForm');
if (form) {
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const success = document.getElementById('formSuccess');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    let ok = true;

    if (!emailRegex.test((emailInput.value || '').trim())) {
      emailError.textContent = 'Podaj poprawny adres e-mail.';
      ok = false;
    } else {
      emailError.textContent = '';
    }

    if ((messageInput.value || '').trim().length < 5) {
      messageError.textContent = 'Wiadomość powinna mieć co najmniej 5 znaków.';
      ok = false;
    } else {
      messageError.textContent = '';
    }

    return ok;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validate()) {
      success.hidden = false;
      form.reset();
      setTimeout(() => { success.hidden = true; }, 2500);
    }
  });

  emailInput.addEventListener('blur', validate);
  messageInput.addEventListener('blur', validate);
}
