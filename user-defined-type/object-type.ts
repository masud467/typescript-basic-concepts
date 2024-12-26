// let users: {UserName: string, UserId: number};
// users = {UserName: "John", UserId: 1};
// console.log(users);

// let users:object;
// users = {UserName: "John", UserId: 1, UserAge: 20};

let users: object[];
users=[];

let user1:{UserName: string, UserId: number};
user1 = {UserName: "John", UserId: 1};
users.push(user1);


let user2:{UserName: string, UserId: number};
user2 = {UserName: "anis", UserId: 2};
users.push(user2);
console.log(users);

for(const user in users){
    console.log(users[user]['UserName']);
}