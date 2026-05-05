const playersContainer = document.getElementById("playersContainer");
const destacadosBtn = document.getElementById("destacadosBtn");
const generalBtn = document.getElementById("generalBtn");
const searchInput = document.getElementById("searchInput");

let vista = "destacados";

// 🔥 LISTA DE JUGADORES (con nombres reales de tus imágenes)
const jugadores = [
  
{
  nombre: "Lionel Messi",
  posicion: "Delantero / Enganche (DC-MCO)",
  descripcion: "El mejor jugador de la historia. Destaca en todo: visión, regate, goles y liderazgo silencioso. Hace que lo imposible parezca fácil y el fútbol parezca arte.",
  stats: "🦵 Pie hábil: Izquierdo<br>🎩 Magia / Regate: 10/10<br>🎯 Definición: 10/10<br>🤝 Juego en equipo: 10/10",
  amigos: 400,
  seguidores: "511 M",
  calificacion: 10,
  destacado: true,
  imagen: "lionelMessi.png"
},
{
  nombre: "Cristiano Ronaldo",
  posicion: "Delantero (DC-EI)",
  descripcion: "Atleta perfecto y máquina de goles. Mentalidad ganadora, trabajo duro y hambre eterna. Aparece en los momentos grandes y nunca se esconde.",
  stats: "🦵 Pie hábil: Derecho<br>💪 Potencia / Salto: 10/10<br>🎯 Definición: 9.8/10<br>🧠 Mentalidad competitiva: 10/10",
  amigos: 234,
  seguidores: "10k",
  calificacion: 10,
  destacado: true,
  imagen: "cristianoRonaldo.png"
},
{
  nombre: "Neymar J.r",
  posicion: "Extremo / Media punta (EI-MCO)",
  descripcion: "Fútbol alegre y espectáculo puro. Joga bonito en su máxima expresión: regates, creatividad y descaro. Juega como si estuviera en la calle.",
  stats: "🦵 Pie hábil: Derecho<br>🎨 Creatividad / Regate: 9.8/10<br>⚡ Desequilibrio: 9.5/10<br>🤝 Juego en equipo: 9/10",
  amigos: 20,
  seguidores: "90k",
  calificacion: 10,
  destacado: true,
  imagen: "neymarJR.png"
},

  // 🔽 GENERALES
{
  nombre: "Luis Díaz",
  descripcion: "Jugador rápido, desequilibrante y con gran capacidad en el uno contra uno. Destaca por su explosividad por banda, regate y definición.",
  posicion: "extremo izquierdo",
  stats: "🦵 Pie hábil: Derecho<br>⚡ Velocidad: 9.3/10<br>🎯 Definición: 8.6/10<br>🧠 Juego en equipo: 8.7/10<br>🧡 Regate: 9.1/10",
  amigos: 171,
  seguidores: 47,
  calificacion: 7.8,
  destacado: false,
  imagen: "luisDiaz.png"
},
{
  nombre: "Duvan Vergara",
  descripcion: "Jugador rápido y desequilibrante. Me gusta encarar, romper líneas y generar peligro por banda. Busco partidos intensos, buen ambiente y gente cumplida para jugar cerca.",
  posicion: "Extremo / Delantero",
  stats: "🦵 Pie hábil: Izquierdo<br>⚡ Velocidad / Desmarque: 7/10<br>🎯 Definición: 8/10<br>🤝 Juego en equipo: 5/10",
  amigos: 180,
  seguidores: 320,
  calificacion: 6,
  destacado: false,
  imagen: "duvanVergara.png"
},
{
  nombre: "Teófilo Gutierrez",
  descripcion: "Jugador talentoso y creativo. Me gusta asociarme, generar juego y asistir. Experiencia, visión y liderazgo dentro del campo.",
  posicion: "Delantero / Media punta (DC-MP)",
  stats: "🦵 Pie hábil: Derecho<br>🎨 Creatividad: 8.5/10<br>🎯 Definición: 8/10<br>🤝 Juego en equipo: 9/10",
  amigos: 140,
  seguidores: 1050,
  calificacion: 6,
  destacado: false,
  imagen: "teofiloGutierrez.png"
},
{
  nombre: "Juan Ignacio Dinenno",
  descripcion: "Delantero fuerte y efectivo en el área. Buen juego aéreo, buen posicionamiento y olfato goleador. Siempre atento a la segunda jugada.",
  posicion: "Delantero centro (DC)",
  stats: "🦵 Pie hábil: Derecho<br>⚽ Juego aéreo / Remate: 8.5/10<br>🎯 Definición: 8.5/10<br>🤝 Juego en equipo: 7.5/10",
  amigos: "2k",
  seguidores: "7k",
  calificacion: 8.9,
  destacado: false,
  imagen: "dinenno.png"
},
{
  nombre: "Alejandro Rodríguez",
  descripcion: "Arquero seguro y con buena proyección. Atento bajo los tres palos, buen juego con los pies y carácter para ordenar la defensa. Portero confiable del Deportivo Cali.",
  posicion: "Portero (PO)",
  stats: "🦵 Pie hábil: Derecho<br>🧤 Reflejos: 8/10<br>📐 Ubicación: 8.5/10<br>🤝 Juego con los pies: 7.5/10",
  amigos: 74,
  seguidores: 309,
  calificacion: 6,
  destacado: false,
  imagen: "alejandroRodriguez.png"
},
{
  nombre: "Pedri González",
  descripcion: "Jugador inteligente y técnico. Me muevo bien entre líneas, controlo los tiempos del partido y priorizo el juego colectivo.",
  posicion: "Mediocampista ofensivo (MC-MCO)",
  stats: "🦵 Pie hábil: Derecho<br>🧠 Visión / Control: 9.5/10<br>🎯 Precisión: 9/10<br>🤝 Juego en equipo: 9.5/10",
  amigos: 340,
  seguidores: 2857,
  calificacion: 9.5,
  destacado: false,
  imagen: "pedri.png"
},
{
  nombre: "Yojan Garcés",
  descripcion: "Delantero centro prometedor, fuerte y con hambre de gol. Siempre busca el arco, aguanta bien el balón y no le esconde la pierna a nadie.",
  posicion: "Delantero centro (DC)",
  stats: "🦵 Pie hábil: Derecho<br>⚽ Potencia / Físico: 8.5/10<br>🎯 Definición: 7.5/10<br>🤝 Juego en equipo: 7.8/10",
  amigos: 48,
  seguidores: 206,
  calificacion: 0,
  destacado: false,
  imagen: "yohanGarces.png"
}
];

// 🎨 RENDER
function renderJugadores(lista) {
  playersContainer.innerHTML = "";

  lista.forEach(j => {
    const card = document.createElement("div");

    // 👉 CLICK → perfil
    card.onclick = () => {
      localStorage.setItem("jugadorSeleccionado", JSON.stringify(j));
      window.location.href = "perfilJugador.html";
    };

    if (j.destacado) {
      card.className = "player-featured-card";

      card.innerHTML = `
        <img src="./assets/${j.imagen}" class="player-featured-img">
        <div>
          <h4>${j.nombre}</h4>
          <p>• Posición: ${j.posicion}</p>
          <p>• Nivel: ${j.nivel}</p>
          <p>• ${j.descripcion}</p>
          <p>★★★★★</p>
        </div>
      `;
    } else {
      card.className = "player-general-card";

      card.innerHTML = `
        <img src="./assets/${j.imagen}" class="player-general-img">
        <p>${j.nombre} / ★ ${j.calificacion}</p>
      `;
    }
    
    card.onclick = () => {
    localStorage.setItem("jugadorSeleccionado", JSON.stringify(j));
    window.location.href = "perfilJugador.html";
    };
    playersContainer.appendChild(card);
  });
}

// 🔍 FILTRO
function filtrar() {
  const texto = searchInput.value.toLowerCase();

  let lista = jugadores.filter(j => j.destacado === (vista === "destacados"));

  lista = lista.filter(j => j.nombre.toLowerCase().includes(texto));

  renderJugadores(lista);
}

// 🔘 BOTONES
destacadosBtn.onclick = () => {
  vista = "destacados";
  destacadosBtn.classList.add("active-tab");
  generalBtn.classList.remove("active-tab");
  filtrar();
};

generalBtn.onclick = () => {
  vista = "general";
  generalBtn.classList.add("active-tab");
  destacadosBtn.classList.remove("active-tab");
  filtrar();
};

// 🔍 BUSCADOR
searchInput.addEventListener("input", filtrar);

// 🚀 INICIO
filtrar();