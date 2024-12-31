var userInfo1;
var userInfo2;
var userInfo3;
userInfo1 = function () {
    console.log('Anisul islam is 33 years old');
};
userInfo2 = function (name) {
    console.log("".concat(name, " is 33 years old"));
};
userInfo3 = function (name, age) {
    return "".concat(name, " is ").concat(age, " years old");
};
userInfo1();
userInfo2('Anisul islam');
// const result =userInfo3('Anisul islam',33);
// console.log(result);
console.log(userInfo3('Anisul islam', 33));
