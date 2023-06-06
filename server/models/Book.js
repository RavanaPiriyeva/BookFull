const { default: mongoose } = require("mongoose");

const BookSchema = mongoose.Schema({
  name: String,
  description: String,
  addDate: { type: Date, default: Date.now },
  imgPath:String,
  writer: { type: mongoose.Schema.Types.ObjectId, ref: "Writer" },
  publishDate: Date
});

const Book = mongoose.model("Book", BookSchema);

module.exports = {
    Book,
};
