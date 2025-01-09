//Importa express
const express = require("express");

//Importa las funciones del archivo controlador /habitaciones
const {
  todasHabitaciones,
  agregarHabitacion,
  editarHabitacion,
  verHabitacion,
} = require("../controllers/habitaciones");

//crea la constante router que almacena la instancia del enrutador de express
const router = express.Router();

//Cada línea asigna una ruta y un método HTTP a una función controladora que maneja la solicitud
// ruta:/habitaciones. metodo HTTP:get. funcion controladora: todoHabitaciones.
//Cuando se hace una solicitud GET a la ruta /habitaciones, la función todoHabitaciones se ejecuta.
//Esta función devuelve una lista de todas las habitaciones
//Y asi con todas las siguientes lineas
router.get("/habitaciones", todasHabitaciones);
router.post("/habitaciones/agregar", agregarHabitacion);
router.put("/habitaciones/editar/:id", editarHabitacion);
router.get("/habitaciones/:id", verHabitacion);

//exporta router
module.exports = router;