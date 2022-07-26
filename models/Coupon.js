const mongoose = require('mongoose');

const CouponSchema = new mongoose.Schema({
  uniqueid: { type: Number, required: true, unique: true },
  mid: { type: Number, required: true },
  merchantname: { type: String, required: true },
  title: { type: String, required: true },
  code: { type: String },
  dealedit: { type: String, required: true },
  dealstart: { type: String, required: true },
  dealexpiry: { type: String, required: true },
  link: { type: String },
  percentoff: { type: String },
  rating: { type: Number, required: true },
  brands: [{
    type: Number,
    ref: 'Brand'
  }]
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model("Coupon", CouponSchema);