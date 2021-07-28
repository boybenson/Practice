let benson = {
    school:'Legon',
    level:300,
    programme:'Computer Science'
}

let descriptor = Object.getOwnPropertyDescriptor(benson, 'programme')

console.log(descriptor);