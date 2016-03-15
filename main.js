window.onload = function() {

  var rock = document.getElementById('rock');
  rock.addEventListener("click", rockFun);

  var paper = document.getElementById('paper');
  paper.addEventListener("click", paperFun);

  var scissors = document.getElementById('scissors');
  scissors.addEventListener("click", scissorFun);

  var resetTotals = document.getElementById('reset_totals');
  resetTotals.addEventListener("click", resetTotal);

  var winner = document.getElementById('winner');
  var playerTotal = document.getElementById('player_total');
  var computerTotal = document.getElementById('computer_total');
  var tieTotal = document.getElementById('tie_total');
  var wins = 0;
  var losses = 0;
  var ties = 0;

  function rockFun() {
    player = 'rock';
    computerChoice(player);
  }

  function paperFun() {
    player = 'paper';
    computerChoice(player);
  }

  function scissorFun() {
    player = 'scissors';
    computerChoice(player);
  }

  function computerChoice(player) {
  comp = (Math.ceil(Math.random() * 3));
    if (comp == 1) {
        comp = 'rock';
    } else if (comp == 2) {
        comp = 'paper';
    } else {
        comp = 'scissors';
    }
    compareInputs(comp, player);
  }

  function compareInputs(comp, player) {
    if (comp == player) {
      result = "Tie";
      console.log('Tie');
    } else if (comp == 'rock' && player == 'paper') {
      result = "Player Wins";
      console.log('Player Wins');
    } else if (comp == 'rock' && player == 'scissors') {
      result = "Computer Wins";
      console.log('Computer Wins');
    } else if (comp == 'paper' && player == 'scissors') {
      result = "Player Wins";
      console.log('Player Wins');
    } else if (comp == 'paper' && player == 'rock') {
      result = "Computer Wins";
      console.log('Computer Wins');
    } else if (comp == 'scissors' && player == 'rock') {
      result = "Player Wins";
      console.log('Player Wins');
    } else if (comp == 'scissors' && player == 'paper') {
      result = "Computer Wins";
      console.log('Computer Wins');
    }
    outCome(result);
  }

  function outCome(result) {
    winner.innerHTML = result;
    if (result == 'Player Wins') {
      winner.style.color = '#76ff03';
      playerTotal.innerHTML = 'Player: ' + (wins += 1);
    } else if (result == 'Computer Wins') {
      winner.style.color = '#f44336';
      computerTotal.innerHTML = 'Computer: ' + (losses += 1);
    } else {
      winner.style.color = '#b2ebf2';
      tieTotal.innerHTML = 'Ties: ' + (ties += 1);
    }
  }

  function resetTotal(resetTotals) {
    playerTotal.innerHTML = 'Player:';
    wins = 0;
    computerTotal.innerHTML = 'Computer:';
    losses = 0;
    tieTotal.innerHTML = 'Ties:';
    ties = 0;
    winner.innerHTML = '';
  }
}
