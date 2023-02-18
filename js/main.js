const mainAction = document.querySelector('#main-action'),
      cars = document.querySelector('#cars'),
      price = document.querySelector('#price'),
      items = document.querySelectorAll('.car-item'),
      form = document.querySelector('.price-form');

// mainAction.addEventListener('click', () => cars.scrollIntoView({behavior: 'smooth'}));
mainAction.addEventListener('click', () => cars.scrollIntoView());

for (let item of items) {
  const button = item.querySelector('.car-item-actions .button');
  button.addEventListener('click', () => {
    price.scrollIntoView();
    form['2'].value = item.querySelector('.car-item-title').textContent;
  });
}

form.querySelector('.button').addEventListener('click', () => {
  if (form['0'].value === '') {
    alert('Введите имя');
  } else if (form['1'].value === '') {
    alert('Введите номер телефона');
  } else if (form['2'].value === '') {
    alert('Введите марку автомобиля');
  } else {
    alert('Спасибо ' + form['0'].value + ', мы Вам позвоним');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  let layer = document.querySelector('.price-image');
  document.addEventListener('mousemove', event => {
    layer.style.transform = 'translate3d(' + ((event.clientX * 0.4) / 8) + 'px, ' + ((event.clientY * 0.4) / 8) + 'px, 0px)';
  });

  const elem = document.querySelector('.main');
  document.addEventListener('scroll', () => {
    elem.style.backgroundPositionX = '0' + (.3 * window.pageYOffset) + 'px';
  });
});