
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
class MixorMatch {
    constructor(totalTime, cards){
      this.cardsArray = cards;
      this.totalTime = totalTime;
      this.timeRemaining = totalTime;
      this.timer = document.getElementById('time-remaining');
      this.ticker = document.getElementbyId('flips');
      this.audioController = new AudioController();
      
    }
  startGame() {
      this.cardToCheck = null;
      this.totalClicks = 0;
      this.timeRemaining = this.totalTime;
      this.matchedCards = []; // matched cards into this array. 
      this.busy = true; // animation is happening right now. 

  }
  flipCard(card) {
      //check whether or not can flip card
      if(this.canFlipCard(card)) {
          this.audioController.flip();
          this.totalClicks++;
          this.ticker.innerText = this.totalClicks;
          card.cardList.add('visible');


      }

  }
   
  //if returns true then card can be flipped. all 3 statements have to be false for it to be True. 
  canFlipCard(card) {
  return true;
  //return(!this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck) 

  }

}



function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text')); 
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MixorMatch(100, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
              game.startGame();

            
            let audioController = new AudioController ();
          audioController.startMusic();


        });

    });
  cards.forEach(card => {
     card.addEventListener('click', () => {
         game.flipCard(card)

     });
  });

}


if(document.readyState === 'loading') { // loading process
    document.addEventListener('DOMContentLoaded', ready());
  
  } else {
      ready();
  }

