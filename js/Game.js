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
        const letters_li = document.querySelectorAll('.hide')
        // const letters_arr = [...letters_li]
        // let isWinner = null
        // const letterClasses = [] 
        // letters_li.forEach(li =>{
        //     //make arr with class name hide / show
        //     letterClasses.push(li.classList[0])
        // })
        // isWinner = letterClasses.includes("hide")
        //console.log(letters_li)
        return (letters_li.length === 0)

    }
    gameOver(){
        const overlay_div = document.querySelector('#overlay')
        const overlay_h1 = document.querySelector('#game-over-message')
        overlay_div.style.display = 'block'
        overlay_div.className=''
        if (this.checkForWin()){
            overlay_div.className='win'
            overlay_h1.innerHTML = "Cograts You Know BTS<3"
            
        }else{
            overlay_div.className='lose'
            overlay_h1.innerHTML = "You Don't Know BTS :("
        }
    }

    //removes a heart when the user guesses a letter not present in the phrase
    removeLife(){
        const hearts = document.querySelectorAll('#scoreboard img')
        hearts[this.missed].src = 'images/lostHeart.png'
        this.missed ++ 
        if (this.missed === 5) {
            this.gameOver();
        }
    }
    //resets game after winning or losing
    resetGame(){
        const overlay_div = document.querySelector('#overlay')
        const hearts = document.querySelectorAll('#scoreboard img')
        const key_Btns = document.querySelectorAll(".key") 
        hearts.forEach(heart=>{
            heart.src = 'images/liveHeart.png'
        })
        key_Btns.forEach(btn => {
            btn.disabled = false
            btn.classList.remove('wrong')
            btn.classList.remove('chosen')
        })
        overlay_div.classList.remove('win')
        overlay_div.classList.remove('lose')
    }

    //handles UI/Game logic
    handleInteraction(e){
        e.target.disabled = true
        const letter = e.target.innerHTML
        const isPresent = this.activePhrase.checkLetter(letter)
            if(isPresent){
                this.activePhrase.showMatchedLetter(letter)
                e.target.classList.add("chosen")
                if(this.checkForWin()){
                    this.gameOver()
                }
            }else{
                e.target.classList.add("wrong")
                this.removeLife() 
            }   
    }
}