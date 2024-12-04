export async function escolar() {
  console.log("senoraCatalogo.js cargado");
  try {
    const response = await fetch("http://localhost:3000/shoes/escolar");
    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }
    const data = await response.json();
    console.log(data);
    const contenedor = document.querySelector(".contenedor");
    contenedor.innerHTML = ""; // Limpiar el contenido existente

    data.forEach((shoe) => {
      const row = document.createElement("div");
      row.className = "row mt-5";

      const colTitle = document.createElement("div");
      colTitle.className = "col-12 text-center";
      const h2 = document.createElement("h2");
      h2.textContent = `${shoe.shoeId}`;
      colTitle.appendChild(h2);
      row.appendChild(colTitle);

      const rowContent = document.createElement("div");
      rowContent.className = `row mt-5 estilo${shoe.shoeId}`;

      const colText = document.createElement("div");
      colText.className = "col-md-6 d-flex align-items-center";
      const textBox = document.createElement("div");
      textBox.className = "text-box";
      const p = document.createElement("p");
      p.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
      textBox.appendChild(p);
      colText.appendChild(textBox);
      rowContent.appendChild(colText);

      const colImg = document.createElement("div");
      colImg.className =
        "col-md-6 d-flex justify-content-center align-items-center";
      const img = document.createElement("img");
      img.src = shoe.image;
      img.alt = `Modelo más vendido de ${shoe.category}`;
      img.width = 250;
      img.height = 250;
      colImg.appendChild(img);
      rowContent.appendChild(colImg);

      contenedor.appendChild(row);
      contenedor.appendChild(rowContent);
    });
  } catch (error) {
    console.error("Error al cargar las imagenes:", error);
  }
}
