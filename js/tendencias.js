document.addEventListener("DOMContentLoaded", () => {
  console.log("tendencias.js cargado");
});
export async function tendecias() {
  try {
    const response = await fetch("http://localhost:3000/shoes/trends");
    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }
    const data = await response.json();
    console.log(data);

    const contenedor = document.querySelector(".contenido");
    contenedor.innerHTML = ""; // Limpiar el contenido existente

    // Dividir el array en dos grupos
    const grupo1 = data.filter((_, index) => index % 2 === 0); // Índices pares
    const grupo2 = data.filter((_, index) => index % 2 !== 0); // Índices impares

    // Crear elementos para cada grupo
    grupo1.forEach((tendencia, index) => {
      const col = document.createElement("div");
      col.className =
        "arriba col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4";

      // Elementos del primer grupo (grupo1)
      const p1 = document.createElement("p");
      p1.innerHTML = `<b>${tendencia.shoeId}</b>`;
      col.appendChild(p1);

      const img1 = document.createElement("img");
      img1.src = tendencia.image; // Asegúrate de que la propiedad 'image' exista
      img1.alt = `Tendencia ${index * 2 + 1}`;
      col.appendChild(img1);

      // Verificar si hay un objeto correspondiente en el segundo grupo
      if (grupo2[index]) {
        const p2 = document.createElement("p");
        p2.innerHTML = `<b>${grupo2[index].shoeId}</b>`;
        col.appendChild(p2);

        const img2 = document.createElement("img");
        img2.src = grupo2[index].image || ""; // Asegúrate de manejar casos donde 'image' pueda no estar presente
        img2.alt = `Tendencia ${index * 2 + 2}`;
        col.appendChild(img2);
      }

      // Agregar la columna al contenedor principal
      contenedor.appendChild(col);
    });
  } catch (error) {
    console.error("Error al cargar las tendencias:", error);
  }
}
