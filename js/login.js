// alert("I always come back");

const usuario = "";
const contraseña = "";

const usuarios = [{ usuario: "admin", contraseña: "password" }];

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

  const usuarioEncontrado = usuarios.find(
    (u) => u.usuario === usuario && u.contraseña === contraseña
  );

  if (usuarioEncontrado) {
    // alert("Bienvenido");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Bienvenido",
      showConfirmButton: true,
    }).then(() => {
      window.location.href = "home.html";
    });
    // window.location.href = "home.html";
  } else {
    // alert("Datos incorrectos contacta con el proveedor");
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
