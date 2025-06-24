import { describe, expect, it } from "vitest";

import { generate } from "./generate.js";
import adjectives from "./words/adjectives.js";
import nouns from "./words/nouns.js";
import colors from "./words/colors.js";

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

	describe("with color option", () => {
		it("returns a string with no spaces when withColor is true", () => {
			const response = generate({ withColor: true });

			expect(response).not.toContain(" ");
		});

		it("returns a string with two dashes when withColor is true", () => {
			const response = generate({ withColor: true });

			const dashCount = response.split("-").length - 1;
			expect(dashCount).toBe(2);
		});

		it("returns a string with three words when withColor is true", () => {
			const response = generate({ withColor: true });

			const wordCount = response.split("-").length;
			expect(wordCount).toBe(3);
		});

		it("returns a string with the first word from colors when withColor is true", () => {
			const response = generate({ withColor: true });

			const color = response.split("-")[0];
			expect(colors).toContain(color);
		});

		it("returns a string with the second word from adjectives when withColor is true", () => {
			const response = generate({ withColor: true });

			const adjective = response.split("-")[1];
			expect(adjectives).toContain(adjective);
		});

		it("returns a string with the third word from nouns when withColor is true", () => {
			const response = generate({ withColor: true });

			const noun = response.split("-")[2];
			expect(nouns).toContain(noun);
		});
	});
});
