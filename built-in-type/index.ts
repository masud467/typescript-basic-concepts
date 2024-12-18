// built-in data type: number, string, boolean, null, undefined, void

let userId:number;
let firstName:string;
let lastName:string;
let fullName:string;
let isActivated:boolean;
userId = 123;
firstName = 'Anisul';
lastName = 'Islam';
isActivated = true;
// fullName = firstName + ' ' + lastName;
// fullName = `${firstName} ${lastName}`;
// fullName= firstName.concat(lastName);
fullName= firstName.concat(' ').concat(lastName);
console.log(fullName);

console.log(`Your id is ${userId}, your name is ${fullName} and your activation status is ${isActivated}`); 

console.log(fullName.split(''));
console.log(fullName.split(' '));
console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase());

function display():void{
  console.log('Hello World');
}
display();