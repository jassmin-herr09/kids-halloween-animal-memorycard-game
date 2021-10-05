

// Audio 

class AudioController {
    constructor() {
         this.bgMusic = new Audio('Assets/Audio/creepy.mp3');
         this.flipSound = new Audio('Assets/Audio/flip.wav');
         this.matchSound = new Audio('Assets/Audio/match.wav');
         this.victorySound = new Audio('Assets/Audio/victory.wav');
         this.gameOverSound = new Audio('Assets/Audio/gameover.wav');
         this.bgMusic = 0.5; // 1 is full blast
         this.bgMusic = true; //let music loop

    }
  startMusic() {
      this.bgMusic.play();

  }



}


function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text')); 
    let cards = Array.from(document.getElementsByClassName('card'));

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');

            //game. start Game
            let audioController = new AudioController();
            audioController.startMusic();
            

        });

    });
  cards.forEach(card => {
     card.addEventListener('click', () => {
        // game flip card function

     });
  });

}


if(document.readyState === 'loading') { // loading process
    document.removeEventListener('DOMContentLoaded', ready());
  
  } else {
      ready();
  }

