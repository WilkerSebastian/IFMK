"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let lastUpdate = new Date().getTime();
let delta = 0;
document.addEventListener("keydown", function (e) {
    return __awaiter(this, void 0, void 0, function* () {
        yield processInput(e);
    });
});
const conversao = {
    parse: ['ArrowLeft', 'ArrowRight', 'Home', 'PageUp', 'ArrowDown'],
    key: ['a', 'd', 'e', 't', 's'],
    keyParse: (chave) => __awaiter(void 0, void 0, void 0, function* () {
        let retorno = chave;
        conversao.parse.forEach(element => {
            if (element == chave) {
                retorno = conversao.key[conversao.parse.indexOf(element)];
            }
        });
        return retorno;
    })
};
function processInput(event) {
    return __awaiter(this, void 0, void 0, function* () {
        let parse = false;
        conversao.parse.forEach((p) => __awaiter(this, void 0, void 0, function* () {
            if (p == event.key) {
                parse = true;
                const key = yield conversao.keyParse(event.key);
                players[1].movimento(key, delta);
            }
        }));
        if (!parse) {
            players[0].movimento(event.key, delta);
        }
    });
}
function loop() {
    let t = new Date().getTime();
    delta = t - lastUpdate;
    lastUpdate = new Date().getTime();
    update();
    render();
    window.requestAnimationFrame(loop);
}
;
lastUpdate = new Date().getTime();
window.requestAnimationFrame(loop);
function update() {
    players.forEach(p => p.update());
}
function render() {
    fundo();
    players.forEach(p => p.render());
}
