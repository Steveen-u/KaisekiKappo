document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.fa-bars');
  const menuOptions = document.querySelector('.menuOptions');

  menuToggle.addEventListener('click', function() {
    if (menuOptions.style.display === 'none' || menuOptions.style.display === '') {
      menuOptions.style.display = 'block';
    } else {
      menuOptions.style.display = 'none';
    }
  });

});