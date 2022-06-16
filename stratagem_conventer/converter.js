const nameInput = document.querySelector('.name');
const costInput = document.querySelector('.cost');
const categoryInput = document.querySelector('.category');
const phaseInput = document.querySelector('.phase');
const whoseInput = document.querySelector('.whose');
const textInput = document.querySelector('.text');
const keywordsInput = document.querySelector('.keywords');

const answerInput = document.querySelector('.answer');

const submitButton = document.querySelector('.submit');
const copyButton = document.querySelector('.copy');

const prepName = () => {
	const nname = `${nameInput.value}: {name:'${nameInput.value}',`;
	return nname;
};
const prepCost = () => {
	const cost = `cost: '${costInput.value}',`;
	return cost;
};

const prepCategory = () => {
	const category = `category: '${categoryInput.value}',`;
	return category;
};

const prepPhase = () => {
	const phase = `phase: '${phaseInput.value}',`;
	return phase;
};

const prepWhose = () => {
	const whose = `whose: '${whoseInput.value}',`;
	return whose;
};

const prepText = () => {
	const text = `text: '${textInput.value}',`;
	return text;
};

const prepKeywords = () => {
	const keywords = `keywords: '${keywordsInput.value}'},`;
	return keywords;
};

const mergeInputs = () => {
	const result =
		prepName() +
		prepCost() +
		prepCategory() +
		prepPhase() +
		prepWhose() +
		prepText() +
		prepKeywords();
	answerInput.value = JSON.stringify(result);
};

const handleCopy = () => {
    answerInput.select();
	answerInput.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(answerInput.value);
    
}

submitButton.addEventListener('click', mergeInputs);
copyButton.addEventListener('click', handleCopy);

// const testObj = {
// 	stratagem1: {
// 		name: 'stratagem1',
// 		cost: '1cp',
// 		category: 'blablbalab',
// 		phase: 'ss',
// 		whose: 'ss',
// 		text: 'ss',
// 		keywords: 'ss',
// 	},
// 	stratagem2: {
// 		name: 'stratagem1',
// 		cost: '1cp',
// 		category: 'blablbalab',
// 		phase: 'ss',
// 		whose: 'ss',
// 		text: 'ss',
// 		keywords: 'ss',
// 	},
// 	stratagem3: {
// 		name: 'stratagem1',
// 		cost: '1cp',
// 		category: 'blablbalab',
// 		phase: 'ss',
// 		whose: 'ss',
// 		text: 'ss',
// 		keywords: 'ss',
// 	},
// };
