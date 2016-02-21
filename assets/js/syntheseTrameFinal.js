//[Trame 5]
//Mathéo & Emma] Oncle Ernest, Oncle Ernest !
//[Oncle Ernest] Ah les enfants ! Vous êtes enfin reveillés
//[Emma] Quoi? Tout ça n’était qu’un rêve , ou est Gladyss ?
//[Oncle Ernest] Gladyss ? Quelle est cette histoire ? Venez gouter plutot.
var trameF1 = [
  {
    'speaker': "Matheo",
    'dialog': "Oncle Ernest !"
  },
  {
    'speaker': "Emma",
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
    'dialog': "Emma, regarde ce que j’ai dans la poche !"
  }
]

//  THE END
var tramesF = [
  trameF1,
  trameF2
];

function dialTrameFin() {

  nextDialTram(idTram, 0);

}

function nextDialTram(idTrame, idDial) {
  //  console.log('NEXT DIAL');
  var trameCrt = trames[idTrame];
  if (idDial < trameCrt.length) {
    // personne qui parle
    var quiParle = trameCrt[idDial].speaker;
    // type de dialogue (audio ou synthese)
    var type = trameCrt[idDial].type;

    // texte
    var text = '';

    // en fonction du type, on lance l'audio ou la parole
    if (type === 'audio') {
      speakAudio(idTrame, idDial, trameCrt[idDial].dialog, 0, quiParle);

    } else if (type === 'synthese') {
      text = trameCrt[idDial].dialog
        // utterance --> si matheo ou emma change de pitch
      speakUtterance(idTrame, idDial, quiParle, text);
    }
  } else if (idTrame === 0){
    // on fait apparaitre le canvas
    $('clone').slideDown();
    
    // next
    dialTrameFin(1)
  }
}