const arr = [1, 2, 3, 4, 5]

// let mappedArr = arr.map(function (item) {
//   console.log(item)
//   return item * 2
// })

// mappedArr
// arr

const mappedArr = []

console.log([1, 2, 3, 4, 5]); // => [1, 2, 3, 4, 5]

// const myFavoriteNumbers = [1, 2, 3, 4, 5]
// console.log( myFavoriteNumbers ) // => [1, 2, 3, 4, 5]

// const myOnlyFriends = ['Moe', 'Larry', 'Curly']
// console.log( myOnlyFriends ) // => ['Moe', 'Larry', 'Curly']

// Array Indexes
// How do I get the first value in an array?
// console.log( myOnlyFriends[0] ) // => 'Moe'
// console.log( myOnlyFriends[1] ) // => 'Larry'
// console.log( myOnlyFriends[2] ) // => 'Curly'

// Array Length
// Always equal to the number of elements in the array
// console.log( myOnlyFriends.length ) // => 3
// console.log( myOnlyFriends[ myOnlyFriends.length ] ) // undefined
// console.log( myOnlyFriends[ myOnlyFriends.length - 1 ] ) // 'Curly'

let teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
teams.forEach(function (foo, index) {
      console.log(`${foo} - ${index}`);
    });

    //
    // 2. Array Methods
    //

    // There are a ton of array methods! Here are 4:

    // remove and return the last element from an array
    // console.log( myOnlyFriends.pop() ) // => 'Curly'

    // Add an item to the end of an array
    // console.log( myOnlyFriends.push( 'Christine' ) ) // => [ 'Christine', 'Moe', 'Larry', 'Curly' ]

    // Reverse the order of items within an array
    // console.log( myOnlyFriends.reverse() ) // => [ 'Curly', 'Larry', 'Moe' ]

    // Concatenate elements of an array together into a string
    // console.log( myOnlyFriends.join() ) // => 'Moe,Larry,Curly'
for (let i = 0; i < arr.length; i++) {
  mappedArr.push(arr[i] * 2)
}

mappedArr
