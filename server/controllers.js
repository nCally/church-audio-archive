
const model = require("./db/archive-model");

const get_archive = async function (req, res) {
    const month = Number(req.query.month);
    const year = Number(req.query.year);
    try {
        const result = await model.findAll({ where: { month, year } })
        if (result !== null) {
            let data = result.get({ plain: true })
            res.status(200).json({
                data,
                msg: "failed to add record to archive"
            })
        } else {
            res.status(400).json({ msg: "failed to get records" })
        }
    } catch (error) {
        res.status(500).json({ msg: "failed to get records" })
    }
}

const add_archive = async function (req, res) {
    try {
        const result = await model.create(req.body);
        if (result) {
            res.status(200).json({ msg: "record added to archive successfully" })
        } else {
            res.status(400).json({ msg: "failed to add record to archive" })
        }
    } catch (error) {
        res.status(500).json({ msg: "failed to add record to archive" })
    }
}

module.exports = { get_archive, add_archive }