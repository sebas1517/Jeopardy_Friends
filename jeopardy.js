class JeopardyColumn {
    constructor(category, q2, q4, q6, q8, q10) {
        this.category = category;
        this.two = { points: 200, question: q2, clicked: false };
        this.four = { points: 400, question: q4, clicked: false };
        this.six = { points: 600, question: q6, clicked: false };
        this.eight = { points: 800, question: q8, clicked: false };
        this.ten = { points: 1000, question: q10, clicked: false };
    }
}

const column1 = new JeopardyColumn("What is blud waffling about?", 
                                    "Q200: Sang to the tune of American Boy, this cover includes many references to the mainstream video game Fortnite. What is the title of the song?", 
                                    "Q400: This popular band is named after a character from the popular franchise, Bloons Tower Defense.", 
                                    "Q600: “Another day another ___” is a famous quote going around on social media due to the recent spike of popularity in a video game.", 
                                    "Q800: Using Texas rapper Erika Bank’s song, this trend blew up on TikTok in 2021 which involves two different outfits, some editing skills, and twerking which you might not even need to be good at given the correct assets.", 
                                    "Q1000: It was all a dream for this big time rapper from the east coast until he got hit by a drive by in the streets of LA.");
const column2 = new JeopardyColumn("Music", 
                                    "Q200: This Latin American duo created a song where the title directly translates to “If I don’t answer”, who are they?", 
                                    "Q400: This artist rose to fame after winning the first season of American idol in 2002.", 
                                    "Q600: Who is the number 1 artist worldwide right now according to Spotify?", 
                                    "Q800: Careful, you might just end up covering for them. This legendary rock band are known for their popular hits such as Paint it Black and Lady Jane.", 
                                    "Q1000: Known as the “Genius” and the “Father of soul music”, this famous artist was blind at the age of 7 but managed to sneak his way into becoming an acclaimed musician during the 1950s. He also wore sunglasses.");
const column3 = new JeopardyColumn("Film and Shows", 
                                    "Q200: This animated movie follows the adventures of a domesticated Spix Macaw names Blu as he finds his way through the massive streets of a specific South American City. ", 
                                    "Q400: Based on romance and music, This popular movie includes the likes of star studded actors such as Ryan Gosling, Emma Stone, JK Rowling, and John Legend.", 
                                    "Q600: On this 2004 series, the Diffy family left on vacation from the year 2121 but their rented time machine malfunctioned and they were thrown into the year 2004. Now Lloyd, his part-robotic wife Barbara, and his kids Phil and Pim, are forced to pretend to be a normal family in suburban Pickford.", 
                                    "Q800: This filmmaker is known for his award winning Oscar movies such as Pinocchio and The Shape of Water.", 
                                    "Q1000: This series centers on a farm like duo where the oldest brother watches over his beefy little sister as they navigate their way through suburbia. They also encounter problems with the devilish schemes from Red Guy as they go on in their life.");
const column4 = new JeopardyColumn("Video Games", 
                                    "Q200: As of December 2018, what is the name of the largest body of water on the Fortnite Battle Royale map?", 
                                    "Q400: Claiming awards such as Best game direction and Best role playing game, this critically acclaimed video game won game of the year 2022 edging out the likes of major titles such as Stray, Xenoblade, God of war etc.", 
                                    "Q600: A game where the main character uses a cardboard box to hide from enemy sentries and surveillance cameras.", 
                                    "Q800: This generation of gaming consisted of games that ran on consoles like the NES  and Sega SG-1000. Be careful these may bite you in the bum! What type of games were these?", 
                                    "Q1000: What video game franchise debuted in 2001 as a hybrid real-time strategy and puzzle video game centered on part-collecting for a crashed rocket ship (the SS Dolphin) with the help of plant-animal hybrids?");
const column5 = new JeopardyColumn("Geography", 
                                    "Q200: What color are the stars on the Australian flag?", 
                                    "Q400: Which country has won the most World Cups?", 
                                    "Q600: This glamorous, expensive city is home to one of the most famous F1 circuits that creates a very narrow tight space for the racers throughout the track.", 
                                    "Q800: What is the largest Dessert?", 
                                    "Q1000: This country’s flag holds the British Union Jack on the top left while sporting a shield depicting a red band across the top that features a lion holding a peeled coconut.");
const column6 = new JeopardyColumn("Sebastian's Tricky Questions", 
                                    "Q200: Apart from the Chicago bulls, what is the one other team that holds a sweet spot in Sebastian’s heart.", 
                                    "Q400: Fill in the blank. It was at the ripe age of __ years old when Sebastian took it upon himself to cross the border.", 
                                    "Fill in the blank. It was at the ripe age of ___ years old when Sebastian took it upon himself to cross the border for a better life.", 
                                    "Q800: On June 29th, 2014, Sebastian had experienced a deep depression caused by which European country?", 
                                    "Q1000: Surprise surprise, let’s go back in time to find out which artist made the first spot on my Top Songs for 2017.");


// Array to hold all columns
const jeopardyColumns = [column1, column2, column3, column4, column5, column6];

// Function to create the jeopardy board
function createJeopardyBoard() {
    const jeopardyBoard = document.getElementById("jeopardy-board");

    jeopardyColumns.forEach(column => {
        const columnDiv = document.createElement("div");
        columnDiv.classList.add("jeopardy-column");

        // Add category
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("jeopardy-category");
        categoryDiv.textContent = column.category;
        columnDiv.appendChild(categoryDiv);

        // Add point values
        for (let points of ["two", "four", "six", "eight", "ten"]) {
            const pointDiv = document.createElement("div");
            pointDiv.classList.add("jeopardy-point");
            const pointsObj = column[points];
            pointDiv.innerHTML = `<div class="point-value">${pointsObj.points}</div>`;
            if (!pointsObj.clicked) {
                pointDiv.addEventListener("click", () => displayQuestion(pointsObj, column, points));
            } else {
                pointDiv.classList.add("disabled");
            }
            columnDiv.appendChild(pointDiv);
        }

        jeopardyBoard.appendChild(columnDiv);
    });
}

// Function to display the question on the question page
function displayQuestion(pointsObj, column, points) {
    // Save the current question and clicked status in localStorage
    localStorage.setItem('currentQuestion', JSON.stringify({ question: pointsObj.question, column: column.category, points: points }));
    window.location.href = 'question.html'; // Redirect to the question page
}

// Call the function to create the Jeopardy board
createJeopardyBoard();