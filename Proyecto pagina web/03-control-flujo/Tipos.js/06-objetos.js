let nombre ="Luffy";
let anime = "One Piece";
let edad = 19;

let personaje ={
    nombre: "Luffy",
    anime: "One piece",
    edad: "19",
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);

personaje.edad = 16;

personaje["edad"] = 16;

delete personaje.anime;

console.log(personaje);