import { describe, expect, it } from "vitest";

import { generate } from "./generate.js";
import adjectives from "./words/adjectives.js";
import nouns from "./words/nouns.js";

describe("generate", () => {
	it("returns a string with no spaces", () => {
		const response = generate();

		expect(response).not.toContain(" ");
	});

	it("returns a string with one dash", () => {
		const response = generate();

		const dashCount = response.split("-").length - 1;
		expect(dashCount).toBe(1);
	});

	it("returns a string with two words", () => {
		const response = generate();

		const wordCount = response.split("-").length;
		expect(wordCount).toBe(2);
	});

	it("returns a string with the first word from adjectives", () => {
		const response = generate();

		const adjective = response.split("-")[0];
		expect(adjectives).toContain(adjective);
	});

	it("returns a string with the second word from nouns", () => {
		const response = generate();

		const noun = response.split("-")[1];
		expect(nouns).toContain(noun);
	});
});
