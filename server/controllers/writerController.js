const { Writer } = require("../models/Writer")


const writerController = {
    getAll: (req, res) => {

        let limitProduct = req.query.limit;

        Writer.find()
            .limit(limitProduct)
            .populate("country")
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    getById: (req, res) => {
        let id = req.params.id

        Writer.findById(id).populate("country")
            .then(data => {
                if (data)
                    res.json(data)
                else
                    res.status(404).json({});
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    add: (req, res) => {

        let writer = new Writer({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            country: req.body.country,
            birthDate: req.body.birthDate
        })

        writer.save()

        res.json(writer)
    },
   
    delete: (req, res) => {
        let id = req.params.id;

        Writer.findByIdAndDelete(id)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}


module.exports = {
    writerController
}
