const miet = document.querySelector('.miet');
const pipe = document.querySelector('.pipe');

const jump = () => {
    miet.classList.add('jump');

    setTimeout(() => {

        miet.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const mietPosition = +window.getComputedStyle(miet).bottom.replace('px', '');
    
    let score = 0; // Variável para armazenar a pontuação inicial

const updateScoreDisplay = () => {
    // Atualiza o elemento HTML com a pontuação atual
    document.getElementById('score').innerText = 'Score: ' + score;
}

const increaseScore = () => {
    // Aumenta a pontuação em 1 ponto
    score++;
    updateScoreDisplay(); // Atualiza a exibição da pontuação na tela
}

// Loop para verificar a lógica do jogo
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const mietPosition = +window.getComputedStyle(miet).bottom.replace('px', '');
    
    if (pipePosition <= 65 && pipePosition > 0 && mietPosition < 80) {
        // Se houver colisão, game over
        clearInterval(loop);
        // Outras ações de game over, como exibir tela de fim de jogo, etc.
    } else {
        // Se não houver colisão, o jogador ganha pontos
        increaseScore(); // Incrementa a pontuação
    }
}, 10);
    
    if (pipePosition <= 65&& pipePosition > 0 && mietPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        pipe.style.animation = 'none';
        miet.style.bottom = `${mietPosition}px`;
        miet.style.width = '120 px'
        

        miet.src = './images/gameover.png';
        miet.style.width ='300px';
        miet.style.marginLeft ='500px';

        clearInterval(loop);
    }

}, 10);

document .addEventListener('keydown', jump); 
