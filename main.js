document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.hamburger');
  const closeBtn = document.querySelector('.mobile-menu .close');
  const menu = document.querySelector('#mobile-menu');
  const backdrop = document.querySelector('.backdrop');
  const navLinks = menu.querySelectorAll('nav a');
  const year = document.querySelector('#year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const close = () => {
    menu.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    menuBtn.focus();
    setTimeout(() => {
      menu.hidden = true;
    }, 400);
  };

  menuBtn.addEventListener('click', () => {
    menu.hidden = false;
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
    menu.classList.add('is-open');
  });

  closeBtn.addEventListener('click', close);

  navLinks.forEach(link => {
    link.addEventListener('click', close);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
  });
});
