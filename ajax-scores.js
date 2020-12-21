function displayScores(){
    $.get("/color-game/scores.php", function(data) {
        $('#results').append(data);});
}

function postScore(username,roundscore){
    $.post("/color-game/input-score.php", {name: username, score: roundscore});
}