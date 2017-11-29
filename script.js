var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var names = femaleNames.concat(maleNames);
console.log(names);

var newName = 'Sylwia'

if(names.indexOf(newName) === -1) {
  names.splice(0, 0, 'Sylwia');
}
console.log(names);
