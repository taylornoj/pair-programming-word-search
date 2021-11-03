// @sharifhashim
// @taylornoj
// @alasam


const transpose = function(matrix) {

    let array = [];
    if (matrix.length === 0) {
        return false
    }
    for (let i = 0; i < matrix[0].length; i++) {
        array.push([]);
    }   
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        array[j][i] = matrix[i][j];
      }
    }
    return array.map(ls => ls.join(''))
  }

const reverse = function(word) {
    let array = [];
    for (let i = word.length; i >= 0; i--) {
        array.push(word[i])
    }
    return array.join("")
};


const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters);
    const reversed = reverse(word)    
    
    // in correct order
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        } 
    } 
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true
        } 
    }

    // in reverse order
    for (l of horizontalJoin) {
        if (l.includes(reversed)) {
            return true
        } 
    } 
    for (l of verticalJoin) {
        if (l.includes(reversed)) {
            return true
        } 
    }

    return false
}

// const verticalSearch = function (letters) {
//     //const verticalJoin = letters
//     return letters
//     //console.log(verticalJoin)
// }

console.log(([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ]))
console.log(reverse("banana"))
//module.exports = verticalSearch
module.exports = wordSearch