"use strict";
const canvas = document.getElementById('canvas');
const ALTURA = window.innerHeight;
const LARGURA = window.innerWidth;
canvas.height = ALTURA;
canvas.width = LARGURA;
const ctx = canvas.getContext("2d");
let rodando = true;
let debug = true;
function saiuDoMundo(x, y) {
    if (x > LARGURA || y > ALTURA ||
        x < 0 || y < 0) {
        return true;
    }
    return false;
}
function speed(delta, pixelsPerSec) {
    return ((pixelsPerSec * delta) / 1000);
}
;
