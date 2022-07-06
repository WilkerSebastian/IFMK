class IndexController{

    async index(req , res) {

        return res.render("index.hbs")

    }

}

module.exports = new IndexController()