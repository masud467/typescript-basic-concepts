function printUserInfo<X,Y>(userId:X,userAge:Y){
  console.log(`ID: ${userId}`);
}
printUserInfo('101',32)
printUserInfo(101,'32')
printUserInfo(101,32)
printUserInfo('101','32')