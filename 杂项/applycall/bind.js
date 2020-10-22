var user = {
  greet: "Hello!",
  greetUser: function(username){
    return this.greet+" "+ username;
  }
}

console.log(user.greetUser("aa"))
var fun = user.greetUser.bind(user);
var fun1 = user.greetUser.bind({greet: "qin"})
console.log(fun("bb"))
console.log(fun1("chuan"))
console.log('---------------------------------')
var user2 = {
    greet : 'Hello2'
}
console.log(user.greetUser.call(user2))
console.log(user.greetUser.call(user2, 'dd'))
console.log(user.greetUser.apply(user2, ['ee']))