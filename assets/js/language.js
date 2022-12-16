//https://www.youtube.com/watch?v=DG4obitDvUA
//https://stackoverflow.com/questions/228835/best-practice-javascript-and-multilanguage

const gamesDatatest= [
  {
    href: "tjpp.html",
    image: "tjpp",
    name: "The Jackbox Party Pack",
    span: "RELEASED",
    date: "Nov 26, 2014",
    new: "",
    view: ""
  },
  {
    href: "tjpp2.html",
    image: "tjpp2",
    name: "The Jackbox Party Pack 2",
    span: "RELEASED",
    date: "Oct 13, 2015",
    new: "",
    view: ""
  },
  {
    href: "tjpp3.html",
    image: "tjpp3",
    name: "The Jackbox Party Pack 3",
    span: "RELEASED",
    date: "Oct 18, 2016",
    new: "",
    view: ""
  },
  {
    href: "tjpp4.html",
    image: "tjpp4",
    name: "The Jackbox Party Pack 4",
    span: "RELEASED",
    date: "Oct 17, 2017",
    new: "",
    view: ""
  },
  {
    href: "tjpp5.html",
    image: "tjpp5",
    name: "The Jackbox Party Pack 5",
    span: "RELEASED",
    date: "Oct 17, 2018",
    new: "",
    view: ""
  },
  {
    href: "tjpp6.html",
    image: "tjpp6",
    name: "The Jackbox Party Pack 6",
    span: "RELEASED",
    date: "Oct 17, 2019",
    new: "",
    view: ""
  },
  {
    href: "tjpp7.html",
    image: "tjpp7",
    name: "The Jackbox Party Pack 7",
    span: "RELEASED",
    date: "Oct 15, 2020",
    new: "",
    view: ""
  },
  {
    href: "tjpp8.html",
    image: "tjpp8",
    name: "The Jackbox Party Pack 8",
    span: "RELEASED",
    date: "Oct 14, 2021",
    new: "",
    view: ""
  },
  {
    href: "tjps.html",
    image: "tjps",
    name: "The Jackbox Party Starter",
    span: "RELEASED",
    date: "Jun 30, 2022",
    new: "",
    view: ""
  },
  {
    href: "tjpp9.html",
    image: "tjpp9",
    name: "The Jackbox Party Pack 9",
    span: "RELEASED",
    date: "Oct 20, 2022",
    new: "<p data-v-556a942f=\"\" class=\"new\">NEW</p>",
    view: "<p data-v-556a942f=\"\" class=\"cta\">VIEW THIS GAME <svg data-v-556a942f=\"\" class=\"external-icon\" viewBox=\"0 0 200 200\"><path d=\"M185,106c-8.3,0-15,6.7-15,15v44c0,2.8-2.2,5-5,5H35c-2.8,0-5-2.2-5-5V35c0-2.8,2.2-5,5-5h44c8.3,0,15-6.7,15-15S87.3,0,79,0H35C15.7,0,0,15.7,0,35v130c0,19.3,15.7,35,35,35h130c19.3,0,35-15.7,35-35v-44C200,112.7,193.3,106,185,106z\"></path><path d=\"M184,0h-54c-8.3,0-15,6.7-15,15s6.7,15,15,15h18.8L90.4,88.4c-5.9,5.9-5.9,15.4,0,21.2c2.9,2.9,6.8,4.4,10.6,4.4s7.7-1.5,10.6-4.4L170,51.2V70c0,8.3,6.7,15,15,15s15-6.7,15-15V16C200,7.2,192.8,0,184,0z\"></path></svg></p>"
  }
];

const gamesDataee= [
  {
    href: "tjps.html",
    image: "tjps",
    name: "The Jackbox Party Starter",
    span: "RELEASED",
    date: "Jun 30, 2022",
    new: "",
    view: ""
  }
];

const gamesDatalv= [
  {
    href: "",
    image: "TeeKOGame",
    name: "Tee K.O.",
    span: "PĀRTULKOTS",
    date: "~80%",
    new: "",
    view: ""
  }
];

const gamesDatalt= [
  {
    href: "",
    image: "drawful",
    name: "Škicas",
    span: "",
    date: "",
    new: "",
    view: ""
  }
];

const gamesDataen= [
  {
    href: "tjps.html",
    image: "tjps",
    name: "The Jackbox Party Starter",
    span: "RELEASED",
    date: "Jun 30, 2022",
    new: "",
    view: ""
  }
];

function petTemplate(text) {
  return `
    <div data-v-556a942f="" data-v-2ba6adc4="" class="past-game home">
    <a data-v-556a942f="" href="${text.href}" target="_blank" class="card">
      <div data-v-556a942f="" class="image fallback ${text.image}"></div>
      ${text.view}
      <div data-v-556a942f="" class="content">
        <p data-v-556a942f="" class="name">${text.name}</p>
        <p data-v-556a942f="" class="date">
          <span data-v-556a942f="">${text.span}</span>${text.date}
        </p>
      </div>
      ${text.new}
    </a>
  </div>
  `;
}

function petTemplatesad() {
  return `
    <div class="">
      <p data-v-2ba6adc5="" class="lang-nttext">At the moment, we don't have a translation. But you can help join the translation team!</p>
    </div>
    <div data-v-8691596e="" data-v-2ba6adc4="">
      <nav data-v-082a7a6a="" class="nav screen">
        <ul data-v-082a7a6a="" id="clang">
          <li data-v-082a7a6a="">
            <a data-v-082a7a6a="" href="https://discord.gg/TNK3wsHHUW" target="_blank" class="lang-ds">DISCORD SERVER<div data-v-082a7a6a="" style="border: 3px solid var(--bgrecent);" class="indicator"></div></a>
          </li>
        </ul>
      </nav>
    </div>
  `;
}

function petTemplateen() {
  return `
    <style>
      .screenblockeren {
        width: 100%;
        height: 100%;
        background: var(--bgtheme);
        z-index: 1;
        position: fixed;
        opacity: 100;
        visibility: visible;
      }

      .screenblockeren p {
        border: 0;
        font-size: 24px;
        vertical-align: baseline;
        margin: 0;
        padding: 0;
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%) 
      }
    </style>
  `;
}

/*document.getElementById("games").innerHTML = `
  ${gamesenData.map(petTemplate).join("")}
`;*/

// https://qna.habr.com/q/1001843

const langArr = {
  en: {
    ds: 'DISCORD SERVER',
    test: 'Text',
    modaloops: 'Oops...',
    toggleladon: 'TURN ON DARK THEME',
    toggleladoff: 'TURN ON LIGHT THEME',
    modalsubtext: 'At the moment, the site is still not ready. Clicking on "OK" will take you to the English version.',
    havefun: 'What language do you want to have fun in?',
    faq: 'faq',
    news: 'news',
    games: 'games',
    site: 'Site: ',
    titlefaq: 'FAQ',
    titlenews: 'News',
    titlegames: 'Games',
    tjppd: 'Long gone are quiet nights in watching the same old TV shows – The Jackbox Party Pack is here! Experience five fun games in one great pack – giving you the perfect excuse for rounding up friends, family and fellow gamers for a few hours of gaming delight – whatever the day, whatever the occasion. You’re gonna need more than one party for this.',
    download: 'Download translation',
    downloadrn: 'Download translation right now!',
    statust: 'Translated',
    statusdnt: 'Not translated',
    statusip: 'In process',
    ydkj2015: 'You Don\'t Know Jack 2015',
    ydkj2015d: 'The smart-ass trivia show that started it all! Hundreds of all-new twisted trivia questions and everyone’s favorite host!',
    drawful: 'Drawful',
    drawfuld: 'The first installment of the wildly popular drawing game allows you to draw bizarre doodles on your phone or tablet.',
    wordspud: 'Word Spud',
    wordspudd: 'Test your vocabulary chops in the racy-as-you-want-it-to-be fill-in-the-blank word game.',
    lieswatter: 'Lie Swatter',
    lieswatterd: 'Need a game for a big group? Grab yourself or a crowd and play true-or-false with a timer.',
    fibbagexl: 'Fibbage XL',
    fibbagexld: 'The hilarious bluffing game now has 50% more questions added to the original hit game, Fibbage.',
    screenblocker: 'Unfortunately, this screen scale isn\'t supported!',
    nttext: 'At the moment, we don\'t have a translation. But you can help join the translation team!',
  },
  ee: {
    ds: 'DISCORDI SERVER',
    test: 'Tekst',
    modaloops: 'Ups...',
    toggleladon: 'TUME REŽIIM',
    toggleladoff: 'HELE REŽIIM',
    modalsubtext: 'Sait ei ole veel valmis. "OK" nupp suunab sind töötavale inglisekeelsele saidile.',
    havefun: 'Lõbutsege!',
    faq: 'kkk',
    news: 'uudised',
    games: 'mängud',
    site: 'Site: ',
    titlefaq: 'KKK',
    titlenews: 'Uudised',
    titlegames: 'Mängud',
  },
  lv: {
    ds: 'DISCORD SERVERIS',
    test: 'Teksts',
    modaloops: 'Ūps...',
    toggleladon: 'IESLĒGT TUMŠO TĒMU',
    toggleladoff: 'IESLĒGT GAIŠO TĒMU',
    modalsubtext: 'Pašlaik vietne vēl nav gatava. Noklikšķinot uz "OK", tu pārcelsi uz angļu valodas versiju.',
    havefun: 'Izklaidējies!',
    faq: 'buj',
    news: 'jaunumi',
    games: 'spēlēs',
    site: 'Vietne: ',
    titlefaq: 'BUJ',
    titlenews: 'Jaunumi',
    titlegames: 'Spēlēs',
    download: 'Lejupielādēt tulkojumu',
    downloadrn: 'Lejupielādēt tulkojumu tūlīt!',
    statust: 'Tulkots',
    statusdnt: 'Nav tulkots',
    statusip: 'Procesā',
    drawful: 'Zīmurgs',
    screenblocker: 'Diemžēl šī ekrāna skala netiek atbalstīta!',
  },
  lt: {
    ds: 'DISCORDO SERVERIS',
    test: 'Tekstas',
    modaloops: 'Ups...',
    toggleladon: 'TAMSUSIS REŽIMAS',
    toggleladoff: 'ŠVIESUSIS REŽIMAS',
    modalsubtext: 'Tinklalapis šiuo metu nepasiekiamas. Paspaudus "OK" atidarysite versiją anglų kalba.',
    havefun: 'Gero laiko!',
    faq: 'duk',
    news: 'naujienos',
    games: 'žaidimai',
    site: 'Site: ',
    titlefaq: 'DUK',
    titlenews: 'Naujienos',
    titlegames: 'Žaidimai',
    drawful: "Škicas",
  },
  test: {}
};

const langEn = document.querySelector('#lang-en');
const langEe = document.querySelector('#lang-ee');
const langLv = document.querySelector('#lang-lv');
const langLt = document.querySelector('#lang-lt');
const langTest = document.querySelector('#lang-test');
  
langEn.addEventListener('click', setLang.bind(null, 'en'));
langLv.addEventListener('click', setLang.bind(null, 'lv'));
langEe.addEventListener('click', setLang.bind(null, 'ee'));
langLt.addEventListener('click', setLang.bind(null, 'lt'));
langTest.addEventListener('click', setLang.bind(null, 'test'));

function setLang(lang) {
  if (!langArr.hasOwnProperty(lang)) return;
  if (window.hasOwnProperty('localStorage'))
    window.localStorage.setItem('lang', lang);
    for (let key in langArr[lang]) {
      let elem = document.querySelector('.lang-' + key);
      if (elem) {
        elem.textContent = langArr[lang][key];
      }
    }
    if(lang=='en') { 
      document.getElementById("games").innerHTML = `
        ${gamesDataen.map(petTemplateen).join("")}
      `;
    }
    if(lang=='ee') { 
      document.getElementById("games").innerHTML = `
        ${gamesDataee.map(petTemplatesad).join("")}
      `;
    }
    if(lang=='lv') { 
      document.getElementById("games").innerHTML = `
        ${gamesDatalv.map(petTemplate).join("")}
      `;
    }
    if(lang=='lt') { 
      document.getElementById("games").innerHTML = `
        ${gamesDatalt.map(petTemplate).join("")}
      `;
    }
    if(lang=='test') { 
      document.getElementById("games").innerHTML = `
        ${gamesDatatest.map(petTemplate).join("")}
      `;
    }
}
var lang = (window.hasOwnProperty('localStorage') && window.localStorage.getItem('lang', lang)) || 'en';
setLang(lang);

// https://www.youtube.com/watch?v=Yh-9PrbzZAY