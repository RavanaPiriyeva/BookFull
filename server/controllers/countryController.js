const { Country } = require("../models/Country");


const countryController = {
    getAll: (req, res) => {

        Country.find()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err)
            })

    },
    getById: (req, res) => {
        let id = req.params.id;

        Country.findById(id)
            .then(data => {
                if (data)
                    res.json(data);
                else
                    res.status(404).json({ 'msg': 'Not found!' })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    },
    add: (req, res) => {
        let country = new Country({
            name: req.body.name,
        })

        country.save();

        res.json(country);
    },
    deleteById: (req, res) => {

        let id = req.params.id;

        Country.findByIdAndDelete(id)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })


        //eğer category silindiğinde ona bağlı tüm ürünleri silmek istersen (tavsiye edilmez!! DOĞRU DEĞİL!!)
        // Product.deleteMany({ category: id })

    },
    update: (req, res) => {
        let id = req.params.id;

        Country.findById(id)
            .then(data => {
                data.name = req.body.name;
                data.save();

                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err);
            })

    }
}


module.exports = {
    countryController
}
