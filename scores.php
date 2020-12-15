<?php
include "credentials.php";
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error)
{
  die("Unable to connect to database: " . $conn->connect_error);
}

//Query to display top scores
$topscores = "SELECT * FROM Scores ORDER BY score desc  LIMIT 5";
$result = $conn->query($topscores);

if ($result->num_rows > 0)
{
  $scoretable = "<table class=\"table table-hover table-dark table-striped\"><tr><td>Name</td><td>Score</td></tr>";
  // Output highscores
  while($row = $result->fetch_assoc())
  {
      $scoretable .= "<tr><td>".$row["name"]. "</td><td>" . $row["score"]. "</td></tr>";
  }
  $scoretable .= "</table>";
  echo $scoretable;
}
else
{
  echo "No scores available";
}

$conn->close();
?>