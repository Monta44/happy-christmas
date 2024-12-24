document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('background-music');

    // Funzione per attivare l'audio
    const enableAudio = () => {
        music.play().catch(error => console.error('Errore durante la riproduzione audio:', error));
        document.removeEventListener('click', enableAudio);
        document.removeEventListener('scroll', enableAudio);
    };

    // Ascolta clic o scroll per avviare l'audio
    document.addEventListener('click', enableAudio);
    document.addEventListener('scroll', enableAudio);
});
