
const model = require("./models/archive-model");

const get_archive = async function (req, res) {
  const month = Number(req.query.month);
  const year = Number(req.query.year);
  try {

    const result = await model.find().where('month', month).where('year', year)

    /* const result = await model.findAll({ where: { month, year } }) */

    res.status(200).json({
      data: result,
      msg: "archives"
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "failed to get records" })
  }
}

const add_archive = async function (req, res) {

  try {

    const record = new model(req.body);

    const result = await record.save()

    if (result) {
      res.status(200).json({ msg: "record added to archive successfully" })
    } else {
      res.status(400).json({ msg: "failed to add record to archive" })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "failed to add record to archive" })
  }
}

module.exports = { get_archive, add_archive }