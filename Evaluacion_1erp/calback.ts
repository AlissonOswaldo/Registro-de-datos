// Definición de la función con callback para encontrar un elemento por su ID
function encontrarElementoPorID(arr: any[], id: number, callback: (elemento: any) => void) {
    const encontrado = arr.find(elemento => elemento.id === id);
    if (encontrado) {
      callback(encontrado);
    } else {
      console.log("Elemento no encontrado");
    }
  }
  
  // Uso del callback para encontrar y mostrar un elemento por su ID
  const idBuscado = 3; // Supongamos que queremos encontrar el elemento con ID 3
  console.log(`Buscando elemento con ID ${idBuscado}...`);
  encontrarElementoPorID(tiposEjercicio, idBuscado, (elemento) => {
    console.log("Elemento encontrado:");
    console.log(elemento);
  });
  
  console.log("\nEjercicios realizados:");
  for (const ejercicioRealizado of ejerciciosRealizados) {
    console.log("Deportista:", ejercicioRealizado.deportista.nombre, "- Ejercicio:", ejercicioRealizado.ejercicio.nombre, "- Duración (min):", ejercicioRealizado.duracionMinutos, "- Fecha:", ejercicioRealizado.fecha);
  }