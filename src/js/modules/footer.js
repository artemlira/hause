
const wrapper = document.querySelector('.slider');
const title = wrapper.querySelectorAll('.spoiler__title');
const block = wrapper.querySelectorAll('.spoiler__block');
const submit = document.querySelector('.submit');

submit.addEventListener('click', (e) => {
   e.preventDefault();
});

export function accardion() {
   block.forEach(item => {
      item.classList.add('hidden');
   });

   title.forEach(item => {
      item.addEventListener('click', (e) => {
         let target = e.target;
         target.nextElementSibling.classList.toggle('hidden');
         console.dir(target);

      });
   });

}



