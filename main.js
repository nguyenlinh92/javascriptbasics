console.log('Hello');
var name = 'Honza';
var number = 0.234;
var jeBlbej = true;
console.log(name);

var mleko = 'mleko';
var mouka = 'mouka';
var vejce = 'vejce';
function cook(mleko, mouka, vejce) {
    console.log('varim ' + mleko + ' ' + mouka + ' ' + vejce);
}
cook(mleko, mouka, vejce);
if (number>0) {
    console.log('pět je větší než nula');
    console.log('deset je větší jak pět');
}
if (name === 'Honza') {
    console.log('Jmenuje se Honza');
}