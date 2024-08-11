// highlight function
function highlightButton(buttonId) {
    // get buttons
    const catButton = document.getElementById("catButton");
    const dogButton = document.getElementById("dogButton");
    const frogButton = document.getElementById("frogButton");
    // remove highlights
    catButton.classList.remove("highlight");
    dogButton.classList.remove("highlight");
    frogButton.classList.remove("highlight");
    
    // add highlight to the selected button
    document.getElementById(buttonId).classList.add("highlight");
}

function displayMessageAndImage(animal) {
    // get relevant elements
    const textField = document.getElementById("textField");
    const message = document.getElementById("message");
    const image = document.getElementById("image");

    // update elements based on the selected animal
    if (animal === 'cat') {
        textField.value = "User clicks Cat";
        message.innerHTML = "Cat is clicked";
        image.src = "animals/cat.png"; 
        highlightButton("catButton");
    } else if (animal === 'dog') {
        textField.value = "User clicks Dog";
        message.innerHTML = "Dog is clicked";
        image.src = "animals/dog.png"; 
        highlightButton("dogButton");
    } else if (animal === 'frog') {
        textField.value = "User clicks Frog";
        message.innerHTML = "Frog is clicked";
        image.src = "animals/frog.png";
        highlightButton("frogButton");
    }
}
