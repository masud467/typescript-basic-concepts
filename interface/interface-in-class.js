var User = /** @class */ (function () {
    function User(name, age) {
        var _this = this;
        this.name = name;
        this.age = age;
        this.formatUser = function () {
            return "name:".concat(_this.name, ",age:").concat(_this.age);
        };
    }
    return User;
}());
var user = new User("John", 30);
console.log(user);
console.log(user.formatUser());
