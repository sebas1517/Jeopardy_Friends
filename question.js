document.addEventListener("DOMContentLoaded", function () {
    const questionText = document.getElementById("question-text");
    const backButton = document.getElementById("back-button");

    // Retrieve the question, column, and points from localStorage
    const currentQuestion = JSON.parse(localStorage.getItem('currentQuestion'));

    // Display the question on the page
    questionText.textContent = currentQuestion.question;

    // Add event listener for the back button
    backButton.addEventListener("click", goBack);
});

// Function to go back to the main Jeopardy page
function goBack() {
    window.location.href = 'index.html'; // Redirect to the main Jeopardy page
}
