const { default: mongoose } = require("mongoose");

const WriterSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  birthDate: Date,
  addDate: { type: Date, default: Date.now },
  country: { type: mongoose.Schema.Types.ObjectId, ref: "Country" },
});

const Writer = mongoose.model("Writer", WriterSchema);

module.exports = {
    Writer,
};
