
// Button click sound utility
export const playButtonClickSound = () => {
  const audio = new Audio('/sounds/button-click.mp3');
  audio.volume = 0.5; // Set volume to 50%
  audio.play().catch(error => {
    // Silent catch - browsers may block autoplay without user interaction
    console.log("Sound couldn't be played automatically:", error);
  });
};
