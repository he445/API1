const theFallService = require('../services/theFall.service');
const mongoose = require('mongoose');

const findCharacterControler = async (req, res) => {
  const allCaracters = await theFallService.findCharacterService();
  if (allCaracters.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum caracter cadastrado!' });
  }
  res.send(allCaracters);
};

const findCharacterByIdControler = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  const choseCharacter = await theFallService.findCharacterByIdService(idParam);
  if (!choseCharacter) {
    return res.status(404).send({ message: 'Character não encontrada!' });
  }

  res.send(choseCharacter);
};

const createCharacterdControler = async (req, res) => {
  const character = req.body;
  if (
    !character ||
    !character.name ||
    !character.roll ||
    !character.gender ||
    !character.race
  ) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos da personagem!' });
  }
  const newCharacter = await theFallService.createCharacterdService(character);
  res.status(201).send(newCharacter);
};

const updateCharacterByIdControler = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  const characterEdit = req.body;
  if (
    !characterEdit ||
    !characterEdit.name ||
    !characterEdit.roll ||
    !characterEdit.gender ||
    !characterEdit.race
  ) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos da personagem!' });
  }

  const upcharacter = await theFallService.updateCharacterByIdService(
    idParam,
    characterEdit,
  );
  res.send(upcharacter);
};

const deleteCharacterControler = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  await theFallService.deleteCharacterService(idParam);
  res.send({ message: 'character deleted!' });
};

module.exports = {
  findCharacterControler,
  findCharacterByIdControler,
  createCharacterdControler,
  updateCharacterByIdControler,
  deleteCharacterControler,
};
