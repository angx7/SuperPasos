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
      import("./catalogo.js").then(function (controller) {
        if (typeof controller.catalogo === "function") {
          controller.catalogo(); // Llama a la función catalogo() después de que el módulo se haya importado
        }
      });
    });
}

function cargarNovedades() {
  fetch("../views/novedadesView.html")
    .then(function (contenido_html) {
      return contenido_html.text();
    })
    .then(function (html) {
      contenedorPrincipal.innerHTML = html;
      import("./novedades.js").then(function (controller) {
        if (typeof controller.novedades === "function") {
          controller.novedades(); // Llama a la función novedades() después de que el módulo se haya importado
        }
      });
    });
}

function cargarTendencias() {
  fetch("../views/tendenciasView.html")
    .then(function (contenido_html) {
      return contenido_html.text();
    })
    .then(function (html) {
      contenedorPrincipal.innerHTML = html;
      import("./tendencias.js").then(function (controller) {
        if (typeof controller.tendecias === "function") {
          controller.tendecias(); // Llama a la función tendecias() después de que el módulo se haya importado
        }
      });
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
      import("./senoraCatalogo.js").then(function (controller) {
        if (typeof controller.senora === "function") {
          controller.senora(); // Llama a la función senora() después de que el módulo se haya importado
        }
      });
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
      import("./jovenCatalogo.js").then(function (controller) {
        if (typeof controller.joven === "function") {
          controller.joven(); // Llama a la función joven() después de que el módulo se haya importado
        }
      });
    });
}

function cargarEscolar() {
  fetch("../views/escolarView.html")
    .then(function (contenido_html) {
      return contenido_html.text();
    })
    .then(function (html) {
      contenedorPrincipal.innerHTML = html;
      import("./escolarCatalogo.js").then(function (controller) {
        if (typeof controller.escolar === "function") {
          controller.escolar(); // Llama a la función escolar() después de que el módulo se haya importado
        }
      });
    });
}

function cargarEnfermera() {
  fetch("../views/enfermeraView.html")
    .then(function (contenido_html) {
      return contenido_html.text();
    })
    .then(function (html) {
      contenedorPrincipal.innerHTML = html;
      import("./enfermeraCatalogo.js").then(function (controller) {
        if (typeof controller.enfermera === "function") {
          controller.enfermera(); // Llama a la función enfermera() después de que el módulo se haya importado
        }
      });
    });
}

function cargarCasual() {
  fetch("../views/casualView.html")
    .then(function (contenido_html) {
      return contenido_html.text();
    })
    .then(function (html) {
      contenedorPrincipal.innerHTML = html;
      import("./casualCatalogo.js").then(function (controller) {
        if (typeof controller.casual === "function") {
          controller.casual(); // Llama a la función casual() después de que el módulo se haya importado
        }
      });
    });
}

cargarInicio();
