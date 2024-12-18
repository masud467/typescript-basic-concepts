let userId: string | number | boolean;

userId = "123";
userId = 123;
userId = true;

function userInfo(userId: string | number) {
  console.log(userId);
}
userInfo(123);
userInfo("123");