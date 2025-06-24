import adjectives from "./words/adjectives.js";
import nouns from "./words/nouns.js";
import colors from "./words/colors.js";

interface GenerateOptions {
	withColor?: boolean;
}

const getRandomWord = (list: string[]): string => {
	const randomIndex = Math.floor(Math.random() * list.length);

	return list[randomIndex];
};

export const generate = (options: GenerateOptions = {}) => {
	const adjective = getRandomWord(adjectives);
	const noun = getRandomWord(nouns);

	if (options.withColor) {
		const color = getRandomWord(colors);
		return color + "-" + adjective + "-" + noun;
	}

	return adjective + "-" + noun;
};
