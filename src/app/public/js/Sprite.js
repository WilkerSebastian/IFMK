"use strict";
class Sprite {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.height = 0;
        this.width = 0;
        this.imagem = new Image();
    }
    setSprite(movimento, direcao, nome) {
        this.imagem.src = `/public/img/${nome}/${movimento}-${direcao}.png`;
        this.width = this.imagem.width;
        this.height = this.imagem.height;
        console.log(`/public/img/${nome}/${movimento}-${direcao}.png`);
    }
}
