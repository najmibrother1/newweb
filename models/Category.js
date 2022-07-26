const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  categoryid: { type: Number, required: true },
  parentid: { type: Number, required: true },
  categoryname: { type: String, required: true },
  categoryurl: { type: String, required: true },
  categoryimage: { type: String, required: true },
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model("Category", CategorySchema);