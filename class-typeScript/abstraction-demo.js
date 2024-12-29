var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = /** @class */ (function () {
    function user(name, age) {
        this.name = name;
        this.age = age;
    }
    return user;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(name, age, studentId) {
        var _this = _super.call(this, name, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    student.prototype.display = function () {
        console.log("student name is ".concat(this.name, ",age is ").concat(this.age, " and id is ").concat(this.studentId));
    };
    return student;
}(user));
var student1 = new student('anis', 33, 101);
student1.display();
