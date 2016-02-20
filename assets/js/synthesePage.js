// PAGE 1
//[P786e4654X6847] Bonjour Moussaillons ! BIP Je vous attendais ! BIP
//[Emma] Qui es-tu ?
//[Gladyss] Matricule P786e4654X6847… Gladyss pour les amis. BIP
//[Mathéo] Tu nous attendais ?
//[Gladyss] Oui, BIP, Votre oncle à été emprisonné par le grand poulpe des ombres. BIP.
//[Emma] Serieusement, c’est quoi ce nom ?
//[Gladyss] Peu importe… BIP Le problème, c’est que seul votre Oncle avait le pouvoir de tourner les pages de ce livre, mais étant ses neveux, peut-être pourriez vous essayer ? BIP.
var page1 = [
  {
    'speaker': '???',
    'type': 'audio',
    'dialog': [{
      'file': 'assets/pages/page_1/Gladys_1.mp3',
      'text': 'Bonjour Moussaillons !'
    }, {
      'file': 'assets/audio/BIP1.mp3',
      'text': 'BIP'
    }, {
      'file': 'assets/pages/page_1/Gladys_2.mp3',
      'text': 'Je vous attendais !'
    }, {
      'file': 'assets/audio/BIP2.mp3',
      'text': 'BIP'
    }]
  },
  {
    'speaker': 'Emma',
    'type': 'synthese',
    'dialog': "Qui es-tu ?"
  },
  {
    'speaker': 'Gladyss',
    'type': 'audio',
    'dialog': [{
      'file': 'assets/pages/page_1/Gladys_3.mp3',
      'text': ' Matricule P786e4654X6847… Gladyss pour les amis.'
    }, {
      'file': 'assets/audio/BIP3.mp3',
      'text': 'BIP'
    }]
  },
  {
    'speaker': 'Matheo',
    'type': 'synthese',
    'dialog': "Tu nous attendais ?"
  },
  {
    'speaker': 'Gladyss',
    'type': 'audio',
    'dialog': [{
      'file': 'assets/pages/page_1/Gladys_4.mp3',
      'text': 'Oui'
    }, {
      'file': 'assets/audio/BIP4.mp3',
      'text': 'BIP'
    }, {
      'file': 'assets/pages/page_1/Gladys_5.mp3',
      'text': 'Votre oncle à été emprisonné par le grand poulpe des ombres'
    }, {
      'file': 'assets/audio/BIP1.mp3',
      'text': 'BIP'
    }]
  },
  {
    'speaker': 'Emma',
    'type': 'synthese',
    'dialog': "Serieusement, c’est quoi ce nom ?"
  },
  {
    'speaker': 'Gladyss',
    'type': 'audio',
    'dialog': [{
      'file': 'assets/pages/page_1/Gladys_6.mp3',
      'text': 'Peu importe…'
    }, {
      'file': 'assets/audio/BIP3.mp3',
      'text': 'BIP'
    }, {
      'file': 'assets/pages/page_1/Gladys_7.mp3',
      'text': 'Le problème, c’est que seul votre Oncle avait le pouvoir de tourner les pages de ce livre, mais étant ses neveux, peut-être pourriez vous essayer ?'
    }, {
      'file': 'assets/audio/BIP2.mp3',
      'text': 'BIP'
    }]
  }
]

var pages = [
  page1
]

// update le tag audio
function updateSource(cheminFich) {
  var audio = document.getElementById('audio');

  var source = document.getElementById('mp3Source');
  source.src = cheminFich;


  audio.load(); //call this to just preload the audio without playing
}

// fait parler les enfants
function speakUtterance(idPage, idDial, quiParle, dial) {
  // on modifie le pitch des voix des enfants
  if (quiParle === 'Matheo') {
    utterance.pitch = 0.5;
  } else if (quiParle === 'Emma') {
    utterance.pitch = 1.5;
  } else {
    // au cas où
    utterance.pitch = 1;
  }
  //    console.log('QUI PARLE : ' + quiParle)
  // on lui dit son texte
  utterance.text = dial;

  // au debut, on change les sous titre
  utterance.onstart = function (event) {
    majSubtitles(dial, quiParle);
  }

  // a la fin de ce dialogue, on passe au suivant (next step)
  utterance.onend = function (event) {
    console.info('DIAL FINI ');
    idDial++;
    nextDial(idPage, idDial);
  }

  // on le speak
  window.speechSynthesis.speak(utterance);
}

// fait parler les autres
// test si l'audio est découpé en plusieurs parties (merci Gladyss)
function speakAudio(idPage, idDial, tabDial, idAudio, quiParle) {
  var audio = document.getElementById('audio');
  // chemin du fichier audio
  var file = tabDial[idAudio].file;
  // texte dit
  var text = tabDial[idAudio].text;

  updateSource(file);

  audio.addEventListener('play', function () {
    majSubtitles(text, quiParle);
  });

  audio.addEventListener('ended', function () {
    idAudio++;
    if (idAudio < tabDial.length)
      speakAudio(idPage, idDial, tabDial, idAudio, quiParle);
    else {
      idDial++;
      nextDial(idPage, idDial);
    }
    // enleve le listener (merci google)
    this.removeEventListener('ended', arguments.callee, false);
  });

  audio.play();
}

// TODO méthode pour recup des BIP aléatoirements ?

function nextDial(idPage, idDial) {
  //  console.log('NEXT DIAL');
  var pageCrt = pages[idPage];
  console.info('TEST : ' + idDial);
  console.log('NB : ' + pageCrt.length);
  if (idDial < pageCrt.length) {
    // personne qui parle
    var quiParle = pageCrt[idDial].speaker;
    // type de dialogue (audio ou synthese)
    var type = pageCrt[idDial].type;

    // texte
    var text = '';

    // en fonction du type, on lance l'audio ou la parole
    if (type === 'audio') {
      speakAudio(idPage, idDial, pageCrt[idDial].dialog, 0, quiParle);

    } else if (type === 'synthese') {
      text = pageCrt[idDial].dialog
        // utterance --> si matheo ou emma change de pitch
      speakUtterance(idPage, idDial, quiParle, text);
    }

    // MAJ sous titres onstart
  }
}

// lance les dialogues
function dialPage(id) {
  //  var pageCrt = pages[id];

  nextDial(id, 0);

}