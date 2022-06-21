/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    //instantiate the phrase obj
    constructor( phrase) {
        // current phrase  
        this.phrase =  phrase.toLowerCase();

    }
    
    //methods
    addPhraseToDisplay(){
    // add chr place holders for all chrs in a random phrase
        const phrase_ul = document.querySelector("#phrase ul")
        const phrase_arr = this.phrase.split('')
        phrase_arr.forEach(char => {
            const li = document.createElement("li")
            li.innerHTML = char
            if(/[a-z]/.test(char)){
                li.setAttribute('class', `hide letter ${char}`)
            }else{
                li.setAttribute('class', 'hide space')
            }
            
            phrase_ul.appendChild(li)
           
            return phrase_ul 
        });

        return phrase_ul
    }
    
    // check if the letter selecter by the user is part of the phrase
    checkLetter(letter){
        return this.phrase.includes(letter)
    }

    // display the letter if correctly guess by the user
    showMatchedLetter(letter){
        const matches = document.querySelectorAll(`.${letter}`)
        matches.forEach(match => {
            match.classList.replace('hide', 'show')
        })

    }
    
    
}
