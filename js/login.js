// alert("I always come back");
const URL = "http://localhost:3000/users";
const usuario = "";
const contraseña = "";

function verificar() {
  const usuario = document.getElementById("usuario").value;
  const contraseña = document.getElementById("contraseña").value;

  if (!usuario || !contraseña) {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Faltan datos en el registro",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }
  fetch(URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: usuario, password: contraseña }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      if (data.message === "Inicio de sesión exitoso") {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Bienvenido",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.href = "home.html";
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Datos incorrectos",
          text: "Contacta con el proveedor",
          showConfirmButton: false,
          timer: 2500,
        });
        document.getElementById("usuario").value = "";
        document.getElementById("contraseña").value = "";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error de conexión",
        text: "No se pudo conectar con el servidor",
        showConfirmButton: false,
        timer: 2500,
      });
    });
}

async function forgotPassword() {
  await Swal.fire({
    icon: "info",
    iconColor: "#7D3A2B",
    title: "Olvidé mi contraseña",
    text: "Por favor, contacta con soporte para restablecer tu contraseña.",
    showConfirmButton: true,
    confirmButtonColor: "#A6553B",
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("forgotPassword")
    .addEventListener("click", forgotPassword);
});
