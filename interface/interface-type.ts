interface IUser{
  id:number,
  name:string,
  age:number,
}
let users:IUser[]=[]
let user1:IUser={
  id:1,
  name:'Anisul Islam',
  age:32
}
let user2:IUser={
  id:2,
  name:'Masud',
  age:26
}
users.push(user1)
users.push(user2)
// console.log(users)

const printUserInfo=(user:IUser)=>{
  console.log(`UserId=${user.id}, UserName=${user.name}, UserAge=${user.age}`);
}

users.forEach(user=>{
  printUserInfo(user)
})