const express = require('express');
const router = express.Router();
const userUnitsController = require('../controllers/users-units');

//routes
router.get('', userUnitsController.getUserUnits);
router.post('', userUnitsController.createUserUnit);
router.delete('/:unitId', userUnitsController.deleteUserUnit);
router.get("/usr_id",userUnitsController.getUnitsByUserId);

module.exports = router;