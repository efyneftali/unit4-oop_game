/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game{
    //initialize game properties
    constructor() {
        //missed guesses counter
        this.missed = 0
        //array of phrase objs
        this.phrases = [new Phrase('I know movie but dont know movie name'),
                        new Phrase('I may not know love but I know snacks'),
                        new Phrase('flower flower flower'),
                        new Phrase('I purple you'),
                        new Phrase('you know BTS')]
        //current phrase obj at play
        this.activePhrase = null
    } 
   

    //return a random phrase
    getRandomPhrase(){
        let randomPhrase = this.phrases[Math.floor(Math.random()* this.phrases.length)]
        return randomPhrase
    }

    //hides the overlay div, call on gets a random phrase and displays it
    startGame(){
        const overlay_div = document.querySelector('#overlay')
        overlay_div.style.display = 'none'
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay() 
        //
        
    }

    //lets the user know they won, if the all letters have been displayed before running out of hearts
    checkForWin(){

    }

    //removes a heart when the user guesses a letter not present in the phrase
    removeLife(){
        const hearts = document.querySelectorAll('#scoreboard img')
        hearts[this.missed].src = 'images/lostHeart.png'
        this.missed ++ 
    }
    gameOver(){
        
    }

    //handles UI logic
    handleInteraction(){
        const key_Btns = document.querySelectorAll(".key")        
        key_Btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const letter = e.target.innerHTML
                const isPresent = this.activePhrase.checkLetter(letter)
                if(isPresent){
                    console.log(letter)
                    this.activePhrase.showMatchedLetter(letter)
                }else{
                    this.removeLife()  
                    //check if 
                }
                
            })
        })

        
    }

}