const more = document.querySelector('.learn__more');
const close = document.querySelector('.close');
const text = document.querySelector('.more__text');

export function showText() {
   more.addEventListener('click', (e) => {
      let target = e.target;
      if (target.matches('.learn__more')) {
         close.classList.remove('hide');
         text.classList.remove('hide');
         more.classList.add('hide');
      }
   });

   close.addEventListener('click', (e) => {
      let target = e.target;
      if (target.matches('.close')) {
         close.classList.add('hide');
         text.classList.add('hide');
         more.classList.remove('hide');
      }
   });
}