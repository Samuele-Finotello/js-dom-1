const button = document.getElementById('interruttore');
const lampOff = document.getElementById('lampOff');
const lampOn = document.getElementById('lampOn');

button.addEventListener('click', function () {
  if (lampOff.classList.contains('display-inline-block')) {
    lampOff.classList.add('display-none');
    lampOff.classList.remove('display-inline-block');
    lampOn.classList.add('display-inline-block');
    lampOn.classList.remove('display-none');
  }
  else {
    lampOff.classList.remove('display-none');
    lampOff.classList.add('display-inline-block');
    lampOn.classList.remove('display-inline-block');
    lampOn.classList.add('display-none');
  }
});
