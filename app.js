const express = require('express');

const contenidoRoutes = require('./routes/contenidoRoutes.js');
const sequelize = require('./conexion/database');

const app = express();
// Middlewares
app.use(express.json());
app.use(async (req, res, next) => {
  try {
    await sequelize.authenticate();
    console.log("Conexión establecida con exito ! =)");
    next();
  } catch (error) {
    res
      .status(500)
      .json({ error: `Error en el servidor: `, description: error.message });
  }
});

//routes
app.use('/contenido', contenidoRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
    