// For this to work you need an array which your want to conver to lowercase/uppercase
var original_array = [
  'apple',
  'Car',
  'earth',
  'OwO'
]

// declare an empty array for each lowercase and uppercase
var lowercase_array = [];
var uppercase_array = [];

// function to conver the array yo lowercase
original_array.forEach((value, index) => {
  lowercase_array.push(value.toLowerCase())
})

// function to conver the array yo upperrcase
original_array.forEach((value, index) => {
  uppercase_array.push(value.toUpperCase())
})

// this will convert the empty array into array with all elements lowercased/uppercased
// then you can console.log() to access those arrays
