// Links inside the dropdown
const dropdownLinks = document.querySelectorAll('.dropdown-content a');

// Loop through all dropdown links and add click event listener
dropdownLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Get the text content of the clicked link
        const selectedValue = this.textContent;
        // Update the value in the circle
        updateCircleValue(selectedValue, 2);
    });
});

// Update circle value function
function updateCircleValue(selectedValue, index) {
    const circleValueContainer = document.querySelector(`#analysis .circle:nth-child(${index}) .value-container span`);
    // 예시로 설정한 값 대신에 선택된 값에 따라 적절한 값으로 설정할 수 있습니다.
    let calculatedValue = selectedValue === 'Theater' ? 15041 : 0; 

    // Calculate the value and update the circle
    circleValueContainer.textContent = calculatedValue;

    // Apply styles to the SVG element
    const circleSVG = document.querySelector(`#analysis .circle:nth-child(${index}) svg circle`);
    circleSVG.setAttribute('stroke', 'white');
    circleSVG.setAttribute('stroke-width', '3');
}
