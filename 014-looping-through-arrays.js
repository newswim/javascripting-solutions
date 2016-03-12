var pets = ['cat', 'dog', 'rat']

// According to the instructions . . .

// for (i = 0; i <= (pets.length - 1); i++) {
//   pets[i] = pets[i] + 's';
// }


// Trying the splice() method . . .

function pluralize(element, index, array) {
  array.splice(index, 1, (element + 's'))
}

pets.forEach(pluralize)

console.log(pets)
