const mas = document.getElementById('caveza');

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if(scroll_position > 100){
    caveza.style.backgroundColor = '#003349';
    caveza.style.color = '#fff';
  } else {
    caveza.style.backgroundColor = '#f6f6f6';
    caveza.style.color = '#000';

  }
});