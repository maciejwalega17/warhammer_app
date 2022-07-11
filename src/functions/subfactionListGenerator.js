const subfactionListGenerator = (army) => {
	if (army === 'Tyranids') {
		return [
			'Behemoth',
			'Kraken',
			'Leviathan',
			'Gorgon',
			'Jormungandr',
			'Kronos',
			'Hydra',
		];
	} else if (army === 'Orks') {
		return [
			'Bad Moons',
			'Blood Axes',
			'Deathskulls',
			'Evil Sunz',
			'Freebooterz',
			'Goffs',
			'Snakebites',
		];
	} else if (army === 'Aeldari') {
		return ['Ulthwé', 'Alaitoc', 'Biel-Tan', 'Iyanden', 'Saim-Hann', 'Ynnari'];
	} else if (army === 'Adepta Sororitas') {
		return [
			'Order of Our Martyred Lady',
			'Order of the Valorous Heart',
			'Order of the Bloody Rose',
			'Order of the Ebon Chalice',
			'Order of the Sacred Rose',
			'Order of the Argent Shroud',
		];
	} else if (army === 'Adeptus Custodes') {
		return [
			'Emperor’s Chosen',
			'Shadowkeepers ',
			'Dread Host',
			'Aquilan Shield',
			'Solar Watch',
			'Emissaries Imperatus',
		];
	} else if (army === 'T\u2019au Empire') {
		return [
			'T’au Sept',
			'Vior’la',
			'Sa’cea',
			'Dal’yth',
			'Bork’an',
			'Farsight Enclaves',
		];
	} else if (army === 'Aeldari (Harlequins)') {
		return ['Light', 'Dark', 'Twilight'];
	} else if (army === 'Adeptus Mechanicus') {
		return ['Mars', 'Lucius', 'Agripinaa', 'Graia', 'Ryza', 'Metalica'];
	} else if (army === 'Necrons') {
		return [
			'Mephrit',
			'Nephrekh',
			'Nihilakh',
			'Novokh',
			'Sautekh',
			'Szarekhan',
		];
	} else if (army === 'Chaos Knights') {
		return [
			'HOUSE HERPETRAX',
			'HOUSE LUCARIS',
			'HOUSE KHYMERE',
			'HOUSE VEXTRIX',
			'HOUSE KHOMENTIS',
			'HOUSE KORVAX',
		];
	} else if (army === 'Death Guard') {
		return [
			'HARBINGERS',
			'THE INEXORABLE',
			'MORTARION’S ANVIL',
			'SEVENFOLD BLESSINGS',
			'BILIOUS BLOOD-RUSH',
			'THE FERRYMEN',
			'MORTARION’S CHOSEN SONS',
		];
	} else if (army === 'Grey Knights') {
		return [
			'Swordbearers',
			'Blades of Victory',
			'Wardmakers',
			'Prescient Brethren',
			'Preservers',
			'Rapiers',
			'Exactors',
			'Silver Blades',
		];
	} else if (army === 'Drukhari') {
		return [
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
	} else if (army === 'Genestealer Cults') {
		return [
			'Cult of the Four-armed Emperor',
			'The Hivecult',
			'Bladed Cog',
			'Rusted Claw',
			'Pauper Princes',
			'Twisted Helix',
		];
	} else if (army === 'Imperial Knights') {
		return [
			'House Terryn',
			'House Griffith',
			'House Cadmus',
			'House Hawkshroud',
			'House Mortan',
			'House Raven',
		];
	} else if (army === 'Adeptus Astartes') {
		return [
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
	} else if (army === 'Thousand Sons') {
		return [
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
	} else if (army === 'Chaos Space Marines') {
		return [
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
};

export default subfactionListGenerator;
