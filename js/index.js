const btn = document.querySelector('.drop');
const display = document.querySelector('nav');

btn.addEventListener('click', (e) => {

  if(display.style.display === 'none') {
    display.style.display = 'block';
  } else {
    display.style.display = 'none';
  }
  
});