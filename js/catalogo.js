export async function catalogo() {
  try {
    const response = await fetch("http://localhost:3000/shoes/top-category");
    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }
    const data = await response.json();
    console.log(data);

    data.forEach((item) => {
      const category = item.category.toLowerCase();
      const imageElement = document.querySelector(`.${category} img`);
      if (imageElement) {
        imageElement.src = item.shoe.image;
        imageElement.alt = `Modelo más vendido de ${category}`;
      } else {
        console.error(
          `No se encontró el contenedor para la categoría: ${category}`
        );
      }
    });
  } catch (error) {
    console.error("Error al cargar las imagenes:", error);
  }
}
