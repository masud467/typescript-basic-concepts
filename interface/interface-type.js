var users = [];
var user1 = {
    id: 1,
    name: 'Anisul Islam',
    age: 32
};
var user2 = {
    id: 2,
    name: 'Masud',
    age: 26
};
users.push(user1);
users.push(user2);
// console.log(users)
var printUserInfo = function (user) {
    console.log("UserId=".concat(user.id, ", UserName=").concat(user.name, ", UserAge=").concat(user.age));
};
users.forEach(function (user) {
    printUserInfo(user);
});
