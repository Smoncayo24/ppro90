const container = document.getElementById("matchesContainer");
const todayBtn = document.getElementById("todayBtn");
const weekBtn = document.getElementById("weekBtn");

async function showTodayMatches() {
  todayBtn.classList.add("active-tab");
  weekBtn.classList.remove("active-tab");

  const res = await fetch("http://localhost:3000/matches/hoy");
  const data = await res.json();

  renderMatches(data);
}

async function showWeekMatches() {
  weekBtn.classList.add("active-tab");
  todayBtn.classList.remove("active-tab");

  const res = await fetch("http://localhost:3000/matches/semana");
  const data = await res.json();

  renderMatches(data);
}

function renderMatches(matches) {
  container.innerHTML = "";

  matches.forEach(match => {
    const card = document.createElement("div");
    card.classList.add("match-card");

    card.innerHTML = `
      <h2>${match.cancha}</h2>
      <p>TIPO: ${match.formato}</p>
      <p>FECHA: ${match.fecha} ${match.hora}</p>
      <p>DISTANCIA: ${match.distancia_km} km</p>
      <button class="location-button">📍</button>
    `;

    container.appendChild(card);
  });
}

showTodayMatches();