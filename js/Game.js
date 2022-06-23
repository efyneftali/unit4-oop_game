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

    //check if user won, if the all letters have been displayed before running out of hearts
    checkForWin(){                
        const letters_li = document.querySelectorAll('.hide, .letter')
        const letters_arr = [...letters_li]
        let isWinner = null
        const letterClasses = [] 
        letters_li.forEach(li =>{
            //make arr with class name hide / show
            letterClasses.push(li.classList[0])
        })
        isWinner = letterClasses.includes("hide")
        return isWinner

    }
    gameOver(gameResult){
        const overlay_div = document.querySelector('#overlay')
        const overlay_h1 = document.querySelector('#game-over-message')
        overlay_div.style.display = 'block'
        overlay_div.className=''
        if (gameResult){
            overlay_div.className='lose'
            overlay_h1.innerHTML = "Better luck next time"
        }else{
            overlay_div.className='win'
            overlay_h1.innerHTML = "Cograts you won!"
        }
    }

    //removes a heart when the user guesses a letter not present in the phrase
    removeLife(){
        const hearts = document.querySelectorAll('#scoreboard img')
        hearts[this.missed].src = 'images/lostHeart.png'
        this.missed ++ 
    }
    //resets game after winning or losing
    resetGame(){
        const phrase_ul = document.querySelector("#phrase ul")
        const hearts = document.querySelectorAll('#scoreboard img')
        const key_Btns = document.querySelectorAll(".key") 
        phrase_ul.innerHTML = ''
        hearts.forEach(heart=>{
            heart.src = 'images/liveHeart.png'
        })
        key_Btns.forEach(btn => {
            btn.disabled = false
            btn.classList.remove('chosen','wrong')
        })

    }

    //handles UI logic
    handleInteraction(){
        const key_Btns = document.querySelectorAll(".key")        
        key_Btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.target.disabled = true
                const letter = e.target.innerHTML
                const isPresent = this.activePhrase.checkLetter(letter)
                if (this.checkForWin()&&this.missed<4){
                    if(isPresent){
                        this.activePhrase.showMatchedLetter(letter)
                        e.target.classList.add("chosen")
                        if(!this.checkForWin()){
                            this.gameOver(this.checkForWin())
                            this.resetGame() 
                        }
                    }else{
                        e.target.classList.add("wrong")
                        this.removeLife() 
                    }   
                }
                else{
                    this.gameOver(this.checkForWin())
                    this.resetGame()
                }
            })
        })  
    }

}