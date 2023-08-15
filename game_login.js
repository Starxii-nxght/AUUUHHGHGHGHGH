function addUser(){ 
  var player_one = document.getElementById("player1_name_input").value;
  var player_two = document.getElementById("player2_name_input").value;
  localStorage.setItem("player1", player_one);
  localStorage.setItem("player2", player_two);
  window.location = "game_page.html";
}

function send(){
  number1 = document.getElementById("number1").value;
  number2 = document.getElementById("number2").value;
  actual_answer = parseInt(number1) * parseInt (number2)
}

question_number = "<h4>" +  number1 + " X"+  number2 + "<h4>";
input_box = "<br>Answer : <input_type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
row = question_number + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value ="";
document.getElementById("number2").value ="";

function check() 
{
  get_answer =  document.getElementById("input_check_box").value
  if(get_answer == actual_answer)
  {
    player1_score = +1;
    document.getElementById("player1_score").innerHTML = player1_score;
  }
  else
  {
    player2_score = +1;
    document.getElementById("player2_score").innerHTML = player2_score;
  }
  if(question_turn == "player1")
  {
    question_turn = "player2";
    document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name  ;
  }
  else
  {
    question_turn = "player1";
    document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name  ;
  }
  if(answer_turn == "player1")
  {
    answer_turn = "player2";
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name  ;
  }
  else
  {
    answer_turn = "player1";
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name  ;
  }
}