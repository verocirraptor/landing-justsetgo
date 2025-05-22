function setThemeClass(theme) {
  console.log('funca fu');
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
  localStorage.setItem('theme', theme);

  const imgLogo = document.querySelector('.logo-combo');
  if (imgLogo) {
    imgLogo.src = theme === 'dark' 
      ? '/images/dark-logo-combo.png' 
      : '/images/light-logo-combo.png';
  }

  const imgFooter = document.querySelector('.logo-footer');
  if (imgFooter) {
    imgFooter.src = theme === 'dark' 
      ? '/images/logos/logo-dark.png' 
      : '/images/logos/logo.png';
  }

  const imgGitH = document.querySelector('.logo-github');
  if (imgGitH) {
    imgGitH.src = theme === 'dark' 
      ? '/images/rrss/GitHub_dark.svg' 
      : '/images/rrss/GitHub_light.svg';
  }

  const imgInsta = document.querySelector('.logo-insta');
  if (imgInsta) {
    imgInsta.src = theme === 'dark' 
      ? '/images/rrss/Instagram_dark.svg' 
      : '/images/rrss/Instagram_light.svg';
  }

  const blockHero = document.querySelector('.block-hero');
  blockHero.classList.remove('light', 'dark');
  blockHero.classList.add(theme);
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(theme);

  /* const cta = document.querySelectorAll('.cta');
  ctaI.forEach(ctaI => {
  ctaI.classList.remove('light', 'dark');
  cta.classList.add(theme);
}); */

}

function toggleTheme() {
  const current = localStorage.getItem('theme') || 'light';
  const newTheme = current === 'light' ? 'dark' : 'light';

  setThemeClass(newTheme);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setThemeClass(savedTheme);

  // Sincroniza el estado del botón con el tema almacenado
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.checked = savedTheme === 'dark'; // Marca el botón si el tema es oscuro
    btn.addEventListener('change', toggleTheme); // estado del checkbox
  }
});