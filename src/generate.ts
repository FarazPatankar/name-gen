import adjectives from "./words/adjectives.js";
import nouns from "./words/nouns.js";
import colors from "./words/colors.js";

interface GenerateOptions {
	withColor?: boolean;
	adjectives?: (adjectives: string[]) => string[];
	nouns?: (nouns: string[]) => string[];
	colors?: (colors: string[]) => string[];
}

const getRandomWord = (list: string[]): string => {
	const randomIndex = Math.floor(Math.random() * list.length);

	return list[randomIndex];
};

export const generate = (options: GenerateOptions = {}) => {
	const allAdjectives = options.adjectives?.(adjectives) ?? adjectives;
	const adjective = getRandomWord(allAdjectives);
	const allNouns = options.nouns?.(nouns) ?? nouns;
	const noun = getRandomWord(allNouns);

	if (options.withColor) {
		const allColors = options.colors?.(colors) ?? colors;
		const color = getRandomWord(allColors);
		return color + "-" + adjective + "-" + noun;
	}

	return adjective + "-" + noun;
};
