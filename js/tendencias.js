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

    const contenedor = document.querySelector(".container .row");
    contenedor.innerHTML = ""; // Limpiar el contenido existente

    data.forEach((tendencia, index) => {
      const col = document.createElement("div");
      col.className =
        "arriba col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-4";

      const p1 = document.createElement("p");
      p1.innerHTML = `<b>${tendencia.shoeId}</b>`;
      col.appendChild(p1);

      const img1 = document.createElement("img");
      img1.src = tendencia.image;
      img1.alt = `Tendencia${index * 2 + 1}`;
      col.appendChild(img1);

      contenedor.appendChild(col);
    });
  } catch (error) {
    console.error("Error al cargar las tendencias:", error);
  }
}

tendecias();
// export function tendecias() {
//   console.log("tendecias.js");
// }
// alert("tendecias.js");
