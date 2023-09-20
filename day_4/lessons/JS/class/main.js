let isRainy = false;
let isHoliday = true;

let result;
// console.log(result)

// if (isRainy) {
//     console.log('Bring an umbrella')
// } else {
//     console.log('No need for an umbrella')
// }

if (isRainy && isHoliday) {
    result = "Stay home"
} else if (isRainy && !isHoliday) {
    result = 'take umbrealla and go to work'
} else {
    result = 'something'
}

console.log(result)