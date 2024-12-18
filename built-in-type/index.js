// built-in data type: number, string, boolean, null, undefined, void
var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 123;
firstName = 'Anisul';
lastName = 'Islam';
isActivated = true;
// fullName = firstName + ' ' + lastName;
// fullName = `${firstName} ${lastName}`;
// fullName= firstName.concat(lastName);
fullName = firstName.concat(' ').concat(lastName);
console.log(fullName);
console.log("Your id is ".concat(userId, ", your name is ").concat(fullName, " and your activation status is ").concat(isActivated));
console.log(fullName.split(''));
console.log(fullName.split(' '));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
function display() {
    console.log('Hello World');
}
display();
