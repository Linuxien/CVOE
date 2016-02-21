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
//    console.info('DIAL FINI ');
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
  } else if (idPage === 0) {
    // seulement pour la premiere page
    $(".flipbook").turn("disable", false);
  } else if (idPage === 1) {
    // seulement pour le debut de la seconde page
    // on clique sur le livre
    $(".flipbook").on('click', function () {
      dialPage(2);
      $(this).off('click');
    });
  } else if (idPage === 4) {
    $('#clapclap').on('click', function () {
      $(this).css('opacity', 1);
      dialPage(5);
      $(this).off('click');
    });
  } else if (idPage === 5) {
    // on fait apparaitre le canvas
    $('#canvas_clapclap').fadeIn('slow');
    $('#btnStart').html('Valider le dessin !').fadeIn();
    $('#btnStart').on('click', function () {
      dialPage(6);
      $(this).off('click');
      $(this).hide();
    });
  } else if (idPage === 6) {
    $(".flipbook").turn("disable", false);
  } else if (idPage === 7) {
    // on fait apparaitre BAM et son appareil
    $('#bam').show('clip');
    $('#petitApp').show('clip');
    dialPage(8);
  } else if (idPage === 8) {
    // on fait appel au script du souffle dans le micro
    launchMicro();
  } else if (idPage === 9) {
    // on lance la cam
    photoAvecBam();
    // on fait disparaitre BAM parceu'il apparait sur la photo
    $('#bam').hide('clip');

    // on fait apparaitre le bouton pour prendre snaphsot
    $('#btnStart').html('Cheese !').fadeIn();
  } else if (idPage === 10) {
    
    $('#bam').show('clip');
    $(".flipbook").turn("disable", false);
  } else if (idPage === 12) {
    $(".flipbook").turn("disable", false);
  } else if (idPage === 13) {
    $(".flipbook").turn("disable", false);
    finLivre = true;

    // on recupere les classes des images
    pourAliment();


    $('#panier').fadeIn();

  } else if (idPage === 14) {
    // on ferme le panier
    $('#panier').fadeOut();
    // on affiche la clé
    $('#key').fadeIn();
  } else if (idPage === 15) {
    // on "ferme" le livre
    $('.flipbook').fadeOut('slow');

    $('#cycler').children().first().attr('src', 'assets/trames/trame4.png').addClass('active');
    $('#cycler').children().last().remove();
    $('#cycler').children().last().attr('src', 'assets/trames/trame5.png');
    $('#cycler').fadeIn();
  }
}

// lance les dialogues
// TODO ajout attr pour ne pas repet les dial
function dialPage(id) {
  if (finLivre) {
    if (id >= 14) {
      nextDial(id, 0);
    }
  } else {
    // seulement pour la premiere page
    if (id === 0) {
      $(".flipbook").turn("disable", true);
    }

    nextDial(id, 0);

  }

}

function pourAliment() {
  tabImgAl.each(function (index) {
    // on peut les pointer
    $(this).css('cursor', 'pointer');

    $(this).off('click');
    
    // quand on clique
    $(this).on('click', function () {
      // on les enleve
      $(this).fadeOut();

      // et on le met dans le panier
      var idAl = $(this).attr('id');
      $('#' + idAl + 'Pan').css('opacity', '1');

      // on l'ajoute dans le tableau
      if($.inArray(idAl, panier) === -1){
        panier.push(idAl);
      }
    });
  });
}