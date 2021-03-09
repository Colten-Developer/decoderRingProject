// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
	//if input is not vaild return false.
	if(!input){
		return false
	}
	//make encoded alphabet, try 2d array 
	const polyAlphabet = [['a','b','c','d','e'],['f','g','h','(i/j)','k'],
	['l','m','n','o','p'],['q','r','s','t','u'],
	['v','w','x','y','z']]
	input = input.toLowerCase()
	
	if(encode){
		//happy case encode. input is a string with no symbols
		let encodedMessage = ''
		for(let letter of input){
			if(letter === 'i' || letter === 'j'){
				encodedMessage += '42'
			}else if( letter === ' '){
				encodedMessage += ' '
			}
			for(let row in polyAlphabet){
				for(let col in polyAlphabet){
					if(letter === polyAlphabet[row][col]){
						const holdRow = Number(row) +1
						const holdCol = Number(col) +1
						const addRow = holdRow.toString()
						const addCol = holdCol.toString()
						const newNumber = addCol + addRow
						encodedMessage += newNumber
					}
				}
			}
		}
		return encodedMessage
	}else{
		let inputWOSpace = input.replace(' ', '')
		if(inputWOSpace.length % 2 != 0){
			return false
		}
		//happy case decode. input is a string of numbers with no symbols
		//polyalph[i+1][i] 
		let decodedMessage = ''
		for(let i = 0; i < input.length; i+=2){
			if(input[i] === ' '){
				decodedMessage += ' '
				i -=1
			}else{
				let numInput = Number(input[i]) - 1
				let numInput2 = Number(input[i+1]) - 1
				decodedMessage += polyAlphabet[numInput2][numInput]
			}
		}
		return decodedMessage
	}
	
	
	
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
