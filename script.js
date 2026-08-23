const audio = document.getElementById('bg-audio');
    const btn = document.getElementById('music-toggle-btn');

    btn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            btn.innerHTML = "⏸️ Musik pausieren";
            btn.classList.add('playing');
        } else {
            audio.pause();
            btn.innerHTML = "🎵 Musik einschalten";
            btn.classList.remove('playing');
        }
    });