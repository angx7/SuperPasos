// alert("I always come back");

const usuario = "";
const contraseña = "";

const usuarios = [{ usuario: "admin", contraseña: "password" }];

function verificar() {
  const usuario = document.getElementById("usuario").value;
  const contraseña = document.getElementById("contraseña").value;

  if (!usuario || !contraseña) {
    alert("Ops, faltan datos");
    return;
  }

  const usuarioEncontrado = usuarios.find(
    (u) => u.usuario === usuario && u.contraseña === contraseña
  );

  if (usuarioEncontrado) {
    alert("Bienvenido");
    window.location.href = "home.html";
  } else {
    alert("Datos incorrectos contacta con el proveedor");
    document.getElementById("usuario").value = "";
    document.getElementById("contraseña").value = "";
  }
}
