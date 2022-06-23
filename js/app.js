/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const startGame_btn = document.querySelector('#btn__reset')
var game = null

//add functionality to the start game btn 
startGame_btn.addEventListener('click',(e)=>{
    game = new Game()
    game.startGame()
    game.handleInteraction()
    
   
})
