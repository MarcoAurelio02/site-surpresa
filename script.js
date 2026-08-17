let slideIndex = 0;
const cards = document.querySelectorAll('.card-item');
const audio = document.getElementById('meuAudio');
const iconeMusica = document.getElementById('iconeMusica');
const textoMusica = document.getElementById('textoMusica');

// Atualiza o efeito 3D em pilha das fotos
function atualizarCarrossel3D() {
    const total = cards.length;

    cards.forEach((card, i) => {
        card.className = 'card-item'; // Limpa classes anteriores
        
        let diff = (i - slideIndex + total) % total;

        if (diff === 0) {
            card.classList.add('active');
        } else if (diff === 1) {
            card.classList.add('next-1');
        } else if (diff === 2) {
            card.classList.add('next-2');
        } else if (diff === total - 1) {
            card.classList.add('prev-1');
        } else if (diff === total - 2) {
            card.classList.add('prev-2');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Avança ou volta as fotos
function mudarSlide(direcao) {
    slideIndex = (slideIndex + direcao + cards.length) % cards.length;
    atualizarCarrossel3D();
}

// Executado quando a pessoa clica na tela inicial para entrar no site
function iniciarSite() {
    document.getElementById('overlay').style.display = 'none';
    
    // Toca a música automaticamente após a interação
    audio.play().catch(e => console.log('Autoplay bloqueado pelo navegador:', e));
    
    atualizarCarrossel3D();
    
    // Inicia rotação automática das fotos a cada 3.5 segundos
    setInterval(() => {
        mudarSlide(1);
    }, 3500);
}

// Alterna entre Play e Pause no botão
function alternarMusica() {
    if (audio.paused) {
        audio.play();
        iconeMusica.className = 'fas fa-pause';
        textoMusica.innerText = 'Pausar Música';
    } else {
        audio.pause();
        iconeMusica.className = 'fas fa-play';
        textoMusica.innerText = 'Tocar Música';
    }
}

// Inicializa a posição das fotos assim que a página carrega
document.addEventListener('DOMContentLoaded', () => {
    atualizarCarrossel3D();
});
