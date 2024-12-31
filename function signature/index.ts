let userInfo1:()=>void;
let userInfo2:(name:string)=>void;
let userInfo3:(name:string, age:number)=>string;

userInfo1 = ()=>{
  console.log('Anisul islam is 33 years old');
}
userInfo2 = (name:string)=>{
  console.log(`${name} is 33 years old`);
}
userInfo3 = (name:string,age:number)=>{
  return `${name} is ${age} years old`;
}
userInfo1();
userInfo2('Anisul islam');
// const result =userInfo3('Anisul islam',33);
// console.log(result);
console.log(userInfo3('Anisul islam',33));
