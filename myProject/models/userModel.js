// userModel.js
const users = {};

class User {
    constructor(login, email, password) {
        this.id = this.generateId();
        this.login = login;
        this.email = email;
        this.password = password;
    }

    
    generateId() {
        let id = '';
        const numbers = '0123456789';

        // generation 6-symbols id 
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * numbers.length);
            id += numbers.charAt(randomIndex);
        }

        return id;
    }


    addUser(user) {
         // Store the new user object in the users object with the ID as key
        users[user.id] = { id: user.id, login: user.login, email: user.email, password: user.password };

        console.log('User has been added ')
        console.log(users);
    }  

    getList() {
        console.log(users);
    }
}

module.exports = User;