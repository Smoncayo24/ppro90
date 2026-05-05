function crearGrupo() {
  const nombre = document.getElementById("nombreGrupo").value;
  const abreviacion = document.getElementById("abreviacionGrupo").value;
  const descripcion = document.getElementById("descripcionGrupo").value;

  const grupo = {
    nombre,
    abreviacion,
    descripcion
  };

  localStorage.setItem("grupoCreado", JSON.stringify(grupo));

  alert("Grupo creado correctamente");
  window.location.href = "grupos.html";
}