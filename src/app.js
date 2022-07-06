const express = require("express")
const router = require("./router")
const { engine } = require("express-handlebars");

module.exports = class App {

    server

    constructor() {

        this.server = express()
        this.middleware()
        this.router()

    }

    middleware() {

        this.server.set("views" , __dirname + "/app/views")
        this.server.engine(".hbs" , engine({

            defaultLayout: 'main', 

            extname: '.hbs'

        }))

        this.server.use('/bscss', express.static('./node_modules/bootstrap/dist/css'));
        this.server.use('/bsjs', express.static('./node_modules/bootstrap/dist/js'));
        this.server.use('/popperjs', express.static('./node_modules/@popperjs/core/dist/umd'));
        this.server.use('/public', express.static(__dirname + "/app/public"));

        this.server.use(express.urlencoded({ extended: true }));
        this.server.use(express.json());

    }

    router() {

        this.server.use(router)

    }

}