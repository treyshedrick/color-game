var count = 0;
var randDivNum = 0;
var user = "";

//generate random numbers between 102-255 with atleast one zero
function colorarr()
{
    randomNums = [Math.floor(Math.random()*(255-102) + 102),Math.floor(Math.random()*(255-102) + 102), 0];
    randrgb = [randomNums[Math.floor(Math.random()*randomNums.length)],randomNums[Math.floor(Math.random()*randomNums.length)],randomNums[Math.floor(Math.random()*randomNums.length)]];

    while(randrgb[0] == 0 && randrgb[1] == 0 && randrgb[2] == 0)
    {
        randrgb = [randomNums[Math.floor(Math.random()*randomNums.length)],randomNums[Math.floor(Math.random()*randomNums.length)],randomNums[Math.floor(Math.random()*randomNums.length)]];
    }

    return randrgb;
}

function randcolor()
{
colorrbg = colorarr()
//assign to color variable to later assign to css
color = "rgb("+colorrbg[0]+","+colorrbg[1]+","+colorrbg[2]+")";

//assign random color to the main color for user to guess
colorchoices = document.getElementsByClassName('rndmcolor');
colorchoices[0].style.backgroundColor = color;

//assign random numbers to submit inputs
randDivNum = Math.floor(Math.random()*(9-2)+2);
for(x=1;x< colorchoices.length;x++)
{
    if(x == randDivNum)
    {
        colorchoices[x].style.backgroundColor = color;
    }
    else
    {
        colorDivrbg = colorarr();
        colorDiv = "rgb("+colorDivrbg[0]+","+colorDivrbg[1]+","+colorDivrbg[2]+")";
        colorchoices[x].style.backgroundColor = colorDiv;
    }
}
}

function formValue(val)
{
    //if user selects correct number keep game count going, else end game
    if(val.value == randDivNum)
    {
        randcolor();
        count += 1;
    }
    else
    {
        user = prompt("Game Over. Final Score: " + count);
        while(user == "")
        {
            user = prompt("Please enter your name");
        }
            if(user != null)
            {
                //ajax post score to db
                postScore(user,count);
		$('#results').empty();
		displayScores();
		count = 0;
                randcolor();
            }
            else
            {
            count = 0;
            randcolor();
            }
    }
}

randcolor();
displayScores();
