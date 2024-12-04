document.addEventListener("DOMContentLoaded", () => {
  console.log("tendencias.js cargado");
});
export async function novedades() {
  try {
    const response = await fetch("http://localhost:3000/shoes/new");
    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }
    const data = await response.json();
    console.log(data);
    const contenedor = document.querySelector(".contenido");
    contenedor.innerHTML = ""; // Limpiar el contenido existente

    data.forEach((novedad, index) => {
      const col = document.createElement("div");
      col.className = `col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4 ${
        index % 2 === 0 ? "abajo" : "arriba"
      }`;

      const h5 = document.createElement("h5");
      h5.textContent = novedad.shoeId;
      col.appendChild(h5);

      const img = document.createElement("img");
      img.src = novedad.image;
      img.alt = `Novedad ${novedad.shoeId}`;
      col.appendChild(img);

      contenedor.appendChild(col);
    });
  } catch (error) {
    console.error("Error al cargar las tendencias:", error);
  }
}
