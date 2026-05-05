const calendarDays = document.getElementById("calendarDays");

let diaSeleccionado = null;

for (let i = 1; i <= 31; i++) {
  const dia = document.createElement("button");
  dia.textContent = i < 10 ? `0${i}` : i;

  dia.onclick = () => {
    diaSeleccionado = dia.textContent;

    document.querySelectorAll(".calendar-days button").forEach(btn => {
      btn.classList.remove("selected-day");
    });

    dia.classList.add("selected-day");
  };

  calendarDays.appendChild(dia);
}

function crearPartido() {
  const hora = document.getElementById("hora").value;
  const formato = document.getElementById("formato").value;
  const jugadoresFaltan = document.getElementById("jugadoresFaltan").value;
  const cancha = document.getElementById("cancha").value;

  if (!diaSeleccionado || !hora || !formato || !jugadoresFaltan || !cancha) {
    alert("Completa todos los datos del partido");
    return;
  }

  const partido = {
    dia: diaSeleccionado,
    hora,
    formato,
    jugadoresFaltan,
    cancha
  };

  localStorage.setItem("partidoCreado", JSON.stringify(partido));

  alert("Partido creado correctamente");
  window.location.href = "partidos.html";
}