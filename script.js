// URL del backend
const apiUrl = "http://localhost:3000/shoes";

// Obtener datos de los zapatos
async function fetchShoes() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }
    const shoes = await response.json();
    renderShoes(shoes);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Renderizar los datos en el DOM
function renderShoes(shoes) {
  const container = document.getElementById("shoes-container");
  container.innerHTML = ""; // Limpiar contenido previo
  shoes.forEach((shoe) => {
    const shoeElement = document.createElement("div");
    shoeElement.innerHTML = `
      <h3>ID: ${shoe.shoeId}</h3>
      <p>Fecha de subida: ${new Date(shoe.uploadDate).toLocaleDateString()}</p>
      <p>Ventas: ${shoe.sales}</p>
      <p>Descripción: ${shoe.description}</p>
      <p>Categoría: ${shoe.category}</p>
      <img src="${shoe.image}" alt="Shoe Image" width="200" />
    `;
    container.appendChild(shoeElement);
  });
}

// Llamar a la función para cargar los datos al iniciar
fetchShoes();
