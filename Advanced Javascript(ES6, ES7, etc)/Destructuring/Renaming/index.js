const settings = {
	color: {
		chosen_color: 'dark'
	}
};

let chosenColor = 'blue';
console.log(chosenColor);

({
	// chosen_color changes the name to chosenColor,
	// but if it doesn't exist, default value is light
	color: { chosen_color: chosenColor = 'light' }
} = settings);

console.log(chosenColor);
