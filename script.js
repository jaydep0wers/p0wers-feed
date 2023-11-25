var audio = document.getElementById("backgroundMusic");

    // Check if the user has interacted with the page
    var hasInteracted = false;

    document.addEventListener("click", function() {
        if (!hasInteracted) {
            // On the first interaction, unmute and play the audio
            audio.muted = false;
            audio.volume = 0.1; // Adjust the volume as needed
            audio.play();
            hasInteracted = true;
        }
    });