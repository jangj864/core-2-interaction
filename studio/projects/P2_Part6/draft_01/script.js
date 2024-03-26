function updateCircleValue(link, selectedValue, type) {
    // 현재 이벤트의 기본 동작을 중지합니다.
    event.preventDefault();
    
    const circle = link.closest('.circle');
    const circleValueContainer = circle.querySelector(".selectedValue");
    let calculatedValue = 0;

    switch (type) {
        case 'theater':
            switch (selectedValue) {
                case 'Total':
                    calculatedValue = 295;
                    break;
                case 'AMC':
                    calculatedValue = 3;
                    break;
                case 'CGV':
                    calculatedValue = 268;
                    break;
                case 'Megabox':
                    calculatedValue = 24;
                    break;
            }
            break;
        case 'format':
            switch (selectedValue) {
                case 'Total':
                    calculatedValue = 295;
                    break;
                case '2D':
                    calculatedValue = 181;
                    break;
                case 'DolbyAtmos':
                    calculatedValue = 7;
                    break;
                case 'IMAX2D':
                    calculatedValue = 47;
                    break;
                case 'IMAX3D':
                    calculatedValue = 21;
                    break;
                case '4DX':
                    calculatedValue = 27;
                    break;
                case 'ScreenX':
                    calculatedValue = 9;
                    break;
            }
            break;
        case 'with':
            switch (selectedValue) {
                case 'Total':
                    calculatedValue = 295;
                    break;
                case 'Alone':
                    calculatedValue = 126;
                    break;
                case 'Friend':
                    calculatedValue = 126;
                    break;
                case 'Family':
                    calculatedValue = 43;
                    break;
            }
            break;
        case 'feeling':
            switch (selectedValue) {
                case 'Total':
                    calculatedValue = 295;
                    break;
                case 'Reasonable':
                    calculatedValue = 223;
                    break;
                case 'Regrettable':
                    calculatedValue = 72;
                    break;
            }
            break;
        default:
            break;
    }

    circleValueContainer.textContent = calculatedValue;
    circle.querySelector(".selected" + type.charAt(0).toUpperCase() + type.slice(1)).textContent = selectedValue;
}
