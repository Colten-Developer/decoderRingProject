// Write your tests here!
const {expect} = require("chai");
const caesarModule = require("../src/caesar");

describe("caesarModule", () => {
	it("should return an encoded message", () => {
		const input = "thinkful"
		const shift = 3
		const actual = caesarModule(input, shift)
		const expected = "wklqnixo"
		expect(actual).to.equal(expected)
	});
	it("should return an encoded message", () => {
		const input = "thinkf ul"
		const shift = 3
		const actual = caesarModule(input, shift)
		const expected = "wklqni xo"
		expect(actual).to.equal(expected)
	});
	it("should return an encoded message", () => {
		const input = "thinkfu'l"
		const shift = 3
		const actual = caesarModule(input, shift)
		const expected = "wklqnix'o"
		expect(actual).to.equal(expected)
	});
	it("should return false if input is empty", () => {
		const input = ""
		const shift = 3
		const actual = caesarModule(input, shift)
		const expected = false
		expect(actual).to.equal(expected)
	});
	it("should return false if shift is empty", () => {
		const input = 'thinkful'
		const shift = ''
		const actual = caesarModule(input, shift)
		const expected = false
		expect(actual).to.equal(expected)
	});
});