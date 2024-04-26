interface TipoEjercicio {
  nombre: string;
  categoria: string;
}

// Definición de la entidad Deportista
interface Deportista {
  nombre: string;
  edad: number;
  deporte: string;
}

// Definición de la entidad EjercicioRealizado
interface EjercicioRealizado {
  deportista: Deportista;
  ejercicio: TipoEjercicio;
  duracionMinutos: number;
  fecha: Date;
}

// Creación de algunos ejemplos de entidades
const tiposEjercicio: TipoEjercicio[] = [
  { nombre: "Flexiones", categoria: "Fuerza" },
  { nombre: "Correr", categoria: "Cardio" },
  { nombre: "Estiramientos", categoria: "Flexibilidad" },
  { nombre: "Levantamiento de pesas", categoria: "Fuerza" },
  { nombre: "Yoga", categoria: "Flexibilidad" }
];

const deportistas: Deportista[] = [
  { nombre: "Juan", edad: 30, deporte: "Atletismo" },
  { nombre: "María", edad: 25, deporte: "Natación" },
  { nombre: "Pedro", edad: 28, deporte: "Levantamiento de pesas" },
  { nombre: "Laura", edad: 35, deporte: "Yoga" },
  { nombre: "Carlos", edad: 27, deporte: "Crossfit" }
];

const ejerciciosRealizados: EjercicioRealizado[] = [
  { deportista: deportistas[0], ejercicio: tiposEjercicio[1], duracionMinutos: 45, fecha: new Date("2024-04-25") },
  { deportista: deportistas[1], ejercicio: tiposEjercicio[0], duracionMinutos: 30, fecha: new Date("2024-04-25") },
  { deportista: deportistas[2], ejercicio: tiposEjercicio[3], duracionMinutos: 60, fecha: new Date("2024-04-25") },
  { deportista: deportistas[3], ejercicio: tiposEjercicio[4], duracionMinutos: 60, fecha: new Date("2024-04-25") },
  { deportista: deportistas[4], ejercicio: tiposEjercicio[2], duracionMinutos: 40, fecha: new Date("2024-04-25") }
];


console.log("Tipos de ejercicio:");
for (const tipoEjercicio of tiposEjercicio) {
  console.log("Nombre:", tipoEjercicio.nombre, "- Categoría:", tipoEjercicio.categoria);
}


console.log("\nDeportistas:");
for (const deportista of deportistas) {
  console.log("Nombre:", deportista.nombre, "- Edad:", deportista.edad, "- Deporte:", deportista.deporte);
}




