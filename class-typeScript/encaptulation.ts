// public,private,protected,readonly
// in default all are public
class user{
  // private name:string;
  // protected age:number;
  // readonly city:string;
  // public name:string;
  name:string;
  age:number;
  constructor(name:string,age:number){
      this.name=name;
      this.age=age;
  }
  display():void{
    console.log('hi');
  }
}

class student extends user{
  studentId:number;
  constructor(name:string,age:number,studentId:number){
   super(name,age);
   this.studentId=studentId
}
display(): void {
  console.log(`student name is ${this.name},age is ${this.age} and id is ${this.studentId}`);
}
  
}
let student1 = new student('anis',33,101)
student1.display()


