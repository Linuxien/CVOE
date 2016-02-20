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

// PAGE 2 - 1
//[Gladyss] Miraculeux ! Vous en avez aussi le pouvoir ! Par contre… Il faudra que vous appreniez un peu à le maitriser… Voyez-vous, Cet endroit ne me plait pas… BIP.
//[Mathéo] Hey, si ça ne te plait pas débrouille-toi !
//[Emma] Mathéo ! On doit sauver l’Oncle Ernest ! Tournons la page !
var page2_1 = [
  {
    'speaker': 'Gladyss',
    'type': 'audio',
    'dialog': [{
      'file': 'assets/pages/page_2/Gladys_1.mp3',
      'text': 'Miraculeux ! Vous en avez aussi le pouvoir ! Par contre… Il faudra que vous appreniez un peu à le maitriser… Voyez-vous, Cet endroit ne me plait pas…'
    }, {
      'file': 'assets/audio/BIP3.mp3',
      'text': 'BIP'
    }]
  },
  {
    'speaker': 'Matheo',
    'type': 'synthese',
    'dialog': "Hey, si ça ne te plait pas débrouille-toi !"
  },
  {
    'speaker': 'Emma',
    'type': 'synthese',
    'dialog': "Mathéo ! On doit sauver l’Oncle Ernest ! Tournons la page !"
  }
]
// PAGE 2-2
//# Le joueur essaie de tourner la page mais n’y arrive pas #
//[Mathéo] Ca ne marche plus !
//[Gladyss] C’est normal, si on veut pouvoir traverser ce désert, il va nous falloir de l’eau ! Peux-tu en trouver dans cette page ?
//[Emma] Regarde, il y a un cactus, essayons de trouver quelque chose pour récupérer l’eau qu’il contient !
var page2_2 = [
  {
    'speaker': 'Matheo',
    'type': 'synthese',
    'dialog': "Ça ne marche plus !"
  },
  {
    'speaker': 'Gladyss',
    'type': 'audio',
    'dialog': [{
      'file': 'assets/pages/page_2/Gladys_2.mp3',
      'text': 'C’est normal, si on veut pouvoir traverser ce désert, il va nous falloir de l’eau ! Peux-tu en trouver dans cette page ?'
    }, {
      'file': 'assets/audio/BIP3.mp3',
      'text': 'BIP'
    }]
  },
  {
    'speaker': 'Emma',
    'type': 'synthese',
    'dialog': "Regarde, il y a un cactus, essayons de trouver quelque chose pour récupérer l’eau qu’il contient !"
  }
]

// PAGE 2-3
//# Le joueur clique sur un baton, et l’amène sur le cactus #
//[Mathéo] Génial ! Essayons de tourner la page, maintenant.
var page2_3 = [
  {
    'speaker': 'Matheo',
    'type': 'synthese',
    'dialog': "Génial ! Essayons de tourner la page, maintenant."
  }
]

//dialPage(X) avec X :
//0 : page1,
//1 : page2_1
//2: page2_2
//3: page2_3

var pages = [
  page1,
  page2_1,
  page2_2,
  page2_3
]