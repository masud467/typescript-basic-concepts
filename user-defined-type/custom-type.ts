// type user= {UserName: string, UserId: number}

// let users: user[];
// users=[];

// let user1:user;
// user1 = {UserName: "John", UserId: 1};
// users.push(user1);


// let user2:user;
// user2 = {UserName: "anis", UserId: 2};
// users.push(user2);

// let user3:user;
// user2 = {UserName: "masud", UserId: 3};
// users.push(user2);
// console.log(users);

// type RequestType = 'GET' | 'POST';
// let getRequest : RequestType
// getRequest ='GET';

// function requestHandler (requestType:RequestType){
//   console.log(requestType);
// }
// requestHandler('GET');


type student = {
  name: string,
  age: number,
  isActive: boolean
}
// let students : student[];
// students = [];
//OR
let students:object[];
students = [];

let student1:student;
student1 = {name: 'John', age: 20, isActive: true};
students.push(student1);

let student2:student;
student1 = {name: 'anis', age: 30, isActive: true};
students.push(student1);

let student3:student;
student1 = {name: 'masud', age: 26, isActive: true};
students.push(student1);

// console.log(students);


