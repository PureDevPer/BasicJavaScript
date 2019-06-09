let mon = 'Sat';
let sat = 'Mon';

// Swapping
[sat, mon] = [mon, sat];
console.log(sat, mon);

const days = ['mon', 'tue', 'wed', 'thu', 'fri'];
const [, , , thu, fri] = days;
console.log(thu, fri);
