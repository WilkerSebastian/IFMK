const canvas = document.getElementById('canvas') as HTMLCanvasElement

const ALTURA = window.innerHeight
const LARGURA = window.innerWidth 

canvas.height = ALTURA
canvas.width = LARGURA

const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

let rodando = true
let debug = true

function saiuDoMundo(x:number , y:number) {

    if (x > LARGURA || y > ALTURA || 
        x < 0 || y < 0) {
        
        return true

    }

    return false

}

function speed(delta: number, pixelsPerSec: number) {
    return ((pixelsPerSec * delta) / 1000);
};