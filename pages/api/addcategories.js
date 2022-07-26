import Category from "../../models/Category";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let p = new Category({
        id: req.body[i].id,
        categoryid: req.body[i].categoryid,
        parentid: req.body[i].parentid,
        categoryname: req.body[i].categoryname,
        categoryurl: req.body[i].categoryurl,
        categoryimage: req.body[i].categoryimage,
      })
      await p.save()
      res.status(200).json({ success: "success" })

    }
  } else {
    res.status(400).json({ error: "Bad Request" })
  }
}
export default connectDb(handler);
