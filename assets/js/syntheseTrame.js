// TRAME 1
//[Mathéo] Nous n’avons rien à faire aujourd’hui
//[Emma] Nous allons rendre visite à l’oncle Ernest, il a toujours de super histoires !

// TRAME 2
//[Matheo] Tiens, l’oncle Ernest ne répond pas
//[Emma] Il n’est pas là ! 
//[Mathéo] Regarde, c’est quoi ce livre ? Allons le voir ! 
//[Emma] C’est une mauvaise idée, rentrons !

//TRAME 3
// [les 2] OUAAHHH

// MATHEO
// PITCH : 0.5 (float)

// EMMA
// PITCH : 2 (lol) ou plutot 1.5

// GLADYS
// PITCH 0.1 ou alors utilisation de meSpeak.js

// perso secondaire --> on peut peut être utilisé des fichiers mp3 pour eux (moins de dialogue)
// CLAPCLAP (accent pirate)

// BAM

// POULPE

// ONCLE ERNEST

window.onload = function () {
  // TODO si pas de speechsynthesis, on evite de l'utiliser, juste avec les sous titres
  if (!('speechSynthesis' in window)) {
    alert("You don't have speechSynthesis");
  }
}

var trame1 = [
  {
    'speaker': "matheo",
    'dialog': "Nous n’avons rien à faire aujourd’hui"
  },
  {
    'speaker': "emma",
    'dialog': "Nous allons rendre visite à l’oncle Ernest, il a toujours de super histoires !"
  }
];

var trame2 = [
  {
    'speaker': "matheo",
    'dialog': "Tiens, l’oncle Ernest ne répond pas"
  },
  {
    'speaker': "emma",
    'dialog': "Il n’est pas là ! "
  },
  {
    'speaker': "matheo",
    'dialog': "Regarde, c’est quoi ce livre ? Allons le voir !"
  },
  {
    'speaker': "emma",
    'dialog': "C’est une mauvaise idée, rentrons !"
  }
]
var trame3 = [
  {
    'speaker': "emma matheo",
    'dialog': "ouaaaaaah"
  }
]

var trames = [
  trame1,
  trame2,
  trame3
]


function speakTrame(id, step, utterance) {
  var trameCrt = trames[id];
  console.log('TrameCrt : ' + trameCrt);

  // si pas de trame crt alors on arrete tout
  // if trameCrt undefined
    
  var nbtext = trameCrt.length;
  console.info('Taille trameCrt : ' + nbtext);

  // si non dernier dialogue
  if (step < nbtext) {
    // on recupere le dialogue et la speaker
    var quiParle = trameCrt[step].speaker;
    var dial = trameCrt[step].dialog;
    
    // on modifie le pitch des voix des enfants
    if(quiParle === 'matheo'){
      utterance.pitch = 0.5;
    } else if (quiParle === 'emma'){
      utterance.pitch = 1.5;
    } else {
      // au cas où
      utterance.pitch = 1;
    }
    console.log('QUI PARLE : ' + quiParle)
    // on lui dit son texte
    utterance.text = dial;

    // au debut, on change les sous titre
    utterance.onstart = function (event) {
      majSubtitles(dial, quiParle);
    }

    // a la fin de ce dialogue, on passe au suivant (next step)
    utterance.onend = function (event) {
      console.info('DIAL FINI ' + step);
      step++;
      speakTrame(id, step, utterance);
    }

    // on le speak
    window.speechSynthesis.speak(utterance);
  } else {
    // sinon on peut passer à la trame suivante
    console.info('NEXT TRAME');
    cycleImages(id + 1);
  }


}