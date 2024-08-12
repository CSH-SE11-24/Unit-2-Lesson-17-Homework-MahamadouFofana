const prompt = require('prompt-sync')()
// Create an object that represents your favorite restaurant with the keys name (string), cuisine (string), and rating (number)

let favRestaurant = {
  name: "Olive Garden",
  cuisine: "Italian-American",
  rating: 10
}

// Console log the restaurant's name using the object

console.log(favRestaurant.name)


// Add a new key called location and add the restaurant's location

favRestaurant.location = "2 times sq, New York, NY 10036"



// Change the rating of the restaurant to increase it by one

favRestaurant.rating = 11

// Add a new key called test and set the value to null

favRestaurant.test = null


// Delete the test key

Reflect.deleteProperty(favRestaurant, 'test')

// Console log the object to see if the test key is gone

console.log(favRestaurant)


// Loop through the object and print every key and element.
// It should look like: 
// name is Ugly Baby
// cuisine is thai
// rating is 10
// location is 407 Smith St, Brooklyn

console.log("name is", favRestaurant.name)
console.log("cuisine is", favRestaurant.cuisine)
console.log("rating is", favRestaurant.rating)
console.log("location is", favRestaurant.location)




