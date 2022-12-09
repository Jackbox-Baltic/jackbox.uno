// https://qna.habr.com/q/1001843
const langArr = {
  en: {
    ds: 'DISCORD SERVER<div data-v-082a7a6a="" class="indicator"></div>',
    test: 'Text',
    modaloops: 'Oops...',
    toggleladon: 'TURN ON DARK THEME',
    toggleladoff: 'TURN ON LIGHT THEME',
    modalsubtext: 'At the moment, the site is still not ready. Clicking on "OK" will take you to the English version.',
    havefun: 'What language do you want to have fun in?',
    faq: 'faq',
    news: 'news',
    games: 'games',
  },

  ee: {
    ds: 'DISCORD SERVER<div data-v-082a7a6a="" class="indicator"></div>',
    test: 'test ee',
    modaloops: 'Ups...',
    toggleladon: '',
    toggleladoff: '',
    modalsubtext: 'Sait ei ole veel valmis. "OK" nupp suunab sind töötavale inglisekeelsele saidile.',
    havefun: '',
    faq: 'faq',
    news: 'news',
    games: 'games',
  },

  lv: {
    ds: 'DISCORD SERVERIS<div data-v-082a7a6a="" class="indicator"></div>',
    test: 'Teksts',
    modaloops: 'Ūps...',
    toggleladon: 'IESLĒGT TUMŠO TĒMU',
    toggleladoff: 'IESLĒGT GAIŠO TĒMU',
    modalsubtext: '',
    havefun: 'Izklaidējies!',
    faq: 'buj',
    news: 'jaunumi',
    games: 'spēlēs',
  },

  lt: {
    ds: 'DISCORD SERVER<div data-v-082a7a6a="" class="indicator"></div>',
    test: 'test lt',
    modaloops: 'Ups...',
    toggleladon: '',
    toggleladoff: '',
    modalsubtext: 'Tinklalapis šiuo metu nepasiekiamas. Paspaudus "OK" atidarysite versiją anglų kalba.',
    havefun: '',
    faq: 'faq',
    news: 'news',
    games: 'games',
},
};
  
const langEn = document.querySelector('#lang-en');
const langEe = document.querySelector('#lang-ee');
const langLv = document.querySelector('#lang-lv');
const langLt = document.querySelector('#lang-lt');
  
langEn.addEventListener('click', setLang.bind(null, 'en'));
langLv.addEventListener('click', setLang.bind(null, 'lv'));
langEe.addEventListener('click', setLang.bind(null, 'ee'));
langLt.addEventListener('click', setLang.bind(null, 'lt'));

function setLang(lang) {
  if (!langArr.hasOwnProperty(lang)) return;
  if (window.hasOwnProperty('localStorage'))
    window.localStorage.setItem('lang', lang);
  for (let key in langArr[lang]) {
    let elem = document.querySelector('.lang-' + key);
    if (elem) {
      elem.innerHTML = langArr[lang][key];
    }
  }
}
var lang = (window.hasOwnProperty('localStorage') && window.localStorage.getItem('lang', lang)) || 'en';
setLang(lang);