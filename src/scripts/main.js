'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const largeImg = document.getElementById('largeImg');
  const thumbs = document.getElementById('thumbs');

  thumbs.addEventListener('click', (e) => {
    e.preventDefault(); // Забороняємо перехід по посиланню

    const target = e.target;

    if (target.tagName === 'IMG' && target.closest('a')) {
      const link = target.closest('a');
      const newSrc = link.getAttribute('href');

      largeImg.setAttribute('src', newSrc);
      largeImg.setAttribute('alt', link.getAttribute('title'));
    }
  });
});
