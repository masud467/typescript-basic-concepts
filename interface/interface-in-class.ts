interface IUser{
    formatUser:()=>string;
}
class User implements IUser{
  constructor(private name:string,private age:number){}
   formatUser=()=>{
    return `name:${this.name},age:${this.age}`;
   }
}
let user = new User("John", 30); 
console.log(user);
console.log(user.formatUser());