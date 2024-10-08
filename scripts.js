document.addEventListener("DOMContentLoaded", function () {
    const playButtons = document.querySelectorAll('.play-button');

    playButtons.forEach(button => {
        const audio = button.querySelector('.audio');
        const circleProgress = button.querySelector('.circle-progress');
        
        button.addEventListener('click', () => {
            // Check if the audio is paused, meaning we want to play it
            if (audio.paused) {
                // Pause any other currently playing audio
                document.querySelectorAll('.audio').forEach(otherAudio => {
                    if (otherAudio !== audio) {
                        otherAudio.pause();
                        otherAudio.currentTime = 0;
                        const otherCircle = otherAudio.parentElement.querySelector('.circle-progress');
                        otherCircle.classList.remove('playing');
                        otherCircle.style.animation = 'none'; // Reset progress
                    }
                });

                // Play this audio and start circular progress
                audio.play().then(() => {
                    // Ensure the animation restarts correctly
                    const duration = audio.duration;
                    circleProgress.classList.add('playing');
                    circleProgress.style.animation = 'none'; // Reset any previous animation
                    setTimeout(() => {
                        circleProgress.style.animation = `progress ${duration}s linear forwards`;
                    }, 10); // Slight delay to trigger the animation reset

                    // Reset animation when the audio ends
                    audio.onended = () => {
                        circleProgress.classList.remove('playing');
                        circleProgress.style.animation = 'none'; // Reset progress when audio ends
                    };
                }).catch(error => {
                    console.log("Error playing audio: ", error);
                });
            } else {
                // Pause the audio and stop the circular progress
                audio.pause();
                circleProgress.classList.remove('playing');
                circleProgress.style.animation = 'none'; // Reset progress
            }
        });
    });
});