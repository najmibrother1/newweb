import Coupon from "../../models/Coupon";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let p = new Coupon({
        uniqueid: req.body[i].uniqueid,
        mid: req.body[i].mid,
        merchantname: req.body[i].merchantname,
        title: req.body[i].title,
        code: req.body[i].code,
        dealedit: req.body[i].dealedit,
        dealstart: req.body[i].dealstart,
        dealexpiry: req.body[i].dealexpiry,
        link: req.body[i].link,
        percentoff: req.body[i].percentoff,
        rating: req.body[i].rating,
      })
      await p.save()
      res.status(200).json({ success: "success" })

    }
  } else {
    res.status(400).json({ error: "Bad Request" })
  }
}
export default connectDb(handler);
