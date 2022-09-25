const mongoose = require("mongoose");

const dummySchema = new mongoose.Schema(
  {
   data1:{ type: Number, required: true },
   data2:{type: Number, required: true}
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("dummyData", dummySchema);
