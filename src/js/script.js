function showSurprise() {
    const surprise = document.querySelector('.surprise');
    const music = document.getElementById('backgroundMusic');
    const envelope = document.querySelector('.envelope'); // Seleciona o elemento do envelope

    music.play(); // Inicia a música

    surprise.classList.toggle('hidden'); // Alterna a visibilidade da surpresa

    envelope.style.opacity = '0'; // Faz a imagem do envelope desaparecer suavemente
    setTimeout(() => envelope.remove(), 1000); // Remove o elemento após 1 segundo

    generateConfetti(); // Gera os confetes
}


function generateConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');

    confettiContainer.innerHTML = '';

    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 2 + 's'; 
        confetti.style.width = Math.random() * 8 + 4 + 'px'; 
        confetti.style.height = Math.random() * 12 + 6 + 'px'; 
        confetti.style.setProperty('--color', getRandomColor()); 

        confettiContainer.appendChild(confetti);

        setTimeout(() => confetti.remove(), 4700);
    }
}

function getRandomColor() {
    const colors = ['#ff6f61', '#ff9a9e', '#fad0c4', '#fecd1a', '#1abc9c', '#3498db', '#9b59b6'];
    return colors[Math.floor(Math.random() * colors.length)];
}
