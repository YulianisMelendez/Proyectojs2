function crearTituloTabla(tabla, titulo) {
    var fila = document.createElement("tr");
    var cel = document.createElement("td");
    cel.colSpan = 3;
    cel.style.textAlign = "center";
    cel.innerHTML = `<h2>${titulo}</h2>`;
    fila.appendChild(cel);
    tabla.appendChild(fila);
}

function crearFilaTresCeldas(tabla, cont1, cont2, cont3) {
    var fila = document.createElement("tr");
    var cel1 = document.createElement("td");
    var cel2 = document.createElement("td");
    var cel3 = document.createElement("td");
    cel1.innerHTML = cont1;
    cel2.innerHTML = cont2;
    cel3.innerHTML = cont3;
    fila.appendChild(cel1);
    fila.appendChild(cel2);
    fila.appendChild(cel3);
    tabla.appendChild(fila);

}

var tablaCosasFav = document.getElementById("MiTablaCosasFav");

crearTituloTabla(tablaCosasFav, "Cosas Preferidas");

crearFilaTresCeldas(tablaCosasFav,
    '<img src="../RECURSOS/tour latam.jpeg" width="370" height="300"><br> Tour Latam <button>Fechas</button> <button>Ciudades</button>',
    '<img src="../RECURSOS/M-1000.jpg" width="390px" height="300px"><br> M-1000 <button>Colores</button> <button>Modelos</button>',
    '<img src="../RECURSOS/ID.jpg" width="385" height="300"><br> ID <button>Documentales</button> <button>Horarios</button>'
);

crearFilaTresCeldas(tablaCosasFav,
    '<img src="../RECURSOS/warzone.jpg" width="370" height="300"><br> Warzone  <button>Actualizaciones</button> <button>Descargar</button>',
    '<img src="../RECURSOS/mt09.jpg" width="390px" height="300px"><br> MT09  <button>Modelo</button> <button>Precio</button>',
    '<img src="../RECURSOS/netflix.jpg" width="385" height="300"><br> Netflix <button>Membresia</button><button>Cuenta</button>'
);


