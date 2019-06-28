class User {
	constructor({ username, lastName, email, password }) {
		this.username = username;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
	}
	sayHello() {
		console.log(`Hello, my name is ${this.username}`);
	}
	getProfile() {
		console.log(`${this.username} ${this.email} ${this.password}`);
	}
	updatePassword(newPassword, currentPassword) {
		if (currentPassword === this.password) {
			this.password = newPassword;
		} else {
			console.log('cant change password');
		}
	}
}

const user = new User({
	username: 'name',
	lastName: 'last',
	email: 'a@a.com',
	password: '123'
});

user.getProfile();
/*
console.log(user.password);
user.updatePassword('1234', '123');
console.log(user.password);
*/

class Admin extends User {
	constructor({ username, lastName, email, password, superAdmin, isActive }) {
		super({ username, lastName, email, password });
		this.superAdmin = superAdmin;
		this.isActive = isActive;
	}
	deleteWebsite() {
		console.log('Delete the whole website...');
	}
}

const admin = new Admin({
	username: 'name',
	lastName: 'last',
	email: 'a@a.com',
	password: '123',
	superAdmin: true,
	isActive: true
});

console.log(admin.superAdmin);
console.log(admin.isActive);
