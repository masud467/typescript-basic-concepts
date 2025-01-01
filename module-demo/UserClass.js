"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(userName, userAge) {
        this.userName = userName;
        this.userAge = userAge;
    }
    User.prototype.display = function () {
        console.log("name is ".concat(this.userName, " and age is ").concat(this.userAge));
    };
    return User;
}());
exports.User = User;
