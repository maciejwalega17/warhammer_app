import tyranids from './tyranids.json';
import adeptasororitas from './adeptaSororitas.json';
import adeptuscustodes from './adeptusCustodes.json';
import orks from './orks.json';
import tau from './tau.json';
import harlequins from './harlequins.json';
import adeptusmechanicus from './adeptusMechanicus.json';
import necrons from './necrons.json';
import chaosknights from './chaosKnights.json';
import deathguard from './deathGuard.json';
import greyknights from './greyKnights.json';
import aeldari from './aeldari.json';
import drukhari from './drukhari.json';
import spacemarines from './spaceMarines.json';
import imperialknights from './imperialKnights.json';
import thousandsons from './thousandSons.json';
import genestealercults from './genestealerCults.json';
import chaosspacemarines from './chaosSpaceMarines.json';

import tyranidsFaction from './tyranidsFaction.json';
import adeptasororitasFaction from './adeptaSororitasFaction.json';
import adeptuscustodesFaction from './adeptusCustodesFaction.json';
import orksFaction from './orksFaction.json';
import tauFaction from './tauFaction.json';
import adeptusmechanicusFaction from './adeptusMechanicusFaction.json';
import necronsFaction from './necronsFaction.json';
import deathguardFaction from './deathGuardFaction.json';
import greyknightsFaction from './greyKnightsFaction.json';
import aeldariFaction from './aeldariFaction.json';
import drukhariFaction from './drukhariFaction.json';
import imperialknightsFaction from './imperialKnightsFaction.json';
import genestealercultsFaction from './genestealerCultsFaction.json';
// import thousandsonsFaction from './thousandSonsFaction.json';
import chaosknightsFaction from './chaosKnightsFaction.json';
import chaosspacemarinesFaction from './chaosSpaceMarinesFaction.json';
import spacemarinesblacktemplarsFaction from './spaceMarinesBlackTemplarsFaction.json';
import spacemarinesbloodangelsFaction from './spaceMarinesBloodAngelsFaction.json';
import spacemarinesdarkangelsFaction from './spaceMarinesDarkAngelsFaction.json';
import spacemarinesdeathwatchFaction from './spaceMarinesDeathWatchFaction.json';
import spacemarinesimperialfistsFaction from './spaceMarinesImperialFistsFaction.json';
import spacemarinesironhandsFaction from './spaceMarinesIronHandsFaction.json';
import spacemarinesravenguardFaction from './spaceMarinesRavenGuardFaction.json';
import spacemarinessalmandersFaction from './spaceMarinesSalamandersFaction.json';
import spacemarinesspacewolvesFaction from './spaceMarinesSpaceWolvesFaction.json';
import spacemarinesultramarinesFaction from './spaceMarinesUltramarinesFaction.json';
import spacemarineswhitescarsFaction from './spaceMarinesWhiteScarsFaction.json';

import adeptasororitasbloodyroseFaction from './adeptaSororitasBloodyRoseFaction.json';
import adeptasororitasmartyredladyFaction from './adeptaSororitasMartyredLadyFaction.json';
import adeptusmechanicusmetalicaFaction from './adeptusMechanicusMetalicaFaction.json';
import drukharicultofstrifeFaction from './drukhariCultOfStrifeFaction.json';
import orksbloodaxesFaction from './orksBloodAxesFaction.json';

const startingArr = [
	{
		faction: 'Core',
		name: 'COMMAND RE-ROLL',
		cost: '1',
		category: 'Core',
		phase: 'Any',
		whose: 'Core',
		text: 'Use this Stratagem after you have made a hit roll, a wound roll, a damage roll, a saving throw, an Advance roll, a charge roll, a Psychic test, a Deny the Witch test or you have rolled the dice to determine the number of attacks made by a weapon. Re-roll that roll, test or saving throw.',
		keywords: ['CORE'],
	},

	{
		faction: 'Core',
		name: 'DESPERATE BREAKOUT',
		cost: '2',
		category: 'Core',
		phase: 'Movement',
		whose: 'Core',
		text: 'Use this Stratagem in your Movement phase. Select one unit from your army that has not been selected to move this phase and which is in Engagement Range with at least one enemy unit. Roll one D6 for each model in that unit; for each result of 1, one model in that unit of your choice is destroyed. Assuming that unit was not destroyed, it can now attempt to Fall Back, and when doing so its models can be moved across enemy models as if they were not there. Any model in that unit that ends its Fall Back move within Engagement Range of any enemy model is destroyed. Assuming the unit is not destroyed, it cannot do anything else this turn (i.e. it cannot attempt to manifest psychic powers, shoot, declare a charge, be selected to fight etc.), even if it has a rule that would allow it to do so after Falling Back.',
		keywords: ['CORE'],
	},
	{
		faction: 'Core',
		name: 'EMERGENCY DISEMBARKATION',
		cost: '1',
		category: 'Core',
		phase: 'Any',
		whose: 'Core',
		text: `Use this Stratagem when a TRANSPORT model from your army is destroyed. All units that are embarked within that model can be set up wholly within 6" of the destroyed model when they disembark instead of the normal 3" before the model itself is removed from the battlefield. These units are not affected by the destroyed model's Explodes ability (or equivalent) — instead you must roll one D6 for each model you just set up on the battlefield. Instead of one model that disembarked (your choice) being destroyed for each roll of 1, one model that disembarked (your choice) is destroyed for each roll of 1 or 2. Units cannot declare a charge or perform a Heroic Intervention in the same turn that they disembarked from a destroyed TRANSPORT model.`,
		keywords: ['TRANSPORT'],
	},
	{
		faction: 'Core',
		name: 'CUT THEM DOWN',
		cost: '1',
		category: 'Core',
		phase: 'Movement',
		whose: 'Core',
		text: 'Use this Stratagem when an enemy unit Falls Back, before any models in that unit are moved. Roll one D6 for each model from your army that is within Engagement Range of that enemy unit; for each result of 6, that enemy unit suffers 1 mortal wound.',
		keywords: ['CORE'],
	},
	{
		faction: 'Core',
		name: 'FIRE OVERWATCH',
		cost: '1',
		category: 'Core',
		phase: 'Fight',
		whose: 'Core',
		text: 'Use this Stratagem after an enemy unit has declared a charge against one or more units from your army. One of the units that was chosen as the target of that charge can fire Overwatch before the charge roll is made.',
		keywords: ['CORE'],
	},
	{
		faction: 'Core',
		name: 'COUNTER-OFFENSIVE',
		cost: '2',
		category: 'Core',
		phase: 'Fight',
		whose: 'Core',
		text: 'Use this Stratagem after an enemy unit has fought in this turn. Select one of your own eligible units and fight with it next.',
		keywords: ['CORE'],
	},
	{
		faction: 'Core',
		name: 'INSANE BRAVERY',
		cost: '2',
		category: 'Core',
		phase: 'Morale',
		whose: 'Core',
		text: 'Use this Stratagem before you take a Morale test for a unit in your army. That test is automatically passed (do not roll any dice). You can only use this Stratagem once per battle.',
		keywords: ['CORE'],
	},
];
const stratagemListMerged = startingArr.concat(
	tyranids,
	adeptasororitas,
	adeptuscustodes,
	orks,
	tau,
	harlequins,
	adeptusmechanicus,
	necrons,
	chaosknights,
	deathguard,
	greyknights,
	aeldari,
	drukhari,
	spacemarines,
	imperialknights,
	thousandsons,
	genestealercults,
	chaosspacemarines,

	tyranidsFaction,
	adeptasororitasFaction,
	adeptuscustodesFaction,
	orksFaction,
	tauFaction,
	adeptusmechanicusFaction,
	necronsFaction,
	chaosknightsFaction,
	deathguardFaction,
	greyknightsFaction,
	aeldariFaction,
	drukhariFaction,
	imperialknightsFaction,
	genestealercultsFaction,
	chaosspacemarinesFaction,
	spacemarinesblacktemplarsFaction,
	spacemarinesbloodangelsFaction,
	spacemarinesdarkangelsFaction,
	spacemarinesdeathwatchFaction,
	spacemarinesimperialfistsFaction,
	spacemarinesironhandsFaction,
	spacemarinesravenguardFaction,
	spacemarinessalmandersFaction,
	spacemarinesspacewolvesFaction,
	spacemarinesultramarinesFaction,
	spacemarineswhitescarsFaction,

	adeptasororitasbloodyroseFaction,
	adeptasororitasmartyredladyFaction,
	adeptusmechanicusmetalicaFaction,
	drukharicultofstrifeFaction,
	orksbloodaxesFaction
);

export default stratagemListMerged;
