let user = {
    let: 1,
    name: "Jose ronerto", 
    age: 34, 
};

for (let propiedad in user) {
    console.log(propiedad, user[propiedad]);
}

let animales = ["Drilococo", "Caiman", "Macaco"];
for (let indice in animales){
    console.log(indice, animales[indice]);
}
// no se utilize for in mejor for of  esto en caso que los valores ya esten establecidos 