const groupsContainer = document.getElementById("groupsContainer");

// 🔥 NORMALIZAR NOMBRE → para imagen
function normalizarNombre(nombre){
  return nombre
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^\w]/g, "");
}

// 🚀 CARGAR GRUPOS
async function cargarGrupos(){
  try {
    const res = await fetch("http://localhost:3000/groups");
    const grupos = await res.json();

    groupsContainer.innerHTML = "";

    grupos.forEach(grupo => {
      const card = document.createElement("div");
      card.classList.add("group-card");

      // 🔥 generar nombre imagen
      const imgNombre = normalizarNombre(grupo.nombre);

      card.innerHTML = `
        <img src="./assets/${imgNombre}.png"
             class="group-img"
             onerror="this.src='./assets/default.png'"/>

        <h3>${grupo.nombre}</h3>
        <small>${grupo.estado || "disponible"}</small>
        <p>${grupo.descripcion}</p>

        <button>Unirse</button>
      `;

      // 👉 click para ir a detalle
      card.onclick = () => {
        localStorage.setItem("grupoSeleccionado", JSON.stringify(grupo));
        window.location.href = "grupoDetalle.html";
      };

      groupsContainer.appendChild(card);
    });

  } catch (error) {
    console.log("ERROR:", error);
    groupsContainer.innerHTML = "<p style='color:white'>Error cargando grupos</p>";
  }
}

cargarGrupos();