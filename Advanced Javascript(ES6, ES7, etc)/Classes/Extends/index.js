class User {
	constructor(name, lastName, email, password) {
		this.username = name;
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

const user = new User('name', 'last', 'a@a.com', '123');

user.getProfile();
/*
console.log(user.password);
user.updatePassword('1234', '123');
console.log(user.password);
*/

class Admin extends User {
	deleteWebsite() {
		console.log('Delete the whole website...');
	}
}

const admin = new Admin('name', 'last', 'a@a.com', '123');
admin.deleteWebsite();
console.log(admin.email);
