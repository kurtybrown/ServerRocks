const {Router} = require('express');

const router = Router();

const bandsController = require("../controllers/bands.controllers");

//CRUD = Create, Read, Update, Delete

router.get("/bands", bandsController.getBands);
router.get("/band/:id", bandsController.getBand);
router.post("/band", bandsController.addBand);
router.put("/band/:id", bandsController.editBand);
router.delete("/band/:id", bandsController.deleteBand);

module.exports = router;