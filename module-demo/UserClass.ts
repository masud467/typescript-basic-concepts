export class User{
  userName:string;
  userAge:number;
  constructor(userName:string,userAge:number){
      this.userName=userName;
      this.userAge=userAge;
  }
  display():void{
      console.log(`name is ${this.userName} and age is ${this.userAge}`);
  }
}