const characters = require('../models/characterSchema');

const findCharacterService = async () => {
  const allcharacters = await characters.find();
  return allcharacters;
};

const findCharacterByIdService = async (id) => {
  const oneCharacter = await characters.findById(id);
  return oneCharacter;
};

const createCharacterdService = async (newCharacter) => {
  const createdCharacter = await characters.create(newCharacter);
  return createdCharacter;
};

const updateCharacterByIdService = async (id, characterUpdated) => {
  const updateCharacter = await characters.findByIdAndUpdate(
    id,
    characterUpdated,
  );
  return updateCharacter;
};

const deleteCharacterService = async (id) => {
  return characters.findByIdAndDelete(id);
};

module.exports = {
  findCharacterService,
  findCharacterByIdService,
  createCharacterdService,
  updateCharacterByIdService,
  deleteCharacterService,
};
