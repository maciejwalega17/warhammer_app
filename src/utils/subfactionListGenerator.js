const subfactionListGenerator = (army) => {
  if (army === 'Tyranids') {
    return [
      '--Custom--',
      'Behemoth',
      'Kraken',
      'Leviathan',
      'Gorgon',
      'Jormungandr',
      'Kronos',
      'Hydra',
    ];
  }
  if (army === 'Orks') {
    return [
      '--Custom--',
      'Bad Moons',
      'Blood Axes',
      'Deathskulls',
      'Evil Sunz',
      'Freebooterz',
      'Goffs',
      'Snakebites',
    ];
  }
  if (army === 'Aeldari') {
    return [
      '--Custom--',
      'Ulthwé',
      'Alaitoc',
      'Biel-Tan',
      'Iyanden',
      'Saim-Hann',
      'Ynnari',
    ];
  }
  if (army === 'Adepta Sororitas') {
    return [
      '--Custom--',
      'Order of Our Martyred Lady',
      'Order of the Valorous Heart',
      'Order of the Bloody Rose',
      'Order of the Ebon Chalice',
      'Order of the Sacred Rose',
      'Order of the Argent Shroud',
    ];
  }
  if (army === 'Adeptus Custodes') {
    return [
      '--Custom--',
      'Emperor’s Chosen',
      'Shadowkeepers ',
      'Dread Host',
      'Aquilan Shield',
      'Solar Watch',
      'Emissaries Imperatus',
    ];
  }
  if (army === 'T\u2019au Empire') {
    return [
      '--Custom--',
      'T’au Sept',
      'Vior’la',
      'Sa’cea',
      'Dal’yth',
      'Bork’an',
      'Farsight Enclaves',
    ];
  }
  if (army === 'Aeldari (Harlequins)') {
    return ['--Custom--', 'Light', 'Dark', 'Twilight'];
  }
  if (army === 'Adeptus Mechanicus') {
    return [
      '--Custom--',
      'Mars',
      'Lucius',
      'Agripinaa',
      'Graia',
      'Ryza',
      'Metalica',
    ];
  }
  if (army === 'Necrons') {
    return [
      '--Custom--',
      'Mephrit',
      'Nephrekh',
      'Nihilakh',
      'Novokh',
      'Sautekh',
      'Szarekhan',
    ];
  }
  if (army === 'Chaos Knights') {
    return [
      '--Custom--',
      'HOUSE HERPETRAX',
      'HOUSE LUCARIS',
      'HOUSE KHYMERE',
      'HOUSE VEXTRIX',
      'HOUSE KHOMENTIS',
      'HOUSE KORVAX',
    ];
  }
  if (army === 'Death Guard') {
    return [
      '--Custom--',
      'HARBINGERS',
      'THE INEXORABLE',
      'MORTARION’S ANVIL',
      'SEVENFOLD BLESSINGS',
      'BILIOUS BLOOD-RUSH',
      'THE FERRYMEN',
      'MORTARION’S CHOSEN SONS',
    ];
  }
  if (army === 'Grey Knights') {
    return [
      '--Custom--',
      'Swordbearers',
      'Blades of Victory',
      'Wardmakers',
      'Prescient Brethren',
      'Preservers',
      'Rapiers',
      'Exactors',
      'Silver Blades',
    ];
  }
  if (army === 'Drukhari') {
    return [
      '--Custom--',
      'Kabal of the Black Heart',
      'Kabal of the Flayed Skull',
      'Kabal of the Obsidian Rose',
      'Kabal of the Poisoned Tongue',
      'Cult of Strife',
      'Cult of the Cursed Blade',
      'Cult of the Red Grief',
      'Coven of Twelve',
      'The Dark Creed',
      'Prophets of Flesh',
    ];
  }
  if (army === 'Genestealer Cults') {
    return [
      '--Custom--',
      'Cult of the Four-armed Emperor',
      'The Hivecult',
      'Bladed Cog',
      'Rusted Claw',
      'Pauper Princes',
      'Twisted Helix',
    ];
  }
  if (army === 'Imperial Knights') {
    return [
      '--Custom--',
      'House Terryn',
      'House Griffith',
      'House Cadmus',
      'House Hawkshroud',
      'House Mortan',
      'House Raven',
      'House Taranis',
      'House Krast',
      'House Vulker',
    ];
  }
  if (army === 'Adeptus Astartes') {
    return [
      '--Custom--',
      'Black Templars',
      'Blood Angels',
      'Dark Angels',
      'Deathwatch',
      'Imperial Fists',
      'Iron Hands',
      'Raven Guard',
      'Salamanders',
      'Space Wolves',
      'White Scars',
      'Ultramarines',
    ];
  }
  if (army === 'Thousand Sons') {
    return [
      '--Custom--',
      'Cult of Mutation',
      'Cult of Prophecy',
      'Cult of Time',
      'Cult of Scheming',
      'Cult of Magic',
      'Cult of Knowledge',
      'Cult of Change',
      'Cult of Duplicity',
      'Cult of Manipulation',
    ];
  }
  if (army === 'Chaos Space Marines') {
    return [
      '--Custom--',
      'Alpha Legion',
      'Black Legion',
      'Creations of Bile',
      "Emperor's Children",
      'Iron Warriors',
      'Night Lords',
      'Red Corsairs',
      'Word Bearers',
    ];
  }

  return undefined;
};

export default subfactionListGenerator;
