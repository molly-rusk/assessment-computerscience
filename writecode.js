// #1

function sumZero(array){

    let value = "False"
    for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (i !== j) {
        if (array[i] + array[j] === 0) {
         value = "True"
        } 
      }
    }
  }
  console.log(value)

}
        
//sumZero([])
// The runtime for sumZero is O(n^2)
// The space complexity for sumZero is O(n^2)


// # 2
function hasUniqueChars(string){
    return new Set(string).size == string.length
}

// console.log(hasUniqueChars('Moonday'))
// The runtime for hasUniqueChars is O(1)
// The space complexity for hasUniqueChars is O(1)


// #3

function isPangram(string){
  
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")
    string = string.toLowerCase()
    return alphabet.every(x => string.includes(x))
}

//console.log(isPangram("The quick brown fox jumps over the lazy dog!"))

// The runtime of isPangram is O(n)
// The space complexity of isPangram is O(n)


// #4

function findLongestWord(array){
    let word = "";
  for (let i = 0; i < array.length; i++) {
    if (word.length < array[i].length) {
      word = array[i];
    }
  }
  console.log(word.length)
}

// findLongestWord(["hi", "hello"])
// The runtime for findLongestWord is O(n)
// The space complexity for findLongestWord is O(n)