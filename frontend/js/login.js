async function login() {

  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  try {

    const response = await fetch(
      "http://localhost:3000/users/login",
      {

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({
          email,
          password
        })

      }
    );

    const data = await response.json();

    console.log(data);

    if(data.message === "Login exitoso"){

      alert("Bienvenido 🔥");

      window.location.href = "index.html";

    } else {

      alert(data.message);

    }

  } catch(error){

    console.log(error);

    alert("Error conectando con servidor");

  }

}