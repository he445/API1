const theFallService = require('../services/theFall.service');

const findCharacterControler = (req, res) => {
  const allCaracters = theFallService.findCharacterService();
  res.send(allCaracters);
};

const findCharacterByIdControler = (req, res) => {
  const idParam = req.params.id;
  const choseCharacter = theFallService.findCharacterByIdService(idParam);
  res.send(choseCharacter);
};

const createCharacterdControler = (req, res) => {
  const character = req.body;
  const newCharacter = theFallService.createCharacterdService(character);
  res.send(newCharacter);
};

const updateCharacterByIdControler = (req, res) => {
  const idParam = req.params.id;
  const characterEdit = req.body;
  const upcharacter = theFallService.updateCharacterByIdService(
    idParam,
    characterEdit,
  );
  res.send(upcharacter);
};

const deleteCharacterControler = (req, res) => {
  const idParam = req.params.id;
  theFallService.deleteCharacterService(idParam);
  res.send({ message: 'character deleted!' });
};

module.exports = {
  findCharacterControler,
  findCharacterByIdControler,
  createCharacterdControler,
  updateCharacterByIdControler,
  deleteCharacterControler,
};
