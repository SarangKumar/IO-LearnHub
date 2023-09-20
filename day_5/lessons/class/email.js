let email = ' something@gmail.com';

// if (email.includes('@')) {
//     console.log('has @');

//     email.toLowerCase()
//     let valid_email = email.trim();
//     console.log(`Valid email is '${valid_email}'`);
// } else {
//     console.log('does not have @')
// }

let parts = email.split('@');
console.log(parts)