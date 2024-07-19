// Fecha objetivo (24 de noviembre)
function actualizarContador(fechaObjetivo, diasElement, horasElement, minutosElement, segundosElement) {
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    // Calcula días, horas, minutos y segundos
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Actualiza los elementos HTML
    diasElement.textContent = dias;
    horasElement.textContent = horas;
    minutosElement.textContent = minutos;
    segundosElement.textContent = segundos;
}

// Contador para el 19 de julio
const fecha19Julio = new Date('2024-07-19T04:40:00').getTime();
setInterval(function() {
    actualizarContador(fecha19Julio, 
        document.getElementById('dias1'),
        document.getElementById('horas1'),
        document.getElementById('minutos1'),
        document.getElementById('segundos1'));
}, 1000);

// Contador para el 27 de julio
const fecha27Julio = new Date('2024-07-27T00:00:00').getTime();
setInterval(function() {
    actualizarContador(fecha27Julio, 
        document.getElementById('dias2'),
        document.getElementById('horas2'),
        document.getElementById('minutos2'),
        document.getElementById('segundos2'));
}, 1000);

// Obtén una referencia al botón por su ID
const botonWhatsapp = document.getElementById("botonWhatsapp");
const botonGoogleMaps = document.getElementById("botonGoogleMaps");
const botonSpotify = document.getElementById("botonSpotify");
const botonWhatsappMenu = document.getElementById("botonWhatsappMenu");

// Agrega un manejador de eventos al botón
botonWhatsapp.addEventListener("click", function() {
    // URL de WhatsApp que deseas abrir
    const urlWhatsapp = "https://wa.me/+541144446992?text=Muy%20feliz%20cumple%20Lau%20y%20gracias%20por%20recordarmelo";

    // Redirige a la URL de WhatsApp
    window.open(urlWhatsapp, "_blank");
});
// Agrega un manejador de eventos al botón de Google Maps
botonGoogleMaps.addEventListener("click", function() {
    const urlGoogleMaps = "https://maps.app.goo.gl/4rHXCLNPzzKH6Lmc7";
    window.open(urlGoogleMaps, "_blank");
});
botonSpotify.addEventListener("click", function() {
    // Abre la URL de la lista de reproducción en una nueva pestaña
    window.open("https://open.spotify.com/playlist/0G2AlD61mlqw4uKjeEks4Z?si=ea933a1ca4c34fc5");
});
// Agrega un manejador de eventos al botón
botonWhatsappMenu.addEventListener("click", function() {
    // URL de WhatsApp que deseas abrir
    const urlWhatsappMenu = "https://wa.me/+541124683994?text=Tengo%20una%20condición%20con%20el%20menú";

    // Redirige a la URL de WhatsApp
    window.open(urlWhatsappMenu, "_blank");
});

