let girl = {
    name:"francisca",
    age:14,
    girl:true
}

let boy = {
    age:20,
    boy:true,
}

boy.__proto__ = girl

console.log(boy.name)