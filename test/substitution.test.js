// Write your tests here!
const {expect} = require("chai");
const substitutionModule = require("../src/substitution");

describe("substitutionModule", () => {
	it("should return an encoded message", () => {
		const input = "thinkful"
		const alphabet = 'bcdefghijklmnopqrstuvwxyza'
		const encode = true
		const actual = substitutionModule(input,alphabet,encode)
		const expected = "uijolgvm"
		expect(actual).to.equal(expected)
	});
	it("should return an decoded message", () => {
		const input = "uijolgvm"
		const alphabet = 'bcdefghijklmnopqrstuvwxyza'
		const encode = false
		const actual = substitutionModule(input,alphabet,encode)
		const expected = 'thinkful'
		expect(actual).to.equal(expected)
	});
	it("should return false if input is empty", () => {
		const input = ""
		const alphabet = 'bcdefghijklmnopqrstuvwxyza'
		const encode = true
		const actual = substitutionModule(input,alphabet,encode)
		const expected = false
		expect(actual).to.equal(expected)
	});
	it("should return false if alphabet is not 26 characters", () => {
		const input = ""
		const alphabet = 'bcdefghijklmnopqrstuvwx'
		const encode = true
		const actual = substitutionModule(input,alphabet,encode)
		const expected = false
		expect(actual).to.equal(expected)
	});
	it("should return false if alphabet has repeating values", () => {
		const input = ""
		const alphabet = 'bcdefghijklmnopqrstuvwxyaa'
		const encode = true
		const actual = substitutionModule(input,alphabet,encode)
		const expected = false
		expect(actual).to.equal(expected)
	});
});