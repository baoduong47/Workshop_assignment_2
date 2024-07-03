const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const promotionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    required: false,
  },
  cost: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Promotions = mongoose.model("Promotions", promotionSchema);

module.exports = Promotions;
