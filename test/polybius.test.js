// Write your tests here!
const {expect} = require("chai");
const polybiusModule = require("../src/polybius");

describe("polybiusModule", () => {
	it("should return an encoded message", () => {
		const input = "thinkful"
		const encode = true
		const actual = polybiusModule(input, encode)
		const expected = "4432423352125413"
		expect(actual).to.equal(expected)
	});
	it("should return an decoded message", () => {
		const input = "4432423352125413"
		const encode = false
		const actual = polybiusModule(input, encode)
		const expected = 'th(i/j)nkful'
		expect(actual).to.equal(expected)
	});
	it("should return false", () => {
		const input = ""
		const encode = true
		const actual = polybiusModule(input, encode)
		const expected = false
		expect(actual).to.equal(expected)
	});
	it("should return false", () => {
		const input = '1234567'
		const encode = false
		const actual = polybiusModule(input, encode)
		const expected = false
		expect(actual).to.equal(expected)
	});
});