/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const startGame_btn = document.querySelector('#btn__reset')  
const key_Btns = document.querySelectorAll(".key")  
var game = null

//add functionality to the start game btn 
startGame_btn.addEventListener('click',(e)=>{
    game = new Game()
    game.startGame()
    game.resetGame()
})

//capute users input via on screen keyboard
key_Btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        game.handleInteraction(e)
    })
})

//capture user input via keypresses 
document.addEventListener('keypress', (e) => {
        const key = e.key
        key_Btns.forEach(btn => {
            if (e.key === btn.innerHTML){
                btn.click()
            }
        })
})
