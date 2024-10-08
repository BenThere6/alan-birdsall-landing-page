document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    let currentlyPlaying = null; // Keep track of the currently playing audio

    const playButtons = document.querySelectorAll('.play-button');
    
    playButtons.forEach(button => {
        const audio = button.querySelector('.audio');
        const circleProgress = button.querySelector('.circle-progress');
        const playIcon = button.querySelector('.play-icon');
        const songLengthElement = button.parentElement.querySelector('.song-length'); // Get the song length element

        // Log initial audio duration and set it dynamically
        audio.addEventListener('loadedmetadata', () => {
            const duration = audio.duration; // Get this song's duration
            console.log(`Audio duration for this song is: ${duration} seconds`);
        
            // Format the duration to minutes and seconds (MM:SS)
            const minutes = Math.floor(duration / 60);
            const seconds = Math.floor(duration % 60).toString().padStart(2, '0');
            songLengthElement.textContent = `${minutes}:${seconds}`; // Display song length next to the song
        });        

        button.addEventListener('click', () => {
            console.log(`Play button clicked for: ${audio.src}`);

            if (audio.paused) {
                console.log("Audio is currently paused, trying to play...");

                // If there is currently playing audio, pause it
                if (currentlyPlaying && currentlyPlaying !== audio) {
                    console.log(`Pausing other audio: ${currentlyPlaying.src}`);
                    currentlyPlaying.pause();
                    currentlyPlaying.currentTime = 0; // Reset to the beginning

                    // Reset play/pause icon for the previously playing audio
                    const prevButton = currentlyPlaying.closest('.play-button');
                    if (prevButton) {
                        const prevCircle = prevButton.querySelector('.circle-progress');
                        const prevIcon = prevButton.querySelector('.play-icon');

                        if (prevCircle) {
                            prevCircle.classList.remove('playing');
                            prevCircle.style.animation = 'none'; // Reset progress
                        }
                        if (prevIcon) {
                            prevIcon.classList.remove('fa-pause');
                            prevIcon.classList.add('fa-play');
                        }
                    }
                }

                // Play this audio and start circular progress
                audio.play().then(() => {
                    console.log("Audio is now playing");

                    currentlyPlaying = audio;

                    if (playIcon) {
                        playIcon.classList.remove('fa-play');
                        playIcon.classList.add('fa-pause');
                    }

                    const duration = audio.duration;
                    console.log(`Setting progress animation for duration: ${duration} seconds`);

                    if (circleProgress) {
                        circleProgress.classList.add('playing');
                        circleProgress.style.animation = 'none'; // Reset any previous animation
                        setTimeout(() => {
                            circleProgress.style.animation = `progress ${duration}s linear forwards`;
                            console.log("Starting progress animation");
                        }, 10); // Slight delay to trigger the animation reset
                    }

                    // Reset animation and icon when the audio ends
                    audio.onended = () => {
                        if (circleProgress) {
                            circleProgress.classList.remove('playing');
                            circleProgress.style.animation = 'none'; // Reset progress when audio ends
                        }
                        if (playIcon) {
                            playIcon.classList.remove('fa-pause');
                            playIcon.classList.add('fa-play');
                        }
                        currentlyPlaying = null; // No audio playing
                        console.log("Audio ended, progress and icon reset");
                    };
                }).catch(error => {
                    console.log("Error playing audio: ", error);
                });
            } else {
                // Pause the audio and stop the circular progress
                audio.pause();
                if (circleProgress) {
                    circleProgress.classList.remove('playing');
                    circleProgress.style.animation = 'none'; // Reset progress
                }

                if (playIcon) {
                    playIcon.classList.remove('fa-pause');
                    playIcon.classList.add('fa-play');
                }
                currentlyPlaying = null; // No audio playing
                console.log("Audio paused, resetting progress and icon");
            }
        });
    });
});