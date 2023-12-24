const mas = document.getElementById('caveza');

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if(scroll_position > 100){
    caveza.style.backgroundColor = 'green';

  } else {
    caveza.style.backgroundColor = '#003349';
  }
})