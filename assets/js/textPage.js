// PAGE 1
//[P786e4654X6847] Bonjour Moussaillons ! BIP Je vous attendais ! BIP
//[Emma] Qui es-tu ?
//[Gladyss] Matricule P786e4654X6847… Gladyss pour les amis. BIP
//[Mathéo] Tu nous attendais ?
//[Gladyss] Oui, BIP, Votre oncle à été emprisonné par le grand poulpe des ombres. BIP.
//[Emma] Serieusement, c’est quoi ce nom ?
//[Gladyss] Peu importe… BIP Le problème, c’est que seul votre Oncle avait le pouvoir de tourner les pages de ce livre, mais étant ses neveux, peut-être pourriez vous essayer ? BIP.
var page1 = [
//  {
//    'speaker': '???',
//    'type': 'audio',
//    'dialog': [{
//      'file': 'assets/pages/page_1/Gladys_1.mp3',
//      'text': 'Bonjour Moussaillons !'
//    }, {
//      'file': 'assets/audio/BIP1.mp3',
//      'text': 'BIP'
//    }, {
//      'file': 'assets/pages/page_1/Gladys_2.mp3',
//      'text': 'Je vous attendais !'
//    }, {
//      'file': 'assets/audio/BIP2.mp3',
//      'text': 'BIP'
//    }]
//  },
//  {
//    'speaker': 'Emma',
//    'type': 'synthese',
//    'dialog': "Qui es-tu ?"
//  },
//  {
//    'speaker': 'Gladyss',
//    'type': 'audio',
//    'dialog': [{
//      'file': 'assets/pages/page_1/Gladys_3.mp3',
//      'text': ' Matricule P786e4654X6847… Gladyss pour les amis.'
//    }, {
//      'file': 'assets/audio/BIP3.mp3',
//      'text': 'BIP'
//    }]
//  },
//  {
//    'speaker': 'Matheo',
//    'type': 'synthese',
//    'dialog': "Tu nous attendais ?"
//  },
//  {
//    'speaker': 'Gladyss',
//    'type': 'audio',
//    'dialog': [{
//      'file': 'assets/pages/page_1/Gladys_4.mp3',
//      'text': 'Oui'
//    }, {
//      'file': 'assets/audio/BIP4.mp3',
//      'text': 'BIP'
//    }, {
//      'file': 'assets/pages/page_1/Gladys_5.mp3',
//      'text': 'Votre oncle à été emprisonné par le grand poulpe des ombres'
//    }, {
//      'file': 'assets/audio/BIP1.mp3',
//      'text': 'BIP'
//    }]
//  },
//  {
//    'speaker': 'Emma',
//    'type': 'synthese',
//    'dialog': "Serieusement, c’est quoi ce nom ?"
//  },
//  {
//    'speaker': 'Gladyss',
//    'type': 'audio',
//    'dialog': [{
//      'file': 'assets/pages/page_1/Gladys_6.mp3',
//      'text': 'Peu importe…'
//    }, {
//      'file': 'assets/audio/BIP3.mp3',
//      'text': 'BIP'
//    }, {
//      'file': 'assets/pages/page_1/Gladys_7.mp3',
//      'text': 'Le problème, c’est que seul votre Oncle avait le pouvoir de tourner les pages de ce livre, mais étant ses neveux, peut-être pourriez vous essayer ?'
//    }, {
//      'file': 'assets/audio/BIP2.mp3',
//      'text': 'BIP'
//    }]
//  }
]

// PAGE 2 - 1
//[Gladyss] Miraculeux ! Vous en avez aussi le pouvoir ! Par contre… Il faudra que vous appreniez un peu à le maitriser… Voyez-vous, Cet endroit ne me plait pas… BIP.
//[Mathéo] Hey, si ça ne te plait pas débrouille-toi !
//[Emma] Mathéo ! On doit sauver l’Oncle Ernest ! Tournons la page !
var page2_1 = [
//    {
//      'speaker': 'Gladyss',
//      'type': 'audio',
//      'dialog': [{
//        'file': 'assets/pages/page_2/Gladys_1.mp3',
//        'text': 'Miraculeux ! Vous en avez aussi le pouvoir ! Par contre… Il faudra que vous appreniez un peu à le maitriser… Voyez-vous, Cet endroit ne me plait pas…'
//    }, {
//        'file': 'assets/audio/BIP3.mp3',
//        'text': 'BIP'
//    }]
//  },
//    {
//      'speaker': 'Matheo',
//      'type': 'synthese',
//      'dialog': "Hey, si ça ne te plait pas débrouille-toi !"
//  },
//    {
//      'speaker': 'Emma',
//      'type': 'synthese',
//      'dialog': "Mathéo ! On doit sauver l’Oncle Ernest ! Tournons la page !"
//  }
]
  // PAGE 2-2
  //# Le joueur essaie de tourner la page mais n’y arrive pas #
  //[Mathéo] Ca ne marche plus !
  //[Gladyss] C’est normal, si on veut pouvoir traverser ce désert, il va nous falloir de l’eau ! Peux-tu en trouver dans cette page ?
  //[Emma] Regarde, il y a un cactus, essayons de trouver quelque chose pour récupérer l’eau qu’il contient !
var page2_2 = [
//  {
//    'speaker': 'Matheo',
//    'type': 'synthese',
//    'dialog': "Ça ne marche plus !"
//  },
//  {
//    'speaker': 'Gladyss',
//    'type': 'audio',
//    'dialog': [{
//      'file': 'assets/pages/page_2/Gladys_2.mp3',
//      'text': 'C’est normal, si on veut pouvoir traverser ce désert, il va nous falloir de l’eau ! Peux-tu en trouver dans cette page ?'
//    }, {
//      'file': 'assets/audio/BIP3.mp3',
//      'text': 'BIP'
//    }]
//  },
//  {
//    'speaker': 'Emma',
//    'type': 'synthese',
//    'dialog': "Regarde, il y a un cactus, essayons de trouver quelque chose pour récupérer l’eau qu’il contient !"
//  }
]

// PAGE 2-3
//# Le joueur clique sur un baton, et l’amène sur le cactus #
//[Mathéo] Génial ! Essayons de tourner la page, maintenant.
var page2_3 = [
//  {
//    'speaker': 'Matheo',
//    'type': 'synthese',
//    'dialog': "Génial ! Essayons de tourner la page, maintenant."
//  }
]

// PAGE 3-1 Arrivé sur la plage
//[Mathéo] Il nous faut traverser cet océan !
//[Emma] Mais Mathéo, Gladyss ne sait pas nager !
//[Gladyss] *Bip Bip triste*
//[Emma] Ils faut que nous trouvions dans cette page de quoi voguer sur l’eau !
//[ClapClap] *clap clap*
//[Mathéo] Tiens ? Qu’est ce que c’est ? Allons voir.
var page3_1 = [
//  {
//    'speaker': 'Matheo',
//    'type': 'synthese',
//    'dialog': "Il nous faut traverser cet océan !"
//  },
//  {
//    'speaker': 'Emma',
//    'type': 'synthese',
//    'dialog': "Mais Mathéo, Gladyss ne sait pas nager ! C'est un robot !"
//  },
//  {
//    'speaker': 'Gladyss',
//    'type': 'audio',
//    'dialog': [{
//      'file': 'assets/audio/SADBIP.mp3',
//      'text': 'BIP triste'
//    }]
//  },
//  {
//    'speaker': 'Emma',
//    'type': 'synthese',
//    'dialog': "Ils faut que nous trouvions dans cette page de quoi voguer sur l’eau !"
//  },
//  {
//    'speaker': '???',
//    'type': 'audio',
//    'dialog': [{
//      'file': 'assets/audio/CLAP.mp3',
//      'text': 'Clap'
//    }, {
//      'file': 'assets/audio/CLAP.mp3',
//      'text': 'Clap'
//    }]
//  },
//  {
//    'speaker': 'Matheo',
//    'type': 'synthese',
//    'dialog': "Tiens ? Qu’est ce que c’est ? Allons voir."
//  }
]

// PAGE 3-2 Clic sur Clap clap
//[ClapClap] Bonjour *ClapClap* ! J’n’ai pu m’empecher d’vous entendre parler de traverser l’Océan. Ahh Vz’êtes bien courageux ma foi! Ah… Mah Jpourrais ptetre vous filer un coup de pince ! C’pendant, va falloir que vous m’aidiez voyez… L’aut’ jour j’me baladais sur la berge, et un espèce de Poulpe déjanté m’a volé ma carapace sacrebleu ! Dites, vous avez l’air de sacré artistes, ça vous dirais pas d’me redessiner un chez moi ?
//[Emma] A quoi elle ressemble ?
//[ClapClap] Bien douillette, et surtout, avec de superbes couleurs !
var page3_2 = [
//  {
//    'speaker': 'ClapClap',
//    'type': 'audio',
//    'dialog': [{
//      'file': 'assets/pages/page_3/Clap_1.mp3',
//      'text': 'Hoy! Marins d\'eau douce !'
//    }, {
//      'file': 'assets/audio/CLAP.mp3',
//      'text': 'Clap'
//    }, {
//      'file': 'assets/pages/page_3/Clap_2.mp3',
//      'text': 'J\'n’ai pu m\'empecher d\'vous entendre parler de traverser l\'océan. Ahh, par ma barbe, Vz\'êtes bien courageux ma foi!'
//    }, {
//      'file': 'assets/pages/page_3/Clap_3.mp3',
//      'text': 'Ah... Mah Jpourrais ptetre vous filer un coup de pince ! C\'pendant, va falloir que vous m\'aidiez voyez...'
//    }, {
//      'file': 'assets/pages/page_3/Clap_4.mp3',
//      'text': 'L’aut\' jour j\'me baladais sur la berge, et un espèce de gredin de Poulpe déjanté, m\'a volé ma carapace, sacrebleu !'
//    }, {
//      'file': 'assets/audio/CLAP.mp3',
//      'text': 'Clap'
//    }, {
//      'file': 'assets/pages/page_3/Clap_5.mp3',
//      'text': 'Dites, vous avez l\'air de sacrés artistes, ça vous dirais pas d\'me redessiner un nouveau chez moi ?'
//    }]
//  },
//  {
//    'speaker': 'Emma',
//    'type': 'synthese',
//    'dialog': "A quoi elle ressemble ?"
//  },
//  {
//    'speaker': 'ClapClap',
//    'type': 'audio',
//    'dialog': [{
//      'file': 'assets/pages/page_3/Clap_6.mp3',
//      'text': 'Bien douillette, et surtout, avec de superbes formes ! Tonnerre de Brest! Aller, au branle-bas de combat ! '
//    }]
//  }
]

// PAGE 3-3 Validation Canvas de clapclap
//[ClapClap] Woah ! Je l’aime tellement ! Aller, grimpez sur mon dos et tournez la page !
var page3_3 = [
//  {
//    'speaker': 'ClapClap',
//    'type': 'audio',
//    'dialog': [{
//      'file': 'assets/pages/page_3/Clap_7.mp3',
//      'text': 'Woah ! Je l\'aime tellement ! Aller, grimpez sur mon dos et tournez la page ! À l\'abordage!'
//    }, {
//      'file': 'assets/audio/CLAP.mp3',
//      'text': 'Clap'
//    }]
//  }
]

// PAGE 4-1 Arrivé sur la lune
//[Mathéo] Euh… L’oncle Ernest est t’il vraiment aller sur la lune ?
//[Gladyss] Biensure ! Bip ! Ce livre raconte les aventures de l’Oncle Ernest, rien de plus !
var page4_1 = [
//  {
//    'speaker': 'Matheo',
//    'type': 'synthese',
//    'dialog': 'Euh… L\'oncle Ernest est t\'il vraiment aller sur la lune ?'
//  },
//  {
//    'speaker': 'Gladyss',
//    'type': 'audio',
//    'dialog': [{
//      'file': 'assets/pages/page_4/Gladys_1.mp3',
//      'text': 'Bien sûr !'
//    }, {
//      'file': 'assets/audio/BIP3.mp3',
//      'text': 'BIP'
//    }, {
//      'file': 'assets/pages/page_4/Gladys_2.mp3',
//      'text': 'Ce livre raconte les aventures de l’Oncle Ernest, rien de plus !'
//    }]
//  }
]

// PAGE 4_1 bis, apres appartition de bam
/// Un être étrange arrive (a définir le physique)/
//[Bam] Salut ! Je suis Bam l’extraterrestre ! Vous êtes des humains ? C’est la première fois que j’en vois, j’aimerais prendre une photo !
//[Emma] Ouais une photo ! Mais ton appareil photo est tout poussiereux, il faudrait souffler dessus avant !
var page4_1bis = [
//  {
//    'speaker': 'Bam',
//    'type': 'audio',
//    'dialog': [{
//      'file': 'assets/pages/page_4/Bam_1.mp3',
//      'text': 'Salut ! Je suis Bam l’extraterrestre !'
//    }, {
//      'file': 'assets/pages/page_4/Bam_2.mp3',
//      'text': 'Vous êtes des humains ? C’est la première fois que j’en vois, j’aimerais prendre une photo !'
//    }]
//  },
//  {
//    'speaker': 'Emma',
//    'type': 'synthese',
//    'dialog': "Ouais une photo ! Mais ton appareil photo est tout poussiereux, il faudrait souffler dessus avant !"
//  }
]

// PAGE 4-2 Apres souffle dans le micro
//[Gladyss] Mettez vous devant la caméra et appuyez sur le bouton de l’appareil photo !
var page4_2 = [
  {
    'speaker': 'Gladyss',
    'type': 'audio',
    'dialog': [{
      'file': 'assets/pages/page_4/Gladys_3.mp3',
      'text': 'Mettez vous devant la caméra et appuyez sur le bouton de l’appareil photo !'
    }]
  }
]

// PAGE 4-3 Apres prise de la phot
//[Bam] Merci ! Je vais vous aider à quitter la lune !
var page4_3 = [
  {
    'speaker': 'Bam',
    'type': 'audio',
    'dialog': [{
      'file': 'assets/pages/page_4/Bam_3.mp3',
      'text': 'Merci ! Je vais vous aider à quitter la lune !'
    }]
  }
]

// PAGE 5-1 - Arrivé dans la jungle
//[Mathéo] Nous voilà maintenant dans la jungle !
//[Emma] Regarde ! Gladyss est coincée dans cette pyramide !
//[Gladyss] Bip Bip
//[Emma] Ne t’inquiète pas, on va t’aider à sortir de ce labyrinth !
var page5_1 = [
  {
    'speaker': 'Matheo',
    'type': 'synthese',
    'dialog': "Nous voilà maintenant dans la jungle !"
  }, {
    'speaker': 'Emma',
    'type': 'synthese',
    'dialog': "Regarde ! Gladyss est coincée dans cette pyramide !"
  }, {
    'speaker': 'Gladyss',
    'type': 'audio',
    'dialog': [{
      'file': 'assets/audio/OKBIP.mp3',
      'text': 'BIP'
    }]
  }, {
    'speaker': 'Emma',
    'type': 'synthese',
    'dialog': "Ne t’inquiète pas, on va t’aider à sortir de ce labyrinthe !"
  }
]

// PAGE 5-2 - Apres que Gladyss soit sortie
//[Gladyss] Merci ! J’ai bien cru que les transistors étaient cuient !
//[Emma] Cette page ne m’inspire pas beaucoup, allons à la suivante !
var page5_2 = [

]

// PAGE 6-1 - Arrivé Scene final
//[Emma] Oncle Ernest! 
//[Mathéo] On l’a retrouvé !
//[Poulpe] Il suffit ! Mr.Oncle est mon prisonnier!
//[Mathéo] Alors c’est toi le grand poulpe des ombres !
//[Poulpe] MONSIEUR le grand poulpe des ombres je vous pris !(Petit con ! :p)
//[Emma] Rendez-nous notre Oncle Ernest !
//[Oncle Ernest] Les enfants vous êtes là ! Son point faible est la cuisine, cuisinez lui une bonne tarte au chocolat, et il sera tendre comme un agneau ! Vous trouverez les ingrédients nécéssaires dans les pages de ce livre !
var page6_1 = [

]

// PAGE 6-2 - Arrivé scene final avec tout les ingrédients ou apres avoir donné la tarte
//[Poulpe] ça ne fonctionnera pas...ça… MAIS C’EST DELICIEUX ! Oh Mr. les enfants je suis désolé d’avoir enfermé Mr. Votre Oncle. Tenez, voici la clé !
var page6_2 = [

]

// PAGE 6-3 - Apres que Poulpe est donné la clé, et qu'on l'utilise sur la cage
//[Poulpe] Dites vous reviendrez s’il vous plait ?
//[Emma] Oui ! Bien sûr !
//[Galdyss] Je vous attendrai aussi !
//[Oncle Ernest] Il est temps de rentrer !
var page6_3 = [

]

//dialPage(X) avec X :
//0 : page1,
//1 : page2_1 --> arrivé dans le desert
//2: page2_2 --> lancé quand on clique sur le livre (pour essayer de tourner la apge)
//3: page2_3 --> lancé après avoir tapé le cactus
//4: page3_1 --> arrivé plage
//5: page3_2 --> clic sur clapclap
//6: page3_3 --> validation canvas de sa coquille
//7: page4_1 --> Arrivé sur la lune
//8: page4_1bis --> arrivé de BAM
//9: page4_2 --> Apres souffle dans le micro
//10: page4_3 --> Apres prise photo

var pages = [
  page1,
  page2_1,
  page2_2,
  page2_3,
  page3_1,
  page3_2,
  page3_3,
  page4_1,
  page4_1bis,
  page4_2,
  page4_3,
  page5_1,
  page5_2
]