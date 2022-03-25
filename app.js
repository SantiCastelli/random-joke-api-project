// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

// vamos a decir que esta función es asíncrona
// "Oye JAvaScript" sigue ejecutando cosas que requiera el usuario sin bloquear el código

button.addEventListener("click", async function(){
    // 1. Traernos el chiste de la máquina https://api.chucknorris.io/jokes/random
    // 2. Parsear los datos que recibimos (formato JSON) a un tipo de datos que entienda JavaScript (objeto)
    // 3. jokeDiv.textContent tenemos que actualizar con la propiedad "value" del objeto que vamos a recibir

    let response = await fetch("https://api.chucknorris.io/jokes/random");

    let chiste = await response.json();

    jokeDIV.textContent = chiste.value;

});