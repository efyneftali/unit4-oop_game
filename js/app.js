/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startGame_btn = document.querySelector('#btn__reset')

//const phrase = new Phrase()
var game = null
//console.log(game.startGame())
// const randomPhrase = game.getRandomPhrase()
// const phrase = new Phrase(randomPhrase.phrase)
// phrase.addPhraseToDisplay()
//console.log(game.getRandomPhrase().addPhraseToDisplay())

startGame_btn.addEventListener('click',(e)=>{
    game = new Game()
    game.startGame()
    game.handleInteraction()
    //console.log(game.phrase)
})




//const phrase = new Phrase('Life is like a box of chocolates')
//console.log(`Phrase - phrase: ${phrase.phrase}`)

// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// })


// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//   };
// //const game = new Game();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
