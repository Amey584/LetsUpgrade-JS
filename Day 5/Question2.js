//Question 2

class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.MyCoins = 0;
        this.courses = [];
    }

    login() {
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout() {
        console.log(`${this.name} has logged out`);
        return this;
    }
    getDetails() {
        console.log(`Name is ${this.name}, email is ${this.email}, Age is ${this.age}`);
        return this;
    }

}

class Moderator extends User {
    constructor(name, age, email, role) {
        super(name, age, email);
        this.role = role;
    }
    addCoins(user) {
        user.MyCoins++;
        console.log(`${user.name} has ${user.MyCoins} coins`);
        return this;
    }
    removeCoins(user) {
        user.MyCoins--;
        console.log(`${user.name} has ${user.MyCoins} coins`);
        return this;
    }
}

class Admin extends Moderator {
    addCourse(user, course) {
        user.courses.push(course);
        console.log(`${course} course assigned to ${user.name}`);
        return this;
    }
    removeCourse(user, course) {
        user.courses = user.courses.filter(item => item !== course);
        console.log(`${course} course removed for ${user.name}`);
        return this;
    }
}

// Creating Users
let user1 = new User('Amey', 25, 'a@gmail.com')
let user2 = new User('test', 12, 'test@gmai.com')
let mod = new Moderator('Mod', 48, 'm@gmail.com', 'Moderator');
let admin = new Admin('Adm', 30, 'Adm@gmail.com');

let users = [user1, user2, mod, admin];

//printing user data to console
users.forEach(element => {
    console.log(element);
});

//user functions:
user1.login().getDetails().logout();
user2.login().getDetails().logout();

//Moderator functions:
mod.addCoins(user1).addCoins(user1).removeCoins(user1);
mod.addCoins(user2).removeCoins(user2);


//Admin functions:
admin.addCourse(user1, 'Nodejs');
admin.addCourse(user1, 'AI - ML');

admin.addCourse(user2, 'Nodejs');
admin.removeCourse(user1, 'Nodejs');


