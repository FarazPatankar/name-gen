import { describe, expect, it } from "vitest";

import adjectives from "./adjectives.js";
import nouns from "./nouns.js";

describe("words", () => {
	it("ensures adjectives only contain lowercase letters", () => {
		const response = adjectives.filter((adjective) => {
			const lowercase = adjective.toLowerCase();
			return adjective !== lowercase;
		});

		expect(response).toEqual([]);
	});

	it("ensures nouns only contain lowercase letters", () => {
		const response = nouns.filter((noun) => {
			const lowercase = noun.toLowerCase();
			return noun !== lowercase;
		});

		expect(response).toEqual([]);
	});

	it("ensures adjectives are a single word", () => {
		const response = adjectives.filter((adjective) => {
			const wordCount = adjective.split(" ").length;
			return wordCount > 1;
		});

		expect(response).toEqual([]);
	});

	it("ensures nouns are a single word", () => {
		const response = nouns.filter((noun) => {
			const wordCount = noun.split(" ").length;
			return wordCount > 1;
		});

		expect(response).toEqual([]);
	});

	it("ensures adjectives only contain letters", () => {
		const response = adjectives.filter((adjective) => {
			const letters = adjective.match(/[a-z]/g);
			return letters === null;
		});

		expect(response).toEqual([]);
	});

	it("ensures nouns only contain letters", () => {
		const response = nouns.filter((noun) => {
			const letters = noun.match(/[a-z]/g);
			return letters === null;
		});

		expect(response).toEqual([]);
	});
});
