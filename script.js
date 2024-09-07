const botaoPlayPause = document.getElementById('playpause');
const botaoAvancar = document.getElementById('proximo');
const botaoAnterior = document.getElementById('anterior');
const audioMusica = document.querySelector('.audio-musica');

const fotoAgora = document.getElementById('picture');

botaoAvancar.addEventListener('click', proximaFoto);
botaoAnterior.addEventListener('click', voltarFoto);

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoAnterior.addEventListener('click', voltarFaixa);

const numeroFotos = 10;
let fotoAntes = 0;
let fotoAtual = 1;

const numeroMusicas = 10;
let taTocando = 0;
let musicaAtual = 1;

function tocarFaixa() {
    audioMusica.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa() {
    audioMusica.pause();
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-circle-fill');
}

function tocarOuPausar() {
    if (taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

function voltarFaixa() {
    if (musicaAtual === numeroMusicas) {
        musicaAtual = numeroMusicas;
    } else {
        musicaAtual = musicaAtual - 1;
    }

    audioMusica.src = '/PH/musicas/' + musicaAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
}

function proximaFaixa() {
    if (musicaAtual === numeroMusicas) {
        musicaAtual = 1;
    } else {
        musicaAtual = musicaAtual + 1;
    }

    audioMusica.src = '/PH/musicas/' + musicaAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
}

function voltarFoto() {
    if (fotoAtual === numeroFotos) {
        fotoAtual = numeroFotos;
    } else {
        fotoAtual = fotoAtual - 1;
    }

    fotoAgora.src = '/PH/fotos/' + fotoAtual + '.jpg';
    fotoAntes = 1;
}

function proximaFoto() {
    if (fotoAtual === numeroFotos) {
        fotoAtual = 1;
    } else {
        fotoAtual = fotoAtual + 1;
    }

    fotoAgora.src = '/PH/fotos/' + fotoAtual + '.jpg';
    fotoAntes = 1;
}