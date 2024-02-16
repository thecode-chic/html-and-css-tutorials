/* JavaScript file for generating color palette with regeneration button */
// Function to generate a random color
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to generate color palette
function generateColorPalette(numColors) {
    const colorPalette = document.getElementById('colorPalette');
    colorPalette.innerHTML = ''; // Clear previous palette

    for (let i = 0; i < numColors; i++) {
        const colorBox = document.createElement('div');
        colorBox.className = 'colorBox';
        colorBox.style.backgroundColor = generateRandomColor();
        colorPalette.appendChild(colorBox);
    }
}

// Initial generation of color palette with 5 colors
generateColorPalette(5);

// Event listener for button click to regenerate palette
document.getElementById('generateButton').addEventListener('click', function() {
    generateColorPalette(5);
});