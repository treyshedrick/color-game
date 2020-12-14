function displayScores()
{
$.get("/color-game/scores.php", function(data) {
    $('#results').append(data);});
}
