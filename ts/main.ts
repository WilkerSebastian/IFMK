let lastUpdate = new Date().getTime();
let delta = 0

document.addEventListener("keydown" , async function (e) {

    await processInput(e)

})

const conversao = {

    parse: ['ArrowLeft', 'ArrowRight', 'Home', 'PageUp', 'ArrowDown'],
    key: ['a', 'd', 'e', 't', 's'],
    keyParse: async (chave: string):Promise<string> => {

        let retorno = chave

        conversao.parse.forEach(element => {
            if (element == chave) {
                retorno = conversao.key[conversao.parse.indexOf(element)];
            }
        
        });


        return retorno

    }

}

async function processInput(event: KeyboardEvent) {

    let parse = false

    conversao.parse.forEach(async (p) => {

        if (p == event.key) {

            parse = true

            const key = await conversao.keyParse(event.key)

            players[1].movimento(key, delta)

        }

    })

    if(!parse) {

        players[0].movimento(event.key , delta)

    }

}

function loop() {

    let t = new Date().getTime();
    delta = t - lastUpdate;

    lastUpdate = new Date().getTime();

    update();
    render();
    window.requestAnimationFrame(loop);

};
lastUpdate = new Date().getTime();
window.requestAnimationFrame(loop);

function update() {

    players.forEach(p => p.update())

}

function render() {

    fundo()
    players.forEach(p => p.render())

}