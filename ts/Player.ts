class Player {

    hp: number
    life: number
    dano: number
    x: number
    y: number
    sprite: Sprite
    colisao: Colisao
    esquerda: boolean
    inputliberado:boolean
    nome: string
    posicao: number[]

    constructor(hp: number, dano: number, x: number, y: number, esquerda: boolean, nome: string) {

        this.hp = hp
        this.life = hp
        this.dano = dano
        this.x = x
        this.y = y
        this.sprite = new Sprite(this.x, this.y)
        this.colisao = new Colisao(this.x, this.y)
        this.esquerda = esquerda
        this.nome = nome
        this.posicao = [0, 2, 0]
        this.inputliberado = true

        this.init()

    }

    init() {

        this.inputliberado = true
        this.life = this.hp

        if (this.esquerda) {

            this.sprite.setSprite("andar", 2, this.nome)

        } else {

            this.sprite.setSprite("andar", 0, this.nome)

        }

    }

    movimento(event: string, delta: number) {

        if (this.inputliberado) {

            switch (event) {
                case 'a':

                    this.posicao[2] = 0
                    this.sprite.setSprite("andar", this.posicao[0], this.nome)

                    this.posicao[0] += 1

                    if (this.posicao[0] > 1) {

                        this.posicao[0] = 0

                    }

                    this.x -= speed(delta, 1000)

                    break;
                case 'd':

                    this.posicao[2] = 1
                    this.sprite.setSprite("andar", this.posicao[1], this.nome)

                    this.posicao[1] += 1

                    if (this.posicao[1] > 3) {

                        this.posicao[1] = 2

                    }

                    this.x += speed(delta, 1000)

                    break;
                case 'e':

                    this.sprite.setSprite("socofraco", this.posicao[2], this.nome)
                    setTimeout(() => { this.sprite.setSprite("andar", this.posicao[this.posicao[2]], this.nome) }, 100)

                    // this.posicao[0] += 1

                    // if (this.posicao[0] > 1) {

                    //     this.posicao[0] = 0

                    // }

                    // this.x -= speed(delta, 1000)

                    break;
                case 't':

                    this.sprite.setSprite("defesaalta", this.posicao[2], this.nome)
                    //setTimeout(() => { this.sprite.setSprite("andar", this.posicao[this.posicao[2]], this.nome) }, 5)

                    break;
                case 's':

                    this.sprite.setSprite("defesabaixa", this.posicao[2], this.nome)
                    //setTimeout(() => { this.sprite.setSprite("andar", this.posicao[this.posicao[2]], this.nome) }, 5)

                    break;

            }

            this.inputliberado = false
            setTimeout(() => { this.inputliberado = true }, 100)

        }

    }

    update() {

    }

    render() {

        if (this.esquerda) {

            ctx.fillStyle = "black"
            ctx.font = "20px arial"
            ctx.fillText(`${this.nome.toUpperCase()}`, 10, 25)
            ctx.fillStyle = "#AD3B47"
            ctx.fillRect(0, 40, this.hp * 5.5, 25)
            ctx.fillStyle = "#46AB5A"
            ctx.fillRect(0, 40, this.life * 5.5, 25)
            ctx.drawImage(this.sprite.imagem, this.x, this.y)

        } else {

            ctx.fillStyle = "black"
            ctx.font = "20px arial"
            ctx.fillText(`${this.nome.toUpperCase()}`, LARGURA - 150,  25)
            ctx.fillStyle = "#46AB5A"
            ctx.fillRect(LARGURA - (this.hp * 5.5), 40, (this.hp * 5.5), 25)
            ctx.drawImage(this.sprite.imagem, this.x, this.y)
            ctx.fillStyle = "#46AB5A"
            ctx.fillRect(LARGURA - (this.life * 5.5), 40, (this.life * 5.5), 25)
            ctx.drawImage(this.sprite.imagem, this.x, this.y)

        }

        // if (debug) {
            
        //     this.colisao.colidiu()

        // }

    }


}

const players: Player[] = [

    new Player(100, 5, 0, ALTURA / 1.9, true, "lincoln"),
    new Player(100, 5, LARGURA - 200, ALTURA / 1.9, false, "ferrazanao")

]