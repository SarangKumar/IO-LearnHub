let user_details = [
    {
        name: 'name 1',
        email: 'name@gmail.com'
    }, {
        name: 'name 2',
        email: 'somethi@gmail.com'
    }
]

user_details.map(user =>  {
    let email = user.email;
    console.log(user.name)
})