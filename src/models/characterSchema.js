const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
  name: { type: String, required: true },
  roll: { type: String, required: true },
  gender: { type: String, required: true },
  race: { type: String, required: true },
});

const character = model('characters', characterSchema);

module.exports = character;
