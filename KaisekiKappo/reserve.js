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

  const dateInput = document.getElementById('date');
  const formattedDateSpan = document.getElementById('formattedDate');

  // Función para formatear la fecha
  function formatDateString(dateString) {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1); // Restar un día
    const day = date.toLocaleString('en', { weekday: 'short' });
    const dayOfMonth = date.getDate();
    const month = date.toLocaleString('en', { month: 'long' });
    return `${day}, ${dayOfMonth}, ${month}`;
  }

  // Función para actualizar la fecha formateada cuando se selecciona una fecha nueva
  dateInput.addEventListener('input', function() {
    const selectedDate = this.value;
    const formattedDate = formatDateString(selectedDate);
    formattedDateSpan.textContent = formattedDate;
  });

  formattedDateSpan.addEventListener('click', function() {
    // Mostrar el input de fecha
    dateInput.style.display = 'inline-block';
    // Poner el foco en el input de fecha
    dateInput.click();
});

  // Ocultar el input de fecha cuando se pierde el foco
  dateInput.addEventListener('blur', function() {
    dateInput.style.display = 'none';
    formattedDateSpan.textContent = formatDateString(dateInput.value);
  });

  // Mostrar la fecha de ayer al cargar la
  // Mostrar la fecha de ayer al cargar la página
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 1); // Restar un día
  dateInput.value = currentDate.toISOString().split('T')[0];
  formattedDateSpan.textContent = formatDateString(currentDate);
});
