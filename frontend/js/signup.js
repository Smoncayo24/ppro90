async function signup() {

  const email = document.getElementById("email").value;

  const username = document.getElementById("username").value;

  const password = document.getElementById("password").value;

  const confirmPassword =
    document.getElementById("confirmPassword").value;

  // VALIDAR PASSWORDS

  if(password !== confirmPassword){

    alert("Las contraseñas no coinciden");

    return;
  }

  try {

    const response = await fetch(
      "http://localhost:3000/users",
      {

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({
          email,
          username,
          password
        })

      }
    );

    const data = await response.json();

    console.log(data);

    alert("Usuario creado 🔥");

    // REDIRECCIONAR AL LOGIN

    window.location.href = "login.html";

  } catch(error){

    console.log(error);

    alert("Error conectando con servidor");

  }

}