class Parent {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    say(){
        console.log(`名字是${this.name},年龄${this.age}`)
    }
}

var pp=new Parent("hfhfshff",18);
pp.say();