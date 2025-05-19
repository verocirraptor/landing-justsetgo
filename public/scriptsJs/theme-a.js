function setThemeClass(theme) {
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
  localStorage.setItem('theme', theme);

  const img = document.querySelector('.logo-combo');
  if (img) {
    img.src = theme === 'dark' 
      ? '/images/dark-logo-combo.png' 
      : '/images/light-logo-combo.png';
  }
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