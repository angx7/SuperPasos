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
      window.location.href = "index.html";
    }
  });
}

let contenedorPrincipal = document.getElementById("contenedorPrincipal");

function cargarCatalogo() {
  fetch("../views/catalogoView.html")
    .then(function (contenido_html) {
      return contenido_html.text();
    })
    .then(function (html) {
      contenedorPrincipal.innerHTML = html;
    });
}

function cargarNovedades() {
  fetch("../views/novedadesView.html")
    .then(function (contenido_html) {
      return contenido_html.text();
    })
    .then(function (html) {
      contenedorPrincipal.innerHTML = html;
    });
}

function cargarTendencias() {
  fetch("../views/tendenciasView.html")
    .then(function (contenido_html) {
      return contenido_html.text();
    })
    .then(function (html) {
      contenedorPrincipal.innerHTML = html;
    });
}

function cargarContacto() {
  fetch("../views/contactoView.html")
    .then(function (contenido_html) {
      return contenido_html.text();
    })
    .then(function (html) {
      contenedorPrincipal.innerHTML = html;
    });
}

function cargarSenora() {
  fetch("../views/senoraView.html")
    .then(function (contenido_html) {
      return contenido_html.text();
    })
    .then(function (html) {
      contenedorPrincipal.innerHTML = html;
    });
}

function cargarInicio() {
  fetch("../views/inicioView.html")
    .then(function (contenido_html) {
      return contenido_html.text();
    })
    .then(function (html) {
      contenedorPrincipal.innerHTML = html;
    });
}

function cargarJoven() {
  fetch("../views/jovenView.html")
    .then(function (contenido_html) {
      return contenido_html.text();
    })
    .then(function (html) {
      contenedorPrincipal.innerHTML = html;
    });
}

function cargarEscolar() {
  fetch("../views/escolarView.html")
    .then(function (contenido_html) {
      return contenido_html.text();
    })
    .then(function (html) {
      contenedorPrincipal.innerHTML = html;
    });
}

function cargarEnfermera() {
  fetch("../views/enfermeraView.html")
    .then(function (contenido_html) {
      return contenido_html.text();
    })
    .then(function (html) {
      contenedorPrincipal.innerHTML = html;
    });
}

function cargarCasual() {
  fetch("../views/casualView.html")
    .then(function (contenido_html) {
      return contenido_html.text();
    })
    .then(function (html) {
      contenedorPrincipal.innerHTML = html;
    });
}

cargarInicio();
