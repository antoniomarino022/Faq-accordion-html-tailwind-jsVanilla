const btnPlus = document.querySelectorAll('.plus');
const btnMinus = document.querySelectorAll('.minus');
const risposte = document.querySelectorAll('.answer');

for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].addEventListener('click', () => {
        risposte[i].classList.remove('hidden');
        risposte[i].classList.add('block');
        btnPlus[i].classList.add('hidden');
        btnMinus[i].classList.remove('hidden');
        btnMinus[i].classList.add('block');
    });
}

for (let i = 0; i < btnMinus.length; i++) {
    btnMinus[i].addEventListener('click', () => {
        risposte[i].classList.remove('block');
        risposte[i].classList.add('hidden');
        btnMinus[i].classList.add('hidden');
        btnPlus[i].classList.remove('hidden');
        btnPlus[i].classList.add('block');
    });
}