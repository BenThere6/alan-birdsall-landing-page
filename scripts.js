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

                // If another audio is playing, pause it
                if (currentlyPlaying && currentlyPlaying !== audio) {
                    console.log(`Pausing other audio: ${currentlyPlaying.src}`);
                    currentlyPlaying.pause();
                    currentlyPlaying.currentTime = 0;

                    // Reset the previous song's background
                    const prevSong = currentlyPlaying.closest('.song');
                    if (prevSong) {
                        prevSong.style.background = ''; // Reset the progress bar to its default gray
                    }
                }

                // Play this audio and start updating the background progress
                audio.play().then(() => {
                    currentlyPlaying = audio;

                    if (playIcon) {
                        playIcon.classList.remove('fa-play');
                        playIcon.classList.add('fa-pause');
                    }

                    // Function to update the progress bar
                    const updateProgress = () => {
                        const progressPercentage = (audio.currentTime / audio.duration) * 100;
                        songElement.style.background = `linear-gradient(to right, rgba(0, 255, 0, 0.3) ${progressPercentage}%, #eaeaea 0%)`; // Green for played, gray for unplayed
                    };

                    // Initial progress update
                    updateProgress();

                    // Continuously update the progress bar as the song plays
                    audio.addEventListener('timeupdate', updateProgress);

                    // Reset background when the audio ends
                    audio.onended = () => {
                        if (playIcon) {
                            playIcon.classList.remove('fa-pause');
                            playIcon.classList.add('fa-play');
                        }
                        currentlyPlaying = null;
                        songElement.style.background = ''; // Reset to default when finished
                        console.log("Audio ended, icon and background reset");
                    };
                }).catch(error => {
                    console.log("Error playing audio: ", error);
                });
            } else {
                audio.pause();

                if (playIcon) {
                    playIcon.classList.remove('fa-pause');
                    playIcon.classList.add('fa-play');
                }
                currentlyPlaying = null;
                console.log("Audio paused");
            }
        });
    });
});