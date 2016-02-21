//[Trame 5]
//Mathéo & Emma] Oncle Ernest, Oncle Ernest !
//[Oncle Ernest] Ah les enfants ! Vous êtes enfin reveillés
//[Emma] Quoi? Tout ça n’était qu’un rêve , ou est Gladyss ?
//[Oncle Ernest] Gladyss ? Quelle est cette histoire ? Venez gouter plutot.
var trameF1 = [
  {
    'speaker': "Matheo",
    'type': 'synthese',
    'dialog': "Oncle Ernest !"
  },
  {
    'speaker': "Emma",
    'type': 'synthese',
    'dialog': "Oncle Ernest !"
  }, {
    'speaker': 'Oncle Ernest',
    'type': 'audio',
    'dialog': [{
      'file': 'assets/trames/Oncle_1.mp3',
      'text': 'Ah les enfants ! Vous êtes enfin reveillés'
    }]
  },
  {
    'speaker': "Emma",
    'type': 'synthese',
    'dialog': "Quoi? Tout ça n’était qu’un rêve , où est Gladyss ?"
  }, {
    'speaker': 'Oncle Ernest',
    'type': 'audio',
    'dialog': [{
      'file': 'assets/trames/Oncle_2.mp3',
      'text': 'Gladyss ? Quelle est cette histoire ? Venez gouter plutot.'
    }]
  }
];

//
//[Trame 6]
//L’Oncle Ernest a quitté la piece
//[Mathéo] Emma, regarde ce que j’ai dans la poche !
var trameF2 = [
  {
    'speaker': "Matheo",
    'type': 'synthese',
    'dialog': "Emma, regarde ce que j’ai dans la poche !"
  }
]

//  THE END
var tramesF = [
  trameF1,
  trameF2
];

function dialTrameFin(idTram) {

  nextDialTram(idTram, 0);

}

function nextDialTram(idTrame, idDial) {
  //  console.log('NEXT DIAL');
  var trameCrt = tramesF[idTrame];
  console.log('IDDIAL : ' + idDial);
  if (idDial < trameCrt.length) {
    // personne qui parle
    var quiParle = trameCrt[idDial].speaker;
    console.info('QUI PARLE : ' + quiParle);
    // type de dialogue (audio ou synthese)
    var type = trameCrt[idDial].type;
    console.info('TYPE : ' + type);

    // texte
    var text = '';

    // en fonction du type, on lance l'audio ou la parole
    if (type === 'audio') {
      speakAudioTram(idTrame, idDial, trameCrt[idDial].dialog, 0, quiParle);

    } else if (type === 'synthese') {
      text = trameCrt[idDial].dialog
        // utterance --> si matheo ou emma change de pitch
      speakUtteranceTram(idTrame, idDial, quiParle, text);
    }
  } else if (idTrame === 0){
    // on fait apparaitre le canvas
    $('#clone').slideDown();
    
    $('#cycler').fadeOut();
    $('#cycler').children().first().remove();
    $('#cycler').children().last().attr('src', 'assets/trames/trame5.png');
    $('#cycler').fadeIn();
    
    // next
    dialTrameFin(1);
  }else if (idTrame === 0){
    // THE END
  }
}

function speakAudioTram(idPage, idDial, tabDial, idAudio, quiParle) {
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
      nextDialTram(idPage, idDial);
    }
    // enleve le listener (merci google)
    this.removeEventListener('ended', arguments.callee, false);
  });

  audio.play();
}

function speakUtteranceTram(idPage, idDial, quiParle, dial) {
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
//    console.info('DIAL FINI ');
    idDial++;
    nextDialTram(idPage, idDial);
  }

  // on le speak
  window.speechSynthesis.speak(utterance);
}