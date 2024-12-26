var student = /** @class */ (function () {
    function student(name, age) {
        this.name = name;
        this.age = age;
    }
    student.prototype.display = function () {
        console.log("name is ".concat(this.name, " and age is ").concat(this.age));
    };
    return student;
}());
var student1 = new student("anis", 33);
student1.display();
var student2 = new student("masud", 26);
student2.display();
