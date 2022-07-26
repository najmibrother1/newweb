import BrandsInfo from "../../models/BrandsInfo";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let p = new BrandsInfo({
        mid: req.body[i].mid,
        merchantname: req.body[i].merchantname,
        content: req.body[i].content,
        blog: req.body[i].blog,
        facebook: req.body[i].facebook,
        instagram: req.body[i].instagram,
        twitter: req.body[i].twitter,
        youtube: req.body[i].youtube,
        pinterest: req.body[i].pinterest,
        tiktok: req.body[i].tiktok,
        tumbler: req.body[i].tumbler,
        linkedin: req.body[i].linkedin,
        snapchat: req.body[i].snapchat,
        sale: req.body[i].sale,
        womensale: req.body[i].womensale,
        mensale: req.body[i].mensale,
        boysale: req.body[i].boysale,
        girlsale: req.body[i].girlsale,
        clearance: req.body[i].clearance,
        menclearance: req.body[i].menclearance,
        womenclearance: req.body[i].womenclearance,
        girlsclearance: req.body[i].girlsclearance,
        boysclearance: req.body[i].boysclearance,
        freeshipping: req.body[i].freeshipping,
        coupon: req.body[i].coupon,
        studentdiscount: req.body[i].studentdiscount,
        militarydiscount: req.body[i].militarydiscount,
        teacherdiscount: req.body[i].teacherdiscount,
        firstresponders: req.body[i].firstresponders,
        doctorsandnursesdiscount: req.body[i].doctorsandnursesdiscount,
        corporatediscount: req.body[i].corporatediscount,
        youthdiscount: req.body[i].youthdiscount,
        employeediscount: req.body[i].employeediscount,
        aaadiscount: req.body[i].aaadiscount,
        retireediscounts: req.body[i].retireediscounts,
        storelocator: req.body[i].storelocator,
        returnpolicy: req.body[i].returnpolicy,
        shippingpolicy: req.body[i].shippingpolicy,
        mobileappandroid: req.body[i].mobileappandroid,
        mobileappiphone: req.body[i].mobileappiphone,
        rewardanchortext1: req.body[i].rewardanchortext1,
        rewardurl1: req.body[i].rewardurl1,
        rewardanchortext2: req.body[i].rewardanchortext2,
        rewardurl2: req.body[i].rewardurl2,
        referfriend: req.body[i].referfriend,
        googleplus: req.body[i].googleplus,
        address: req.body[i].address,
        email: req.body[i].email,
        phone: req.body[i].phone,
      })
      await p.save()
      res.status(200).json({ success: "success" })

    }
  } else {
    res.status(400).json({ error: "Bad Request" })
  }
}
export default connectDb(handler);
