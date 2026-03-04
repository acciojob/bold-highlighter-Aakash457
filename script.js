function highlight() {
    // Select all <strong> elements
    const boldWords = document.querySelectorAll('strong');
    
    // Loop through each element and change color to green
    boldWords.forEach(function(element) {
        element.style.color = "rgb(0, 128, 0)";
    });
}

function return_normal() {
    // Select all <strong> elements
    const boldWords = document.querySelectorAll('strong');
    
    // Loop through each element and change color back to black
    boldWords.forEach(function(element) {
        element.style.color = "rgb(0, 0, 0)";
    });
}