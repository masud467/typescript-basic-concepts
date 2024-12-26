// let users: {UserName: string, UserId: number};
// users = {UserName: "John", UserId: 1};
// console.log(users);
// let users:object;
// users = {UserName: "John", UserId: 1, UserAge: 20};
var users;
users = [];
var user1;
user1 = { UserName: "John", UserId: 1 };
users.push(user1);
var user2;
user2 = { UserName: "anis", UserId: 2 };
users.push(user2);
console.log(users);
for (var user in users) {
    console.log(users[user]['UserName']);
}
