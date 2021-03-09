// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  /*
	let input = 'uijolg vm' //uijolgvm thinkful
	let alphabet = 'bcdefghijklmnopqrstuvwxyza'
	encode = false
	console.log(substitution(input,alphabet,encode))
	*/

  function substitution(input, alphabet, encode = true) {
    // your solution code here
	if(!input || !alphabet || alphabet.length != 26){
		return false
	}
	
	for(let i = 0; i < alphabet.length; i++){
		for(let j = i+1 ; j < alphabet.length; j++){
			if(alphabet[i] === alphabet[j]){
				return false
			}
		}
	}
	const regAlphabet = 'abcdefghijklmnopqrstuvwxyz';
	input = input.toLowerCase()
	if(encode){
		let result = '';
		for(let inputIndex in input){
			if(input[inputIndex] === ' '){
				result += ' '
			}
			//console.log(input[inputIndex])
			for(let regAlphIndex in regAlphabet){
				let holdIndex = 0
				 if(input[inputIndex] === regAlphabet[regAlphIndex]){
					 holdIndex = regAlphIndex
					 result += alphabet[holdIndex]
				 }
			}
			
		}
		return result
	}else{
		let result = ''
		for(let inputIndex in input){
			if(input[inputIndex] === ' '){
				result += ' '
			}
			for(let alphabetIndex in alphabet){
				let holdIndex = 0
				if(input[inputIndex] === alphabet[alphabetIndex]) {
					holdIndex = alphabetIndex
					result += regAlphabet[holdIndex]
				}
			}
		}
		return result
	}
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
