import adjectives from "./words/adjectives.js";
import nouns from "./words/nouns.js";

const getRandomWord = (list: string[]): string => {
	const randomIndex = Math.floor(Math.random() * list.length);

	return list[randomIndex];
};

const generate = () => {
	const adjective = getRandomWord(adjectives);
	const noun = getRandomWord(nouns);

	return adjective + "-" + noun;
};

export default generate;
