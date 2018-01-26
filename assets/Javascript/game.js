
    // On Page Load:
        // Create variables (and set them to default values):
	    var computerRandomNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
            console.log(computerRandomNumber)
        var crystalValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	
        var wins = 0;
        var losses = 0;
        var userTotalScore = 0;

        var crystalClickedValue1 = crystalValues[Math.floor(Math.random() * crystalValues.length)];
        var crystalClickedValue2 = crystalValues[Math.floor(Math.random() * crystalValues.length)];
        var crystalClickedValue3 = crystalValues[Math.floor(Math.random() * crystalValues.length)];
        var crystalClickedValue4 = crystalValues[Math.floor(Math.random() * crystalValues.length)];
     
     
        // Call reset function
        // reset()
		// Call update items on the page function
        //updates
        // updateTotalScore();
        // updateScoreboard();
        // reset();

    
    // On crystal click:
    $("#purple").click(function() {
        //console.log("works")
        // var crystalClickedValue = crystalValues[Math.floor(Math.random() * crystalValues.length)];
        console.log(userTotalScore);
        userTotalScore = userTotalScore + crystalClickedValue1;
        updateTotalScore();
        updateScoreboard();
    });

    $("#blue").click(function() {
        //console.log("works")
        // var crystalClickedValue = crystalValues[Math.floor(Math.random() * crystalValues.length)];
        console.log(userTotalScore);
        userTotalScore = userTotalScore + crystalClickedValue2;
        updateTotalScore();
        updateScoreboard();
    });

    $("#pink").click(function() {
        //console.log("works")
        // var crystalClickedValue = crystalValues[Math.floor(Math.random() * crystalValues.length)];
        console.log(userTotalScore);
        userTotalScore = userTotalScore + crystalClickedValue3;
        updateTotalScore();
        updateScoreboard();
    });

    $("#green").click(function() {
        //console.log("works")
        // var crystalClickedValue = crystalValues[Math.floor(Math.random() * crystalValues.length)];
        console.log(userTotalScore);
        userTotalScore = userTotalScore + crystalClickedValue4;
        updateTotalScore();
        updateScoreboard();
    });

    function updateTotalScore(){
        document.getElementById("totalScore").innerHTML = userTotalScore;
        // $("#totalScore").text() = userTotalScoreNew;
    }

    document.getElementById("randomNumber").innerHTML = computerRandomNumber;
    document.getElementById("win").innerHTML = wins;
    document.getElementById("lose").innerHTML = losses;
   
   function updateScoreboard(){

        if(userTotalScore === computerRandomNumber){
            wins++
            reset();
            }else if(userTotalScore > computerRandomNumber){
                losses++
                reset();
            }
        };

    function reset(){
            userTotalScore = 0;
            
    }

    updateTotalScore();
    updateScoreboard();

        // Figure out what crystal they clicked and store in a variable
        // Store crystal value in variable (crystalClickedValue)
        // Add crystalClickedValue to userTotalScore
        // Call update items on the page function
        // if they win (userTotalScore === computerRandomNumber)
            // Add 1 to wins
            // Call reset function
			// Call update items on the page function
        // if they lose (userTotalScore > computerRandomNumber)
			// Add 1 to losses
			// Call reset function
			// Call update items on the page function
    // Update items on the page (function):
        // Put wins on page
        // Put losses on page
        // Put computerRandomNumber on page
        // Put userTotalScore on page
	// Reset (function):
		// userTotalScore = 0
        // computerRandomNumber = new random number between 19 and 120
        // array of crystals values (new random numbers between 1 and 12)
	