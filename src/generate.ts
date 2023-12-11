import adjectives from "./words/adjectives.js";
import nouns from "./words/nouns.js";

const getRandomWord = (list: string[]): string => {
	const randomIndex = Math.floor(Math.random() * list.length);

	return list[randomIndex];
};

export const generate = () => {
	const adjective = getRandomWord(adjectives);
	const noun = getRandomWord(nouns);

	return adjective + "-" + noun;
};
