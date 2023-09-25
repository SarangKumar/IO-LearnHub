function isValidEmail(name, email) {
  // console.log('Hi i am a function')
  console.log("My name is: ", name);
  if (email.includes("@")) {
    return true;
  } else {
    return false;
  }
}

// console.log(isValidEmail('SomeName', 'someemail'))
// console.log(isValidEmail('hello world','someemail@gmail.com'))

function isRainy(rain) {
  if (rain === true) {
    return "It is raining";
  } else {
    return "It is not raining";
  }
}
// console.log(isRainy(true))
// console.log(isRainy(false))

// function detail(food, beverage="water"){
//     console.log(`I like to eat ${food} and drink ${beverage}`)
// }

// detail('pizza')
// function detail(food, beverage) {
//   console.log(`I like to eat ${food} and drink ${beverage}`);
// }

// detail({beverage : "milk", food : "pizza"});



// function detail({food, beverage}) {
//     console.log(`I like to eat ${food} and drink ${beverage}`);
// }

// detail({beverage : "milk", food : "pizza"});

let menu = {
    beverage: 'Drink Name',
    food: 'Food Name',
    snacks: 'biscuits'
}

function detail({food, beverage}) {
    console.log(`I like to eat ${food} and drink ${beverage}`);
}
detail(menu)