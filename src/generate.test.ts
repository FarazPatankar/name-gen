import { describe, expect, it, vi } from "vitest";

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

	describe("with withColor option", () => {
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

	describe("with adjectives option", () => {
		it("returns a string with no spaces when adjectives are provided", () => {
			const response = generate({ adjectives: () => ["good", "cool"] });

			expect(response).not.toContain(" ");
		});

		it("returns a string with one of the specified adjectives", () => {
			const response = generate({ adjectives: () => ["good", "nice"] });

			const adjective = response.split("-")[0];
			expect(["good", "nice"]).toContain(adjective);
		});

		it("passes the exsiting adjectives", () => {
			const fn = vi.fn(() => ["good", "nice"]);
			generate({ adjectives: fn });

			expect(fn).toHaveBeenCalledWith(adjectives);
		});

		it("returns a string with the second word from nouns", () => {
			const response = generate({ adjectives: () => ["good", "nice"] });

			const noun = response.split("-")[1];
			expect(nouns).toContain(noun);
		});
	});

	describe("with nouns option", () => {
		it("returns a string with no spaces when nouns are provided", () => {
			const response = generate({ nouns: () => ["energy", "vibe"] });

			expect(response).not.toContain(" ");
		});

		it("returns a string with one of the specified nouns", () => {
			const response = generate({ nouns: () => ["energy", "vibe"] });

			const noun = response.split("-")[1];
			expect(["energy", "vibe"]).toContain(noun);
		});

		it("passes the exsiting nouns", () => {
			const fn = vi.fn(() => ["energy", "vibe"]);
			generate({ nouns: fn });

			expect(fn).toHaveBeenCalledWith(nouns);
		});

		it("returns a string with the first word from adjectives", () => {
			const response = generate({ nouns: () => ["energy", "vibe"] });

			const adjective = response.split("-")[0];
			expect(adjectives).toContain(adjective);
		});
	});

	describe("with colors option", () => {
		it("returns a string with no spaces when colors are provided", () => {
			const response = generate({
				colors: () => ["hazel", "rainbow"],
				withColor: true,
			});

			expect(response).not.toContain(" ");
		});

		it("returns a string with one of the specified colors", () => {
			const response = generate({
				colors: () => ["hazel", "rainbow"],
				withColor: true,
			});

			const color = response.split("-")[0];
			expect(["hazel", "rainbow"]).toContain(color);
		});

		it("passes the exsiting colors", () => {
			const fn = vi.fn(() => ["hazel", "rainbow"]);
			generate({ colors: fn, withColor: true });

			expect(fn).toHaveBeenCalledWith(colors);
		});

		it("returns a string with the second word from adjectives", () => {
			const response = generate({
				colors: () => ["hazel", "rainbow"],
				withColor: true,
			});

			const adjective = response.split("-")[1];
			expect(adjectives).toContain(adjective);
		});

		it("returns a string with the third word from nouns", () => {
			const response = generate({
				colors: () => ["hazel", "rainbow"],
				withColor: true,
			});

			const noun = response.split("-")[2];
			expect(nouns).toContain(noun);
		});

		it("returns a string with one dash when withColor is false", () => {
			const response = generate({
				colors: () => ["hazel", "rainbow"],
				withColor: false,
			});

			const dashCount = response.split("-").length - 1;
			expect(dashCount).toBe(1);
		});

		it("returns a string with one dash when withColor is unset", () => {
			const response = generate({ colors: () => ["hazel", "rainbow"] });

			const dashCount = response.split("-").length - 1;
			expect(dashCount).toBe(1);
		});
	});
});
