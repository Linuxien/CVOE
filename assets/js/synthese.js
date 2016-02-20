// TRAME 1
//[Mathéo] Nous n’avons rien à faire aujourd’hui
//[Emma] Nous allons rendre visite à l’oncle Ernest, il a toujours de super histoires !

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
    'speaker': "test",
    'dialog': "dialog"
  }
]

var trames = [
  trame1,
  trame2
]


function speakTrame(id, step, utterance) {
  var trameCrt = trames[id];
  console.log('TrameCrt : ' + trameCrt);

  var nbtext = trameCrt.length;
  console.info('Taille trameCrt : ' + nbtext);

  // si non dernier dialogue
  if (step < nbtext) {
    // on recupere le dialogue et la speaker
    var quiParle = trameCrt[step].speaker;
    var dial = trameCrt[step].dialog;
    // on modifie l'utterance pour la voix
    utterance.text = dial;

    // au debut, on change les sous titre
    utterance.onstart = function (event) {
      majSubtitles(dial, quiParle);
    }

    // a la fin de ce dialogue, on passe au suivant
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
  }


}