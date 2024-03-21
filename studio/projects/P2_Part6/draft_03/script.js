function updateCircleValue(link, selectedValue, type) {
    const circle = link.closest('.circle');
    const circleValueContainer = circle.querySelector(".selectedValue");
    let calculatedValue = 0;

    switch (type) {
        case 'theater':
            switch (selectedValue) {
                case 'Total':
                    calculatedValue = 260;
                    break;
                case 'AMC':
                    calculatedValue = 3;
                    break;
                case 'CGV':
                    calculatedValue = 107;
                    break;
                case 'Megabox':
                    calculatedValue = 100;
                    break;
            }
            break;
        case 'format':
            switch (selectedValue) {
                case 'Total':
                    calculatedValue = 260;
                    break;
                case '2D':
                    calculatedValue = 3;
                    break;
                case 'IMAX2D':
                    calculatedValue = 107;
                    break;
                case 'IMAX3D':
                    calculatedValue = 100;
                    break;
                case '4DX':
                    calculatedValue = 100;
                    break;
                case 'ScreenX':
                    calculatedValue = 100;
                    break;
            }
            break;
        case 'with':
            switch (selectedValue) {
                case 'Total':
                    calculatedValue = 260;
                    break;
                case 'Alone':
                    calculatedValue = 3;
                    break;
                case 'Friend':
                    calculatedValue = 107;
                    break;
                case 'Family':
                    calculatedValue = 100;
                    break;
            }
            break;
        case 'feeling':
            switch (selectedValue) {
                case 'Total':
                    calculatedValue = 260;
                    break;
                case 'Reasonable':
                    calculatedValue = 3;
                    break;
                case 'Regrettable':
                    calculatedValue = 107;
                    break;
            }
            break;
        default:
            break;
    }

    circleValueContainer.textContent = calculatedValue;
    circle.querySelector(".selected" + type.charAt(0).toUpperCase() + type.slice(1)).textContent = selectedValue;
}
