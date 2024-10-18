function toggleMenu() {
    var menu = document.getElementById("elementos");
    menu.classList.toggle("active");
  }
  function confirmarCerrarSesion() {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡Cerrarás tú sesión!",
      icon: "warning",
      iconColor: "#7D3A2B", // Cambiar color del icono
      showCancelButton: true,
      confirmButtonColor: "#A6553B",
      cancelButtonColor: "#26130A",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Lógica para cerrar sesión
        window.location.href = "ruta/a/cerrar/sesion";
      }
    });
  }