import Brand from "../../models/Brand";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let p = new Brand({
        id: req.body[i].id,
        mid: req.body[i].mid,
        merchantname: req.body[i].merchantname,
        country: req.body[i].country,
        website: req.body[i].website,
        primarycategory: req.body[i].primarycategory,
        subcategories: req.body[i].subcategories,
        logo88x31: req.body[i].logo88x31,
        logo120x60: req.body[i].logo120x60,
        shippingcounties: req.body[i].shippingcounties,
        slug: req.body[i].slug,
      })
      await p.save()
      res.status(200).json({ success: "success" })

    }
  } else {
    res.status(400).json({ error: "Bad Request" })
  }
}
export default connectDb(handler);
