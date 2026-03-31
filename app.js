const allAudios = document.querySelectorAll('audio');
allAudios.forEach(audio => {
    audio.addEventListener('play', () => {
        allAudios.forEach(otherAudio => {
            if (otherAudio !== audio) {
                otherAudio.pause();
                otherAudio.currentTime = 0; 
            }
        });
    });
});