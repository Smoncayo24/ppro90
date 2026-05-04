const container =
  document.getElementById("matchesContainer");

const todayBtn =
  document.getElementById("todayBtn");

const weekBtn =
  document.getElementById("weekBtn");

// MOSTRAR HOY

async function showTodayMatches() {

  todayBtn.classList.add("active-tab");

  weekBtn.classList.remove("active-tab");

  const response =
    await fetch(
      "http://localhost:3000/matches/hoy"
    );

  const data =
    await response.json();

  renderMatches(data);
}

// MOSTRAR SEMANA

async function showWeekMatches() {

  weekBtn.classList.add("active-tab");

  todayBtn.classList.remove("active-tab");

  const response =
    await fetch(
      "http://localhost:3000/matches/semana"
    );

  const data =
    await response.json();

  renderMatches(data);
}

// RENDER

function renderMatches(matches) {

  container.innerHTML = "";

  matches.forEach(match => {

    const card =
      document.createElement("div");

    card.classList.add("match-card");

    card.innerHTML = `

      <h2>${match.cancha}</h2>

      <p>
        TIPO: ${match.formato}
      </p>

      <p>
        FECHA:
        ${match.fecha}
        ${match.hora}
      </p>

      <p>
        DISTANCIA:
        ${match.distancia_km} km
      </p>

      <button class="location-button">

        📍

      </button>

    `;

    container.appendChild(card);

  });

}

// CARGA INICIAL

showTodayMatches();