//  原型 共享属性和方法
 function Person(name,age){
        this.name = name;
        this.age = age;
        
    }
    Person.prototype.sayHello=function(){
        console.log(this.name + "say hello");
    }
    var girl = new Person("bella",23);
    var boy = new Person("alex",23);
    console.log(girl.name);  //bella
    console.log(boy.name);   //alex
    console.log(girl.sayHello === boy.sayHello); // 是同一个方法