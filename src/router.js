const indexController = require("./app/controller/IndexController")
const { Router }  = require ("express");

const router = Router()

router.get("/" , indexController.index)

module.exports = router