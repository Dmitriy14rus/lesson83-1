const user = {
    name: 'Dmitriy',
    age: 28,
    work: 'electrician'
}
console.log(user)

// ===================================================
let greeting = ['Hello']
greeting.push('Dmitriy')


console.log(greeting);

// ====================================================
let users = [
    {
        userName: 'Ivan',
        years: 35,
        isAdmin: true
    },
    {
        userName: 'Nikolai',
        years: 32,
        isAdmin: false
    },
    {
        userName: 'Olga',
        years: 29,
        isAdmin: true
    },
    {
        userName: 'Irina',
        years: 25,
        isAdmin: false
    },
    {
        userName: 'Vladimir',
        years: 35,
        isAdmin: false
    },
    {
        userName: 'Konstantin',
        years: 30,
        isAdmin: true
    },

]

let simpleUser = 0;


for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin == false) {
        users[i] = 1
        simpleUser= simpleUser + users[i]
    }
}
console.log(simpleUser)













