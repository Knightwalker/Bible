const mongoose = require("mongoose");
const { Schema } = mongoose;

const docSchema = new Schema({
    name: { type: String, required: true },
    content: { type: String, required: true }
});

const Doc = mongoose.model("Doc", docSchema);

module.exports = Doc;