function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
      rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
        rectangle2.position.x &&
      rectangle1.attackBox.position.x <=
        rectangle2.position.x + rectangle2.width &&
      rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
        rectangle2.position.y &&
      rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    )
  }
  
  function determineWinner({ player, enemy, timerId }) {
    clearTimeout(timerId)
    document.querySelector('#displayText').style.display = 'flex'
    if (player.health === enemy.health) {
      document.querySelector('#displayText').innerHTML = 'ITS A TIEEEE'
      document.querySelector('#displayText').style.color = 'blue'
    } else if (player.health > enemy.health) {
      document.querySelector('#displayText').innerHTML = 'GO HOME LOSERRR, PLAYER 1 WINS!!!'
      document.querySelector('#displayText').style.color = 'red'

    } else if (player.health < enemy.health) {
      document.querySelector('#displayText').innerHTML = 'I WIN AGAIN, PLAYER 2 WINS!!'
      document.querySelector('#displayText').style.color = 'blue'

    }
  }
  
  let timer = 60
  let timerId
  function decreaseTimer() {
    if (timer > 0) {
      timerId = setTimeout(decreaseTimer, 1000)
      timer--
      document.querySelector('#timer').innerHTML = timer
    }
  
    if (timer === 0) {
      determineWinner({ player, enemy, timerId })
    }
  }