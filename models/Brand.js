const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  mid: { type: Number, required: true },
  merchantname: { type: String, required: true },
  country: { type: String, required: true },
  website: { type: String, required: true },
  primarycategory: { type: Number, required: true },
  subcategories: { type: String, required: true },
  logo88x31: { type: String, required: true },
  logo120x60: { type: String, required: true },
  shippingcounties: { type: String, required: true },
  slug: { type: String, required: true },
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model("Brand", BrandSchema);