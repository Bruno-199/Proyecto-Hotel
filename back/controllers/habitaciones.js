const { conection } = require("../config/db");

const todasHabitaciones = (req, res) => {
  const query = `SELECT id_habitacion, numero_habitacion, tipo, precio, 
    disponibilidad, descripcion 
    FROM habitaciones 
    ORDER BY numero_habitacion`;

  conection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

const agregarHabitacion = (req, res) => {
  const { numero_habitacion, tipo, precio, disponibilidad, descripcion } = req.body;
  const query = `INSERT INTO habitaciones (numero_habitacion, tipo, precio, disponibilidad, descripcion) 
    VALUES ("${numero_habitacion}", "${tipo}", ${precio}, ${disponibilidad}, "${descripcion}")`;

  conection.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

const editarHabitacion = (req, res) => {
  const id = req.params.id;
  const { numero_habitacion, tipo, precio, disponibilidad, descripcion } = req.body;
  
  const query = `UPDATE habitaciones 
    SET numero_habitacion = "${numero_habitacion}",
        tipo = "${tipo}",
        precio = ${precio},
        disponibilidad = ${disponibilidad},
        descripcion = "${descripcion}"
    WHERE id_habitacion = ${id}`;

  conection.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

const cambiarDisponibilidad = (req, res) => {
  const id = req.params.id;
  const { disponibilidad } = req.body;

  const query = `UPDATE habitaciones 
    SET disponibilidad = ${disponibilidad}
    WHERE id_habitacion = ${id}`;

  conection.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

const verHabitacion = (req, res) => {
  const id = req.params.id;

  const query = `SELECT id_habitacion, numero_habitacion, tipo, precio, 
    disponibilidad, descripcion
    FROM habitaciones 
    WHERE id_habitacion = ${id}`;

  conection.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

module.exports = {
  todasHabitaciones,
  agregarHabitacion,
  editarHabitacion,
  cambiarDisponibilidad,
  verHabitacion,
};