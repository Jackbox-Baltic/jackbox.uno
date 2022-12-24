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

const newgamesDatatest= [
  {
    title: "Recently translated game",
    href: "tjpp4",
    image: "TeeKOGame",
    name: "Tee K.O.",
    span: "THE JACKBOX PARTY PACK 4",
    date: "December 21, 2022",
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
    href: "tjpp4",
    image: "TeeKOGame",
    name: "Kre K.O.",
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
    span: "STATUS",
    date: "In process",
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

function games(text) {
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

const gamessadDataen= [
  {
    nttext: "At the moment, we don't have a translation. But you can help join the translation team!",
    ds: "DISCORD SERVER"
  }
];

const gamessadDataee= [
  {
    nttext: "Hetkel meil ei ole tõlkeid, aga võid meie tõlketiimiga ühineda!",
    ds: "DISCORDI SERVER"
  }
];

const gamessadDatalv= [
  {
    nttext: "Šobrīd mums nav tulkojuma. Bet tu vari palīdzēt pievienoties tulkošanas komandai!",
    ds: "DISCORD SERVERIS"
  }
];

function gamessad(text) {
  return `
    <div class="">
      <p data-v-2ba6adc5="">${text.nttext}</p>
    </div>
    <div data-v-8691596e="" data-v-2ba6adc4="">
      <nav data-v-082a7a6a="" class="nav screen">
        <ul data-v-082a7a6a="" id="clang">
          <li data-v-082a7a6a="">
            <a data-v-082a7a6a="" href="https://discord.gg/TNK3wsHHUW" target="_blank" class="lang-ds">${text.ds}<div data-v-082a7a6a="" style="border: 3px solid var(--bgrecent);" class="indicator"></div></a>
          </li>
        </ul>
      </nav>
    </div>
  `;
}

function screenblockeren() {
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
        padding: 6px;
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }

      p .tooltiptext {
        visibility: visible;
        width: 1000px;
        color: #fff;
        text-align: center;
        font-weight: 400;
        font-size: var(--spanfs);
        padding: 5px 5px;
        position: fixed;
        z-index: 1;
        top: 100%;
        left: 50%;
        margin-left: -500px;
      }
    </style>
  `;
}

const aboutusen= [
  {
    class: "class=\"ct\"",
    welcome: "Welcome!",
    jackboxbaltic: "<strong>Jackbox Baltic</strong> is the site where we upload unofficial Estonian, Latvian and Lithuanian translations for the games of Jackbox Games, known for being the creators of the Jackbox Party Pack. We are just starting our way into localisation of games, so you can help us by joining our team on the discord server!",
    aboutjg: "About Jackbox Games",
    aboutjgd: "<strong>Jackbox Games</strong> is a small game production studio from Chicago (Illinois). The most famous franchise - You Don't Know Jack - has been released since 1995, and even existed as a TV show. Being a part of Jellyvision, in 2013 the company separated and was named Jackbox Games. In addition to The Jackbox Party Pack franchise, a variety of games are released, for example - Quiplash, Fibbage, Trivia Murder Party.",
    cons: "Contributors",
    ttcons: "Text Translators",
    tecons: "Technical Editor",
    fwcons: "Font Worker",
    gcons: "Graphics",
    sthanks: "Special Thanks",
    cont: "Contact",
    contd: "If you have a question, a suggestion or just want to chat, the best way to get in touch is via:",
    ds: "DISCORD SERVER",
    from: "from",
  }
];

const aboutusee= [
  {
    class: "class=\"ee ct\"",
    welcome: "",
    jackboxbaltic: "<strong>Jackbox Baltic</strong> on veebileht, kuhu me laeme üles mitteametlikud eesti-, läti- ja leedukeelsed tõlked Jackbox Games mängudele, tuntud kui Jackbox Party Pack'i loojad. Oleme alles oma tõlketeekonna alguses, seega võid meile appi tulla meie Discordi serveris!",
    aboutjg: "Mis on Jackbox Games",
    aboutjgd: "<strong>Jackbox Games</strong> on Chicagos asuv väike mängutegijate stuudio. Nende kuulsaim frantsiis - Sa ei tea mitte Essugi - on avaldatud alates 1995. aastast, mille all oli ka kunagi telesaade. 2013. aastal, olles seni olnud osa firmast Jellyvision, registreeris Jackbox Games ennast eraldi firmaks. Lisaks Jackbox Party Pack frantsiisile on stuudio mitmeid erinevaid mänge avaldanud, nende seas Kavalusekott, Luiskard ja Mõrvaviktoriinipralle.",
    cons: "",
    ttcons: "",
    tecons: "",
    fwcons: "",
    gcons: "",
    sthanks: "Suured tänud",
    cont: "Kontakt",
    contd: "Küsimuste või ettepanekute puhul saab ühendust meiega:",
    ds: "DISCORDI SERVER",
    from: "",
  }
];

const aboutuslv= [
  {
    class: "class=\"lv ct\"",
    welcome: "",
    jackboxbaltic: "<strong>Jackbox Baltic</strong> ir vietne, kurā mēs augšupielādējam neoficiālus tulkojumus igauņu, latviešu un lietuviešu valodās Jackbox Games spēlēm (kas ir pazīstami kā Jackbox Party Pack radītāji). Mēs tikai sākam savu ceļu spēļu lokalizācijā, tāpēc tu vari mums palīdzēt, pievienojoties mūsu komandai Discord serverī!",
    aboutjg: "Par Jackbox Games",
    aboutjgd: "<strong>Jackbox Games</strong> ir neliela spēļu ražošanas studija no Čikāgas (Ilinoisas štatā). Slavenākā franšīze - You Don't Know Jack - tika izlaista kopš 1995. gada un pat pastāvēja kā TV šova. Būt par daļu no Jellyvision, 2013. gadā tas atdalījās un tika nosaukts par Jackbox Games. Līdzās The Jackbox Party Pack franšīzei tiek izlaistas dažādas spēles, piemēram - Quiplash, Fibbage, Trivia Murder Party.",
    cons: "Dalībnieki",
    ttcons: "Teksta tulkotāji",
    tecons: "Tehniskais redaktors",
    fwcons: "Fonta darbinieks",
    gcons: "Grafikas darbinieks",
    sthanks: "Īpašs paldies",
    cont: "Kontakts",
    contd: "Ja tev ir kāds jautājums, ieteikums vai vienkārši vēlies aprunāties, vislabāk sazinies, izmantojot:",
    ds: "DISCORD SERVERIS",
    from: "no",
  }
];

const aboutuslt= [
  {
    class: "class=\"lt ct\"",
    welcome: "",
    jackboxbaltic: "",
    aboutjg: "",
    aboutjgd: "",
    cons: "",
    ttcons: "",
    tecons: "",
    fwcons: "",
    gcons: "",
    sthanks: "",
    cont: "",
    contd: "",
    ds: "DISCORDO SERVERIS",
    from: "",
  }
];

function aboutus(text) {
  return `
  <div data-v-2ba6adc4="" class="game_background">
    <div data-v-2ba6adc5="" class="constrain">
      <div data-v-2ba6adc5="" class="top-items">
        <h2 data-v-2ba6adc5="" ${text.class}>${text.welcome}</h2>
        <p data-v-2ba6adc5="" class="ct w">${text.jackboxbaltic}</p>
        <div class="spacer"></div>
      </div>
    </div>
  </div>
  <div data-v-2ba6adc5="" class="recent">
    <div data-v-2ba6adc5="" class="constrain">
      <div data-v-2ba6adc5="" class="top-items">
      <div class="splitter">
          <div class="splittblock">
            <div class="clearfix whitebox">
              <h1 data-v-2ba6adc5="" >${text.aboutjg}</h1>
              <div><img src="/assets/jackboxgames.png" alt="Jackbox Games logo" style="height:250px;margin-left:15px;float:right;"></div>
              <p data-v-2ba6adc5="" >${text.aboutjgd}</p>
            </div>
          </div>
          <div class="splittblock">
            <div class="clearfix whitebox">
              <h1 data-v-2ba6adc5="">${text.cons}</h1>
              <div><img src="/assets/bubs.gif" style="height:250px;margin-left:15px;float:right;"></div>
              <p data-v-2ba6adc5=""><strong>${text.ttcons}</strong>: Alacris <span>(eesti)</span>, Dejelnieks <span>(latviešu)</span>, Vvv <span>(lietuvių)</span></p>
              <p data-v-2ba6adc5=""><strong>${text.tecons}</strong>: Dejelnieks <span>(eesti, latviešu, lietuvių)</span>, Alacris <span>(eesti)</span>, Vvv <span>(lietuvių)</span></p>
              <p data-v-2ba6adc5=""><strong>${text.fwcons}</strong>: Dejelnieks <span>(eesti, latviešu, lietuvių)</span></p></p>
              <p data-v-2ba6adc5=""><strong>${text.gcons}</strong>: Trstnlkr2582 .D <span>(${text.from} Jackbox en español)</span></p>
              <p data-v-2ba6adc5=""><strong>${text.sthanks}</strong>: Trstnlkr2582 .D, Akira896 <span>(${text.from} Jackbox en español)</span>, Erizzle <span>(${text.from} Jackbox Translations DE)</p>
            </div>
          </div>
        </div>
        <div class="spacer"></div>
        <div class="splittblock">
          <div class="clearfix whitebox">
            <h1 data-v-2ba6adc5="" class="ct">${text.cont}</h1>
            <p data-v-2ba6adc5="" class="ct">${text.contd}</p>
            <div data-v-8691596e="" data-v-2ba6adc4="">
              <nav data-v-082a7a6a="" class="nav screen">
                <ul data-v-082a7a6a="" id="clang">
                  <li data-v-082a7a6a="">
                    <a data-v-082a7a6a="" href="https://discord.gg/TNK3wsHHUW" target="_blank" class="lang-ds">${text.ds}<div data-v-082a7a6a="" style="border: 3px solid var(--wvsbbg);" class="indicator"></div></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}

const tjpptest= [
  {
    title: "You Don't Know Jack 2015",
    status: "Not translated",
    image: "ydkj2015",
    description: "The smart-ass trivia show that started it all! Hundreds of all-new twisted trivia questions and everyone’s favorite host!"
  },
  {
    title: "Drawful",
    status: "Not translated",
    image: "drawful",
    description: "The first installment of the wildly popular drawing game allows you to draw bizarre doodles on your phone or tablet."
  },
  {
    title: "Word Spud",
    status: "Not translated",
    image: "wordspud",
    description: "Test your vocabulary chops in the racy-as-you-want-it-to-be fill-in-the-blank word game."
  },
  {
    title: "Lie Swatter",
    status: "Not translated",
    image: "lieswatter",
    description: "Need a game for a big group? Grab yourself or a crowd and play true-or-false with a timer."
  },
  {
    title: "Fibbage XL",
    status: "Not translated",
    image: "fibbagexl",
    description: "The hilarious bluffing game now has 50% more questions added to the original hit game, Fibbage."
  }
];

const tjppee= [
  {
    title: "Sa ei tea mitte Essugi 2015",
    status: "Tõlkimata",
    image: "ydkj2015",
    description: "The smart-ass trivia show that started it all! Hundreds of all-new twisted trivia questions and everyone’s favorite host!"
  },
  {
    title: "Sehkendus",
    status: "Tõlkimata",
    image: "drawful",
    description: "The first installment of the wildly popular drawing game allows you to draw bizarre doodles on your phone or tablet."
  },
  {
    title: "Kuum kartul",
    status: "Tõlkimata",
    image: "wordspud",
    description: "Test your vocabulary chops in the racy-as-you-want-it-to-be fill-in-the-blank word game."
  },
  {
    title: "Valepüüdjad",
    status: "Tõlkimata",
    image: "lieswatter",
    description: "Need a game for a big group? Grab yourself or a crowd and play true-or-false with a timer."
  },
  {
    title: "Luiskarid XL",
    status: "Tõlkimata",
    image: "fibbagexl",
    description: "The hilarious bluffing game now has 50% more questions added to the original hit game, Fibbage."
  }
];

const tjpplv= [
  {
    title: "You Don't Know Jack 2015",
    status: "Nav tulkots",
    image: "ydkj2015",
    description: "The smart-ass trivia show that started it all! Hundreds of all-new twisted trivia questions and everyone’s favorite host!"
  },
  {
    title: "Zīmurgs",
    status: "Nav tulkots",
    image: "drawful",
    description: "The first installment of the wildly popular drawing game allows you to draw bizarre doodles on your phone or tablet."
  },
  {
    title: "Vārdu klīst",
    status: "Nav tulkots",
    image: "wordspud",
    description: "Test your vocabulary chops in the racy-as-you-want-it-to-be fill-in-the-blank word game."
  },
  {
    title: "Meli sitamais",
    status: "Nav tulkots",
    image: "lieswatter",
    description: "Need a game for a big group? Grab yourself or a crowd and play true-or-false with a timer."
  },
  {
    title: "Ausskust XL",
    status: "Nav tulkots",
    image: "fibbagexl",
    description: "The hilarious bluffing game now has 50% more questions added to the original hit game, Fibbage."
  }
];

const tjpplt= [
  {  }
];

function tjpp(text) {
  return `
  <div data-v-556a942f="" data-v-2ba6adc4="" class="past-game home">
    <a data-v-556a942f="" class="card">
      <div data-v-556a942f="" class="content">
          <p data-v-556a942f="" class="name">${text.title}</p>
          <p data-v-556a942f="" class="date">${text.status}</p>
        </div>
      <div data-v-556a942f="" class="image fallback ${text.image}"></div>
      <div data-v-556a942f="" class="content">
          <p data-v-556a942f="" class="text">${text.description}</p>
      </div>
    </a>
  </div>
  `;
}

const test= [
  {}
];

const games2test= [
  {
    title: "Recently translated game(s)",
  }
];

const games2ee= [
  {
    title: "Hiljuti tõlgitud mäng(ud)",
  }
];

const games2lv= [
  {
    title: "Nesen tulkota(ās) spēle(s)",
  }
];

const games2lt= [
  {
    title: "",
  }
];

function games2(text) {
  return `
  <div data-v-2ba6adc4="" class="top-items">
    <h3 data-v-2ba6adc4="">${text.title}</h3>
  </div>
  <div class="centerpls">
    <div id="newgames"></div>
  </div>
  `;
}

const newgamesDataee= [
  {}
];

const newgamesDatalv= [
  {
    href: "tjpp4",
    image: "TeeKOGame",
    name: "Kre K.O.",
    span: "THE JACKBOX PARTY PACK 4",
    date: "2022. gada 21. decembris",
    new: "<p data-v-556a942f=\"\" class=\"new\">JAUNS</p>",
    view: "<p data-v-556a942f=\"\" class=\"cta\">APLŪKOT ŠO SPĒLI <svg data-v-556a942f=\"\" class=\"external-icon\" viewBox=\"0 0 200 200\"><path d=\"M185,106c-8.3,0-15,6.7-15,15v44c0,2.8-2.2,5-5,5H35c-2.8,0-5-2.2-5-5V35c0-2.8,2.2-5,5-5h44c8.3,0,15-6.7,15-15S87.3,0,79,0H35C15.7,0,0,15.7,0,35v130c0,19.3,15.7,35,35,35h130c19.3,0,35-15.7,35-35v-44C200,112.7,193.3,106,185,106z\"></path><path d=\"M184,0h-54c-8.3,0-15,6.7-15,15s6.7,15,15,15h18.8L90.4,88.4c-5.9,5.9-5.9,15.4,0,21.2c2.9,2.9,6.8,4.4,10.6,4.4s7.7-1.5,10.6-4.4L170,51.2V70c0,8.3,6.7,15,15,15s15-6.7,15-15V16C200,7.2,192.8,0,184,0z\"></path></svg></p>"
  }
];

const newgamesDatalt= [
  {}
];

function newgames(text) {
  return `
  <div data-v-556a942f="" data-v-2ba6adc4="" class="past-game home">
    <a data-v-556a942f="" href="${text.href}" target="_blank" class="card">
      <div data-v-556a942f="" class="image fallback ${text.image}"></div>
      ${text.view}
      <div data-v-556a942f="" class="content">
        <p data-v-556a942f="" class="name2">${text.name}</p>
        <p data-v-556a942f="" class="date2">
          <span data-v-556a942f="">${text.span}</span>${text.date}
        </p>
      </div>
      ${text.new}
    </a>
  </div>
  `;
}

const faqtest= [
  {
    faqtext: "Frequently Asked Questions",
    q1: "Why do I get a black screen after installing my translation?",
    a1: "If the screen goes black after installing the translation, it means that your version is pirated. Pirated versions are often outdated and do not have the same file structure as current versions. We can only encourage you to get a legitimate version.",
    q2: "I want to play. Where do I get the room code?",
    a2: "<p>There are two options:</p><ul><li><strong>to start yourself</strong> – you need to buy the game on Steam, install <a href=\"games/index.html\">our translation</a> and then proceed according to <a href=\"/manual.html\">the manual</a>.<!--If there is no company or friends, then look <a href=\"finder.html\">here</a>.--></li><li><!--<a href=\"finder.html\">--><strong>to find someone else's game</strong><!--</a>--> — you DON't need to buy and install the game, just find out the room code and go through <a href=\"https://jackbox.uno\">jackbox.uno</a>, then watch the gameplay where you got the code.</li></ul><p>Once again: the purchased and installed game is needed only by the one who starts (the host).<br>He and the rest of the participants join the game from their browsers (phones, tablets or computers) via <a href=\"https://jackbox.uno\">Jackbox.UNO</a>, you don't need to install anything else.</p>",
    q3: "I bought a Party Pack on the Epic Games Store, how do I download the translation?",
    a3: "Apologies, but we are currently doing translations of the Steam version.",
    q4: "I found an error in one of the translations. Where can I report it?",
    a4: "In the <span class=\"discord\">🔹︙mistakes</span> channel of <a href=\"https://discord.gg/TNK3wsHHUW\">the Discord server</a>. <br> If possible, do not skimp on the details. This makes it easier to find the problem.",
  }
];

const faqee= [
  {
    faqtext: "Korduma Kippuvad Küsimused",
    q1: "Miks on ekraan must peale tõlke allalaadimist?",
    q2: "Sooviks mängida. Kust saab ruumikoodi?",
    q3: "Ostsin Party Packi Epic Games poest, kuidas ma tõlke saan alla laadida?",
    a3: "Hetkel on tõlked saadaval Steami versioonidele.",
    q4: "Ma leidsin tõlkes vea. Kus ma saan sellest teada anda?"
  }
];

const faqlv= [
  {
    faqtext: "Biežāk Uzdotie Jautājumi",
    q1: "Kāpēc pēc tulkojuma instalēšanas parādās melnais ekrāns?",
    a1: "Ja pēc tulkojuma instalēšanas ekrāns kļūst melns, tas nozīmē, ka tava versija ir pirātiska. Pirātiskās versijas bieži vien ir novecojušas, un to failu struktūra nav tāda pati kā pašreizējām versijām. Mēs varam tikai ieteikt iegādāties likumīgu versiju.",
    q2: "Es gribu spēlēt. Kur es varu iegūt telpas kodu?",
    q3: "Es iegādājos Party Pack Epic Games veikalā, kā lejupielādēt tulkojumu?",
    a3: "Atvainojiet, bet pašlaik mēs tulkojam Steam versiju.",
    q4: "Es atradu kļūdu vienā no tulkojumiem. Kur es varu par to ziņot?",
    a4: "<a href=\"https://discord.gg/TNK3wsHHUW\">Discord serverā</a> <span class=\"discord\">🔹︙mistakes</span> kanalā. <br> Ja iespējams, neaizmirsti par detaļām. Tas atvieglo problēmas atrašanu.",
  }
];


const faqlt= [
  {}
];

function faq(text) {
  return `
  <div data-v-2ba6adc4="" class="game_background">
    <div data-v-2ba6adc5="" class="constrain">
      <div data-v-2ba6adc5="" class="top-items">
        <h1 data-v-2ba6adc5="" class="ct">${text.faqtext}</h1>
        <div class="spacer"></div>
      </div>
    </div>
  </div>
  <div data-v-2ba6adc5="" class="recent">
    <div data-v-2ba6adc5="" class="constrain">
      <div data-v-2ba6adc5="" class="top-items"></div>
      <div class="accordion">
        <div class="accordion-item">
          <div class="accordion-item-header">
            ${text.q1}
          </div>
          <div class="accordion-item-body">
            <div class="accordion-item-body-content">
            ${text.a1}
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-item-header">
            ${text.q2}
          </div>
          <div class="accordion-item-body">
            <div class="accordion-item-body-content">
              ${text.a2}
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-item-header">
            ${text.q3}
          </div>
          <div class="accordion-item-body">
            <div class="accordion-item-body-content">
              ${text.a3}
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-item-header">
            ${text.q4}
          </div>
          <div class="accordion-item-body">
            <div class="accordion-item-body-content">
            ${text.a4}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
    screenblocker: 'Unfortunately, this screen scale isn\'t supported!',
    aboutus: 'about us',
    titleaboutus: 'About Us',
    csoon: 'Coming Soon',
    stext: 'Status',
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
    site: 'Kodu: ',
    titlefaq: 'KKK',
    titlenews: 'Uudised',
    titlegames: 'Mängud',
    tjppd: 'Vaiksed õhtud vanu telesarju vaadates on minevik, sest nüüd on võimalik saada endale Jackbox Party Pack! Naudi viis erinevat peomängu ühes - ideaalne vabandus sõprade, pere või muu seltskonna kokkukutsumiseks, et veeta mõni tund lahedalt mängides - sõltumata päevast ja sündmusest. Sul on vaja rohkem kui ühte pidu selleks.',
    download: 'Lae tõlge alla',
    downloadrn: 'Lae tõlge kohe alla!',
    statust: 'Tõlgitud',
    statusdnt: 'Tõlkimata',
    statusip: 'Töös',
    screenblocker: 'Kahjuks seda ekraanisuurust ei toetata!',
    aboutus: 'meist',
    titleaboutus: 'Meist',
    csoon: 'Varsti tulekul',
    stext: 'Staatus',
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
    aboutus: 'par mums',
    titleaboutus: 'Par mums',
    csoon: 'Drīzumā',
    stext: "Statuss",
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
if(langTest){
  langTest.addEventListener('click', setLang.bind(null, 'test'));
}

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
      console.log('English');
      if(document.getElementById("games")){
        document.getElementById("games").innerHTML = `
        ${test.map(screenblockeren).join("")}
      `;
      }
      if(document.getElementById("aboutus")){
        document.getElementById("aboutus").innerHTML = `
          ${aboutusen.map(aboutus).join("")}
        `;
      }
      if(document.getElementById("tjpp")){
        document.getElementById("tjpp").innerHTML = `
          ${test.map(screenblockeren).join("")}
        `;
      }
      if(document.getElementById("faq")){
        document.getElementById("faq").innerHTML = `
        ${test.map(screenblockeren).join("")}
      `;
      }
    }
    if(lang=='ee') {
      console.log('Eesti');
      if(document.getElementById("games")){
        document.getElementById("games").innerHTML = `
          ${gamessadDataee.map(gamessad).join("")}
        `;
      }
      if(document.getElementById("aboutus")){
        document.getElementById("aboutus").innerHTML = `
          ${aboutusee.map(aboutus).join("")}
        `;
      }
      /*
      if(document.getElementById("games2")){
        document.getElementById("games2").innerHTML = `
          ${games2ee.map(games2).join("")}
        `;
      }
      if(document.getElementById("newgames")){
        document.getElementById("newgames").innerHTML = `
          ${newgamesDataee.map(newgames).join("")}
        `;
      }
      */
      if(document.getElementById("faq")){
        document.getElementById("faq").innerHTML = `
          ${faqee.map(faq).join("")}
        `;
      }
      if(document.getElementById("tjpp")){
        document.getElementById("tjpp").innerHTML = `
          ${tjppee.map(tjpp).join("")}
        `;
      }
    }
    if(lang=='lv') {
      console.log('Latviešu');
      if(document.getElementById("games")){
        document.getElementById("games").innerHTML = `
          ${gamesDatalv.map(games).join("")}
        `;
      }
      if(document.getElementById("aboutus")){
        document.getElementById("aboutus").innerHTML = `
          ${aboutuslv.map(aboutus).join("")}
        `;
      }
      /*
      if(document.getElementById("games2")){
        document.getElementById("games2").innerHTML = `
          ${games2lv.map(games2).join("")}
        `;
      }
      if(document.getElementById("newgames")){
        document.getElementById("newgames").innerHTML = `
          ${newgamesDatalv.map(newgames).join("")}
        `;
      }
      */
      if(document.getElementById("faq")){
        document.getElementById("faq").innerHTML = `
          ${faqlv.map(faq).join("")}
        `;
      }
      if(document.getElementById("tjpp")){
        document.getElementById("tjpp").innerHTML = `
          ${tjpplv.map(tjpp).join("")}
        `;
      }
    }
    if(lang=='lt') { 
      console.log('Lietuvių');
      if(document.getElementById("games")){
        document.getElementById("games").innerHTML = `
          ${gamesDatalt.map(games).join("")}
        `;
      }
      if(document.getElementById("aboutus")){
        document.getElementById("aboutus").innerHTML = `
          ${aboutuslt.map(aboutus).join("")}
        `;
      }
      /*
      if(document.getElementById("games2")){
        document.getElementById("games2").innerHTML = `
          ${games2lt.map(games2).join("")}
        `;
      }
      if(document.getElementById("newgames")){
        document.getElementById("newgames").innerHTML = `
          ${newgamesDatalv.map(newgames).join("")}
        `;
      }
      */
      if(document.getElementById("faq")){
        document.getElementById("faq").innerHTML = `
          ${faqlt.map(faq).join("")}
        `;
      }
      if(document.getElementById("tjpp")){
        document.getElementById("tjpp").innerHTML = `
          ${tjpplt.map(tjpp).join("")}
        `;
      }
    }
    if(lang=='test') {
      console.log('Test');
      if(document.getElementById("games")){
        document.getElementById("games").innerHTML = `
          ${gamesDatatest.map(games).join("")}
        `;
      }
      if(document.getElementById("aboutus")){
        document.getElementById("aboutus").innerHTML = `
          ${aboutusen.map(aboutus).join("")}
        `;
      }
      if(document.getElementById("games2")){
        document.getElementById("games2").innerHTML = `
          ${games2test.map(games2).join("")}
        `;
      }
      if(document.getElementById("newgames")){
        document.getElementById("newgames").innerHTML = `
          ${newgamesDatatest.map(newgames).join("")}
        `;
      }
      if(document.getElementById("faq")){
        document.getElementById("faq").innerHTML = `
          ${faqtest.map(faq).join("")}
        `;
      }
      if(document.getElementById("tjpp")){
        document.getElementById("tjpp").innerHTML = `
          ${tjpptest.map(tjpp).join("")}
        `;
      }
    }
}
var lang = (window.hasOwnProperty('localStorage') && window.localStorage.getItem('lang', lang)) || 'en';
setLang(lang);

// https://www.youtube.com/watch?v=Yh-9PrbzZAY