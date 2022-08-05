const character = [
  {
    id: 1,
    name: 'Adeêdé',
    roll: 'protagonist',
    gender: ' male',
    race: 'human',
  },
  {
    id: 2,
    name: 'Aslogh',
    roll: 'Antagonist',
    gender: 'unknown',
    race: 'unknown',
  },
  {
    id: 3,
    name: 'Trogrim',
    roll: 'secondary character',
    gender: 'male',
    race: 'dwarf',
  },
];

const findCharacterService = () => {
  return character;
};

const findCharacterByIdService = (id) => {
  return character.find((character) => character.id == id);
};

const createCharacterdService = (newCharacter) => {
  const newID = character.length + 1;
  newCharacterID = newID;
  character.push(newCharacter);
  return newCharacter;
};

const updateCharacterByIdService = (id, characterUpdated) => {
  characterUpdated['id'] = id;
  const characterIndex = character.findIndex((character) => character.id == id);
  character[characterIndex] = characterUpdated;
  return characterUpdated;
};

const deleteCharacterService = (id) => {
  const characterIndex = character.findIndex((character) => character.id == id);
  return character.splice(characterIndex, 1);
};

module.exports = {
  findCharacterService,
  findCharacterByIdService,
  createCharacterdService,
  updateCharacterByIdService,
  deleteCharacterService,
};
