const user = {
	name: 'name',
	age: 10,
	password: 12345
};

const killPassword = ({ password, ...rest }) => rest;
const cleanUser = killPassword(user);
console.log(cleanUser);
// {name: "name", age: 10}

const setCountury = ({ country = 'KR', ...rest }) => ({ country, ...rest });
console.log(setCountury(user));
// {country: "KR", name: "name", age: 10, password: 12345}

//              destructring    rest                  spread
const rename = ({ name: NAME, ...rest }) => ({ NAME, ...rest });
console.log(rename(user));
// {NAME: "name", age: 10, password: 12345}
