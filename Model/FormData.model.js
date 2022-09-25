const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    priceSignal:{type: String, required: true},
    criteria: { type: String, required: true },
    value: { type: Number, required: true },
    days: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Dataschema", dataSchema);
