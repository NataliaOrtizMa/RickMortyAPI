// Consumir API
const API = "https://rickandmortyapi.com/api/character";

const getData = (api) => {
    return fetch(api)
        .then((response) => response.json())
        .then((json) => {
            dibujarData(json.results),
            paginacion(json.info)
        })
        .catch((error) => {
            console.log("error: ", error)
        })
};

// Dibujar cards de personajes
const dibujarData = (data) => {
    let html = "";
    data.forEach((personaje) => {
        html += `
        <div class="col">
            <div class="card" style="width: 15rem;">
            <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
                <div class="card-body">
                    <h5 class="card-title">${personaje.name}</h5>
                    <p class="card-text">${personaje.species}</p>
                </div>
            </div>
        </div>
        `
    });
    document.getElementById("datosPersonaje").innerHTML = html;
};

// Paginación
const paginacion = (data) => {
    let html = "";
    html += `<li class="page-item ${data.prev ? "" : 'disabled'}"><a class="page-link" onclick="(getData('${data.prev}'))">Prev</a></li>`
    html += `<li><a class="page-link ${data.next ? "" : 'disabled'}" onclick="(getData('${data.next}'))">Next</a></li>`
    document.getElementById("paginacion").innerHTML = html;
};

// Ejecutar getData
getData(API);