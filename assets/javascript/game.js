// $(document).ready(function() {
    var wins = 0;
    var losses = 0;
    var targetNumber = "";
    var totalCount = 0; 
    var gemVal = "";   
    var crystalImages = [
        {
            title: "amber",
            class: "gemPic",
            id: "amberGem",
            src: "./assets/images/amber.jpg",
            alt: "amber",
        },
        {
            title: "cluster",
            class: "gemPic",
            id: "clusterGem",
            src: "./assets/images/cluster.jpg",
            alt: "cluster",
        },
        {
            title: "tanzanite",
            class: "gemPic",
            id: "tanzaniteGem",
            src: "./assets/images/tanzanite.jpg",
            alt: "tanzanite",
        },
        {
            title: "zircon",
            class: "gemPic",
            id: "zirconGem",
            src: "./assets/images/zircon.jpg",
            alt: "zircon",
        },
    ];
        
    var contentPush = function() {
        $(".instructions").text(" play ball");
        targetNumber = Math.floor(Math.random() * 102 + 19);
        $(".random-number").text(targetNumber);
        $(".winCount").text(wins);
        $(".lossCount").text(losses);
    }

    function resetGame () {
        targetNumber = Math.floor(Math.random() * 102 + 19);
        totalCount = 0;  
        $(".random-number").text(targetNumber);
        $(".number-count").text(totalCount);
    }
    
        
    //display images, assign attributes, and assign values
    for (var i = 0 ; i < crystalImages.length ; i++) {
        var gemPic = $("<img>");
        gemPic.attr({
            alt: crystalImages[i].alt,
            title: crystalImages[i].title,
            class: crystalImages[i].class,
            id: crystalImages[i].id,
            src: crystalImages[i].src,
        });
        $(".crystal-images").append(gemPic);
        gemPic.wrap("<button class='gemButton'></button>")
        gemVal = Math.floor(Math.random() * 12 + 1);
        gemPic.parent().attr("value", gemVal);      
    };

    //add values of gem count clicks together
    $(".gemButton").on("click", function () {
        buttonVal = ($(this).val());
        buttonVal = parseInt(buttonVal);
        totalCount += buttonVal;
        totalCount = parseInt(totalCount);
        $(".number-count").html(totalCount);
        if (totalCount === targetNumber) {
            alert("you win!");
            wins++;
            $(".winCount").text(wins);
            resetGame();
        } else if (totalCount > targetNumber) {
            alert("you lose!");
            losses++;
            $(".lossCount").text(losses);      
            resetGame();
        }    
    });
    
    contentPush();
    
// })

