const express = require('express');
const router = express.Router();
const unitsController = require('../controllers/units');

//routes
router.get('', unitsController.getUnits);
router.get('/:unitId', unitsController.getUnitById);
router.post('', unitsController.createUnit);
router.delete('/:unitId', unitsController.deleteUnit);
router.put('/:unitId', unitsController.editUnit);
router.put("/dostupan/:unitId",unitsController.editUnitDostupan);

module.exports = router;