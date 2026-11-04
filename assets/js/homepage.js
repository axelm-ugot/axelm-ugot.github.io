(function () {
 const name = document.querySelector('.masthead__menu-item--lg > a');
 const photo = document.querySelector('.author__avatar img');
 if (!name || !photo) return;
 function fitName() {
  name.style.fontSize = '';
  if (window.innerWidth < 1200) return;
  const range = document.createRange();
  range.selectNodeContents(name);
  const width = range.getBoundingClientRect().width;
  const target = photo.getBoundingClientRect().width;
  if (width && target) name.style.fontSize = (parseFloat(getComputedStyle(name).fontSize) * target / width) + 'px';
 }
 new ResizeObserver(fitName).observe(photo);
 window.addEventListener('resize', fitName);
 document.fonts.ready.then(fitName);
 fitName();
})();
