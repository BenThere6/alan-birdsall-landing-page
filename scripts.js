document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    let currentlyPlaying = null; // Keep track of the currently playing audio

    const playButtons = document.querySelectorAll('.play-button');
    
    playButtons.forEach(button => {
        const audio = button.querySelector('.audio');
        const playIcon = button.querySelector('.play-icon');
        const songLengthElement = button.parentElement.querySelector('.song-length'); // Get the song length element
        const songElement = button.closest('.song'); // The entire song element for the progress bar

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

                    // Reset the play/pause icon and background of the previously playing song
                    const prevButton = currentlyPlaying.closest('.play-button');
                    const prevSong = currentlyPlaying.closest('.song');
                    if (prevButton) {
                        const prevIcon = prevButton.querySelector('.play-icon');
                        if (prevIcon) {
                            prevIcon.classList.remove('fa-pause');
                            prevIcon.classList.add('fa-play');
                        }
                    }
                    if (prevSong) {
                        prevSong.style.backgroundSize = '0% 100%'; // Reset the green progress bar
                    }
                }

                // Play this audio
                audio.play().then(() => {
                    console.log("Audio is now playing");

                    currentlyPlaying = audio;

                    if (playIcon) {
                        playIcon.classList.remove('fa-play');
                        playIcon.classList.add('fa-pause');
                    }

                    // Start updating the background progress
                    const updateProgress = () => {
                        const progressPercentage = (audio.currentTime / audio.duration) * 100;
                        songElement.style.backgroundSize = `${progressPercentage}% 100%`; // Move the green overlay
                    };

                    updateProgress(); // Initial call to set progress
                    audio.addEventListener('timeupdate', updateProgress); // Keep updating progress during playback

                    // Reset background when the audio ends
                    audio.onended = () => {
                        if (playIcon) {
                            playIcon.classList.remove('fa-pause');
                            playIcon.classList.add('fa-play');
                        }
                        currentlyPlaying = null; // No audio playing
                        songElement.style.backgroundSize = '0% 100%'; // Reset progress when audio ends
                        console.log("Audio ended, icon and background reset");
                    };
                }).catch(error => {
                    console.log("Error playing audio: ", error);
                });
            } else {
                // Pause the audio
                audio.pause();

                if (playIcon) {
                    playIcon.classList.remove('fa-pause');
                    playIcon.classList.add('fa-play');
                }
                currentlyPlaying = null; // No audio playing
                console.log("Audio paused, icon and background reset");
            }
        });
    });
});