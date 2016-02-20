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