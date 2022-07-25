class Sprite {

    x: number
    y: number
    height: number
    width: number
    imagem: HTMLImageElement

    constructor(x: number , y: number) {

        this.x = x
        this.y = y
        this.height = 0
        this.width = 0
        this.imagem = new Image()

    }

    setSprite(movimento:string , direcao:number , nome:string) {

        this.imagem.src = `/public/img/${nome}/${movimento}-${direcao}.png`

        this.width = this.imagem.width
        this.height = this.imagem.height

        console.log(`/public/img/${nome}/${movimento}-${direcao}.png`);

    }

}