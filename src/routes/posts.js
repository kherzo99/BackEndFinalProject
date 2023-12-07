const express = require("express");
const router = express.Router(); //es lo que nos permite crear rutas fuera de nuestro app.js que podemos generar como modulos
const postController = require("../controllers/posts");

router.get("/", postController.getAll);
router.get("/:id", postController.getById);
router.post("/api/", postController.post);
router.put("/api/:id", postController.put);
router.delete("/api/:id", postController.delete);

module.exports = router;
