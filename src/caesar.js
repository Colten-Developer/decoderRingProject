// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  
	function encodeAlphabet(shift){
		//initalize variables
		let alphabet = [['a'],['b'],['c'],['d'],['e'],['f'],['g'],['h'],['i'],['j'],['k'],['l'],
		['m'],['n'],['o'],['p'],['q'],['r'],['s'],['t'],['u'],['v'],['w'],['x'],['y'],['z']]
		let encodedAlphabet = []
		if(shift > 0){
			//iterate though alphabet
			for(let index in alphabet){
				//if index is less than shift
				if((Number(index) + Number(shift)) < 26){
					//encodedAlphabet = alphabet[index + shift]
					encodedAlphabet.push(alphabet[Number(index) + Number(shift)])
				}else{
					//encoded alphabet = alphabet at 26 - shift - index ie if shift = 3 
					//&& index = 23 alphabet[26-3-23] = alphabet[0] = x 
					encodedAlphabet.push(alphabet[-(26 - Number(index) - Number(shift))])
				}
			}
			//return encoded alphabet
			return encodedAlphabet
		}else{
			let absoluteValueShift = -(shift)
			for(let index in alphabet){
				//if index is less than shift
				if(index < absoluteValueShift){
					//encoded alphabet = alphabet at 26 - shift + index ie if shift = 3 
					//&& index = 0 alphabet[26-3+0] = alphabet[23] = x 
					encodedAlphabet.push(alphabet[26-absoluteValueShift+Number(index)])
				}else{
					//encodedAlphabet = alphabet[index -shift]
					encodedAlphabet.push(alphabet[index - absoluteValueShift])
				}
			}
			return encodedAlphabet
		}
	}


  function caesar(input, shift, encode = true) {
	  //error if input = falsey || (-25 > shift || shift > 25 || shift = 0 || shift = falsey)
	  if(!input){
		  return false
	  }else if(shift < -25 || shift > 25 || shift === 0 || typeof shift != 'number' || !shift){
		  return false
	  }
		//initalize variables
		let alphabet = [['a'],['b'],['c'],['d'],['e'],['f'],['g'],['h'],['i'],['j'],['k'],['l'],
		['m'],['n'],['o'],['p'],['q'],['r'],['s'],['t'],['u'],['v'],['w'],['x'],['y'],['z']]
		let encodedAlphabet = []
		//this allows the code to work regardless of captialzation
		input = input.toLowerCase()
		
	  if(encode === true){
		  /*happy case encode is input is = (input = 'stringWithNoNumbers') &&
		  (-25 < shift < 25, shift != 0) && (encode = true)*/
		  //coded message variables
		  let codedMessage = ''
		  encodedAlphabet = encodeAlphabet(shift)
		  for(let index in input){
			  if(input[index] === ' ' || typeof input[index] === 'number' || input[index] === '!' || input[index] === '@' || input[index] === '#' || input[index] === '$' || input[index] === '%' || input[index] === '^' || input[index] === '&' || input[index] === '*' || input[index] === '(' || input[index] === ')' || input[index] === '-' || input[index] === '_' || input[index] === '=' || input[index] === '+' || input[index] === '[' || input[index] === ']' || input[index] === '{' || input[index] === '}' || input[index] === ';' || input[index] === ':' || input[index] === '"' || input[index] === "'" || input[index] === ',' || input[index] === '<' || input[index] === '.' || input[index] === '>' || input[index] === '?' || input[index] === '/' || input[index] === '|' || input[index] === '`' || input[index] === '~'){
				  codedMessage+= input[index]
			  }else{
				  let letterIndex = alphabet.findIndex((letter) => input[index] == letter)
				  codedMessage += encodedAlphabet[letterIndex]
			  }
		  }
		  return codedMessage
		  
	  }else if(encode === false){
		  /*happy case decode is input is = (input = 'stringWithNoNumbers') &&
		  (-25 < shift < 25, shift != 0) && (encode = false)*/
		  let decodedMessage = ''
		  encodedAlphabet = encodeAlphabet(shift)
		  for(let index in input){
			  if(input[index] === ' ' || typeof input[index] === 'number' || input[index] === '!' || input[index] === '@' || input[index] === '#' || input[index] === '$' || input[index] === '%' || input[index] === '^' || input[index] === '&' || input[index] === '*' || input[index] === '(' || input[index] === ')' || input[index] === '-' || input[index] === '_' || input[index] === '=' || input[index] === '+' || input[index] === '[' || input[index] === ']' || input[index] === '{' || input[index] === '}' || input[index] === ';' || input[index] === ':' || input[index] === '"' || input[index] === "'" || input[index] === ',' || input[index] === '<' || input[index] === '.' || input[index] === '>' || input[index] === '?' || input[index] === '/' || input[index] === '|' || input[index] === '`' || input[index] === '~'){
				  decodedMessage+= input[index]
			  }else{
				  let letterIndex = encodedAlphabet.findIndex((letter) => input[index] == letter)
				  decodedMessage += alphabet[letterIndex]
			  }
		  }
		  return decodedMessage
	  }
	  
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
