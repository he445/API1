const express = require('express');
const router = express.Router();
const theFallcontroller = require('../controllers/theFall.controller');
router.get('/find-character', theFallcontroller.findCharacterControler);
router.get('/find-character/:id', theFallcontroller.findCharacterByIdControler);
router.post('/create', theFallcontroller.createCharacterdControler);
router.put('/update/:id', theFallcontroller.updateCharacterByIdControler);
router.delete('/delete/:id', theFallcontroller.deleteCharacterControler);

module.exports = router;
