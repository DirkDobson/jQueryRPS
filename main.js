$(document).ready( function() {

var options = ['rock', 'paper', 'scissors']
var score = {win: 0, lose: 0, tie: 0 }
var $rock = $('rock')
var $paper = $('paper')
var $scissors = $('scissors')
var user = ''
var computer = ''
var button = $('button')

$rock.on('click', function() {
  $('rock')
  .animate({
    height: '59%',
    width: '59%',
  }, 1)
})


 $paper.on('click', function() {
  $('paper')
  .animate({
    height: '59%',
    width: '59%',
  }, 1)
})

 $scissors.on('click', function(){
  $('rock')
  .animate({
    height: '59%',
    width: '59%',
  }, 1)
})

function computerSelection() {
  return options[Math.floor(Math.random() * options.length)]
}

function compare() {
  if (user === computer)
    return 'tie' 

  switch(user) {
    case 'rock':
      return computer === 'paper' ? 'lose' : 'win'
    case 'paper':
      return computer === 'scissors' ? 'lose' : 'win'
    case 'scissors':
      return computer === 'rock' ? 'lose' : 'win'
    default:
      return
  }
}
 
function render() {
  win.innerHTML = 'Wins: ' + score.win
  lose.innerHTML = 'Losses: ' + score.lose
  tie.innerHTML = 'Ties: ' + score.tie


}

for (var i = 0; i < button.length; i++) {
  // [#rock.choice, #paper.choice, #scissors.choice]
  button[i].addEventListener('click', function() {
    user = computerSelection()
computer = computerSelection()
result = compare()
score[result]++
render()
})}








})