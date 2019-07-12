let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'];

// Add elements
daysOfWeek.push('Fri', 'Sat');
console.log(daysOfWeek);

// unshift - Add elements at the start of the array
daysOfWeek.unshift(-2);
daysOfWeek.unshift(-4, -3);
console.log(daysOfWeek);
// [-4, -3, -2, "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

// Remove Elemenets - at the end of the array
daysOfWeek.pop();
console.log(daysOfWeek);
// [-4, -3, -2, "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]

// Shift - Remove the element at the beginning of the array
daysOfWeek.shift();
console.log(daysOfWeek);
// [-3, -2, "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]

// Splice - Remove an element from an array by simply specifying the position/index
// and how many elements we would like to remove
daysOfWeek.splice(0, 2);
console.log(daysOfWeek);
// ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]
