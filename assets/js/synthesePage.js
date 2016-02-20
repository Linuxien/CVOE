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
    'speaker': 'Gladyss',
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
function speakUtterance(utterance) {

}

// fait parler les autres
// test si l'audio est découpé en plusieurs parties (merci Gladyss)
function speakAudio(tabDial, idAudio) {
  var audio = document.getElementById('audio');
  // chemin du fichier audio
  // texte dit

  updateSource(file);

  $(audio).on('ended', function () {
    idAudio++;
    if (idAudio < tabDial.length)
      speakAudio(tabDial, idAudio);
    else
      nextDial();

  });

  audio.play();
}

// TODO méthode pour recup des BIP aléatoirements ?

function nextDial(idPage, idDial) {
  //  console.log('NEXT DIAL');
  var pageCrt = pages[id];

  // TODO test si idDial est inférieur à la taille
  if (idDial < pageCrt.length) {
    // personne qui parle
    var quiParle = pageCrt[idDial].speaker;
    // type de dialogue (audio ou synthese)
    var type = pageCrt[idDial].type;

    // texte
    var text = '';

    // en fonction du type, on lance l'audio ou la parole
    if (type === 'audio') {
      speakAudio(pageCrt[idDial].dialog, 0);

    } else if (type === 'synthese') {
      // utterance --> si matheo ou emma change de pitch

    }

    // MAJ sous titres onstart
  }
}

// lance les dialogues
function dialPage(id) {
  //  var pageCrt = pages[id];

  nextDial(id, 0);

}