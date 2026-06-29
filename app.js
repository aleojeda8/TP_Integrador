const campeones = [
    { nombre: "Ahri", banda: "K/DA", costo: 4 },
    { nombre: "Akali", banda: "K/DA / True Damage", costo: 4 },
    { nombre: "Evelynn", banda: "K/DA", costo: 1 },
    { nombre: "Kai'Sa", banda: "K/DA", costo: 2 },
    { nombre: "Seraphine", banda: "K/DA", costo: 2 },
    { nombre: "Ezreal", banda: "Heartsteel", costo: 4 },
    { nombre: "Kayn", banda: "Heartsteel", costo: 5 },
    { nombre: "Sett", banda: "Heartsteel", costo: 3 },
    { nombre: "Yone", banda: "Heartsteel", costo: 3 },
    { nombre: "Aphelios", banda: "Heartsteel", costo: 2 },
    { nombre: "K'Sante", banda: "Heartsteel", costo: 1 },
    { nombre: "Yasuo", banda: "True Damage", costo: 1 },
    { nombre: "Ekko", banda: "True Damage", costo: 3 },
    { nombre: "Qiyana", banda: "True Damage", costo: 5 },
    { nombre: "Senna", banda: "True Damage", costo: 2 },
    { nombre: "Karthus", banda: "Pentakill", costo: 4 },
    { nombre: "Mordekaiser", banda: "Pentakill", costo: 3 },
    { nombre: "Yorick", banda: "Pentakill", costo: 5 },
    { nombre: "Olaf", banda: "Pentakill", costo: 1 },
    { nombre: "Kayle", banda: "Pentakill", costo: 2 },
    { nombre: "Viego", banda: "Pentakill", costo: 4 }
];

function mostrarCampeones(lista) {
    const contenedor = document.getElementById("lista-campeones");
    if (!contenedor) return;
    contenedor.innerHTML = "";

    lista.forEach(function (campeon) {
        const card = document.createElement("div");
        card.classList.add("campeon-card");
        card.innerHTML = `
            <h3>${campeon.nombre}</h3>
            <p>Banda: ${campeon.banda}</p>
            <p>Costo: ${campeon.costo}</p>
        `;
        contenedor.appendChild(card);
    });
}
mostrarCampeones(campeones);

const buscador = document.getElementById("buscador");

if (buscador) {
    buscador.addEventListener("input", function () {
        const texto = buscador.value.toLowerCase();

        const resultado = campeones.filter(function (campeon) {
            return campeon.banda.toLowerCase().includes(texto);
        });

        mostrarCampeones(resultado);
    });
}

const filtroCosto = document.getElementById("filtro-costo");

if (filtroCosto) {
    filtroCosto.addEventListener("change", function () {
        const costoSeleccionado = filtroCosto.value;

        if (costoSeleccionado === "todos") {
            mostrarCampeones(campeones);
            return;
        }

        const resultado = campeones.filter(function (campeon) {
            return campeon.costo == costoSeleccionado;
        });

        mostrarCampeones(resultado);
    });
}

const formulario = document.getElementById("formulario-opinion");

if (formulario) {
    formulario.addEventListener("submit", validarFormulario);
}

function validarFormulario(event) {
    event.preventDefault();

    try {
        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();

        if (nombre === "" || apellido === "") {
            throw new Error("Debe completar todos los campos obligatorios.");
        }

        alert("Formulario enviado correctamente.");
        formulario.reset();

    } catch (error) {
        alert(error.message);
    }
}

const contadorVisitas = {};

function registrarVisita(seccion) {
    const id = seccion.id || seccion.tagName;

    if (!contadorVisitas[id]) {
        contadorVisitas[id] = 0;
    }
    contadorVisitas[id]++;

    mostrarContador(seccion, contadorVisitas[id]);
}

function mostrarContador(seccion, cantidad) {
    let contador = seccion.querySelector(".contador-visitas");

    if (!contador) {
        contador = document.createElement("span");
        contador.classList.add("contador-visitas");
        seccion.appendChild(contador);
    }

    contador.textContent = "👀 " + cantidad;
}

const secciones = document.querySelectorAll("section, article");

secciones.forEach(function (seccion) {
    seccion.addEventListener("mouseover", function () {
        registrarVisita(seccion);
    });
});