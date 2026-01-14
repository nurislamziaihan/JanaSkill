document.getElementById('myButton').addEventListener('click', function() {
  const container = document.getElementById('imageContainer');
  // Переключаем display между 'none' (скрыто) и 'block' (показать)
  if (container.style.display === 'none' || container.style.display === '') {
    container.style.display = 'block';
  } else {
    container.style.display = 'none';
  }
});