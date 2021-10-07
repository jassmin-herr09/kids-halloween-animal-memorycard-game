

// Audio 

class AudioController {
    constructor() {
         this.bgMusic = new Audio('Assets/Audio/creepy.mp3');
         this.flipSound = new Audio('Assets/Audio/flip.wav');
         this.matchSound = new Audio('Assets/Audio/match.wav');
         this.victorySound = new Audio('Assets/Audio/victory.wav');
         this.gameOverSound = new Audio('Assets/Audio/gameover.wav');
         this.bgMusic.volume = 0.5; // 1 is full blast
         this.bgMusic.loop = true; //lets music loop

    }
  startMusic() {
      this.bgMusic.play();

  }

  stopMusic() {
      this.bgMusic.pause();
      this.bgMusic.currentTime = 0;

  }

 flip() {
     this.flipSound.play();
 }
 match() {
     this.victorySound.play();

 }
 victory() {
     this.stopMusic();
     this.victory.play();
 }
 gameOver() {
     this.stopMusic();
     this.gameOverSound.play();

 }
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text')); 
    let cards = Array.from(document.getElementsByClassName('card'));

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');

            //game. start Game
            let audioController = new AudioController ();
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
    document.addEventListener('DOMContentLoaded', ready());
  
  } else {
      ready();
  }

