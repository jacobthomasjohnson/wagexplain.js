const enter = document.querySelector('#enter');
const days = document.querySelector('#days');

const enterClass = document.querySelector('.enter');
const daysClass = document.querySelector('.days');

const results = document.querySelector('.results');

const redo = document.querySelector('.redo');
let resultsShown = false;

const init = function () {

  results.classList.add('hide');
  enterClass.value = '';
  daysClass.value = '';

  window.setTimeout(function () {

    enterClass.focus();
    results.innerText = '';
    enterClass.classList.remove('hide');
    daysClass.classList.remove('hide');
    resultsShown = false;

  }, 500);

}

window.addEventListener('keydown', function (e) {

  if (e.key === 'Enter' || e.keyCode === 13) {

    if (resultsShown) {

      init();

    } else {

      enterClass.classList.add('hide');
      daysClass.classList.add('hide');

      results.innerText = 'You would need to make at least $' + Math.round(enter.value / (days.value * 52) * 100) / 100 + '/hr for ' + daysClass.value + ' hours per week to make $' + enterClass.value + ' per year.';

      window.setTimeout(function () {

        resultsShown = true;
        results.classList.add('fix');
        results.classList.remove('hide');

      }, 500);

    }
  }
});