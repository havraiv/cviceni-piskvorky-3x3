import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

const hra = document.querySelectorAll('.hra');

hra.forEach((herniPole) => {
  const policko = herniPole.querySelectorAll('.policko');
  const vysledek = herniPole.querySelector('.vysledek');
  const vsechnaPolicka = Array.from(policko);

  const obsahPolicek = vsechnaPolicka.map((symbol) => {
    if (symbol.classList.contains('kolecko')) {
      return 'o';
    }
    if (symbol.classList.contains('krizek')) {
      return 'x';
    }
    if (symbol.classList.contains('nic')) {
      return '_';
    }
  });

  const vitez = findWinner(obsahPolicek);

  if (vitez === 'o') {
    vysledek.textContent = 'Vyhrálo kolečko!';
  }
  if (vitez === 'x') {
    vysledek.textContent = 'Vyhrál křížek!';
  }
  if (vitez === 'tie') {
    vysledek.textContent = 'Remíza!';
  }
  if (vitez === null) {
    vysledek.textContent = 'Hra ještě probíhá.';
  }
});
