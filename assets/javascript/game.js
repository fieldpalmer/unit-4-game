$(document).ready(function() {
   
   //counter variables
    var wins = 0;
    var losses = 0;
    var totalCount = 0; 
    //blank string variables to be filled
    var targetNumber = "";
    var gemVal = "";   
    //array of crystal image objects
    var crystalImages = [
        {
            title: "amber",
            class: "gemPic",
            id: "amberGem",
            src: "./assets/images/amber.png",
            alt: "amber",
        },
        {
            title: "cluster",
            class: "gemPic",
            id: "clusterGem",
            src: "./assets/images/cluster.png",
            alt: "cluster",
        },
        {
            title: "tanzanite",
            class: "gemPic",
            id: "tanzaniteGem",
            src: "./assets/images/tanzanite.png",
            alt: "tanzanite",
        },
        {
            title: "zircon",
            class: "gemPic",
            id: "zirconGem",
            src: "./assets/images/zircon.png",
            alt: "zircon",
        },
    ];
   
    //set random target number 19-120  
    targetNumber = Math.floor(Math.random() * 102 + 19);
    //display random target number on screen
    $(".random-number").text(targetNumber);
    //display total count on screen
    $(".number-count").text(totalCount);
    //display wins on screen
    $(".winCount").text(wins);
    //display losses on screen
    $(".lossCount").text(losses);

    //add images to screen with attributes
    function imageNumGen () {
        //run through image array to create multiple images and obtain object info
        for (var i = 0 ; i < crystalImages.length ; i++) {
            //create picture element on screen
            var gemPic = $("<img>");
            //set attributes for that image element
            gemPic.attr({
                alt: crystalImages[i].alt,
                class: crystalImages[i].class,
                id: crystalImages[i].id,
                src: crystalImages[i].src,
            });
            //append crystal image elements created from arry in blank span
            $(".crystal-images").append(gemPic);
            //wrap each image in a button to be clicked
            gemPic.wrap("<button class='gemButton'></button>")
            //set random number between 1-12 to equal each buttons value
            gemVal = Math.floor(Math.random() * 12 + 1);
            //apply that value to each button 
            gemPic.parent().attr("value", gemVal);      
        };
    } 

    //refresh values without refreshing page
    function resetGame () {
        //reset variables
        totalCount = 0; 
        targetNumber = Math.floor(Math.random() * 102 + 19);
        //empty current images and values to replace with new ones
        $(".crystal-images").empty();
        //set random target number 19-120  
        targetNumber = Math.floor(Math.random() * 102 + 19);
        //display random target number on screen
        $(".random-number").text(targetNumber);
        //display total count on screen
        $(".number-count").text(totalCount);
        //run imageNumGen to display images with new values
        imageNumGen();
        winLose();
    }; 

    //run win/loss procedure
    function winLose () {
        $("button").on("click", function () {
            //obtain value from button
            var buttonVal = ($(this).val());
            //parse string val to return integer
            buttonVal = parseInt(buttonVal);
            //add increment to total count
            totalCount += buttonVal;
            $(".number-count").html(totalCount); 
            if (totalCount === targetNumber) {
                wins++;
                $(".winCount").text(wins);
                resetGame();
            } else if (totalCount > targetNumber) {
                losses++;
                $(".lossCount").text(losses);     
                resetGame();
            }
        });   
    };
     //display images on screen
     imageNumGen();
     //act on click event
     winLose(); 

})

