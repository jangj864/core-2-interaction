function toggleDropdown(button) {
    button.nextElementSibling.classList.toggle("show");
}

function filterFunction(input) {
    var filter, div, a, i;
    filter = input.value.toUpperCase();
    div = input.parentNode.nextElementSibling;
    a = div.getElementsByTagName("a");

    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

function updateCircleValue(link, type) {
    const circleValueContainer = link.parentNode.parentNode.querySelector(".selectedValue");
    const selectedTheater = link.parentNode.parentNode.querySelector(".selectedTheater");

    let calculatedValue = 0;
    switch (link.textContent) {
        case 'Total':
            calculatedValue = (type === 'Theater') ? 260 : 0;
            break;
        case 'AMC':
            calculatedValue = (type === 'Theater') ? 3 : 0;
            break;
        case 'CGV':
            calculatedValue = (type === 'Theater') ? 107 : 0;
            break;
        case 'Megabox':
            calculatedValue = (type === 'Theater') ? 100 : 0;
            break;
        case '2D':
            calculatedValue = (type === 'Format') ? 260 : 0;
            break;
        case 'IMAX2D':
            calculatedValue = (type === 'Format') ? 3 : 0;
            break;
        case 'IMAX3D':
            calculatedValue = (type === 'Format') ? 107 : 0;
            break;
        case '4DX':
            calculatedValue = (type === 'Format') ? 100 : 0;
            break;
        case 'ScreenX':
            calculatedValue = (type === 'Format') ? 50 : 0;
            break;
        case 'Alone':
            calculatedValue = (type === 'With') ? 30 : 0;
            break;
        case 'Friend':
            calculatedValue = (type === 'With') ? 100 : 0;
            break;
        case 'Family':
            calculatedValue = (type === 'With') ? 200 : 0;
            break;
        case 'Reasonable':
            calculatedValue = (type === 'Feeling') ? 150 : 0;
            break;
        case 'Regrettable':
            calculatedValue = (type === 'Feeling') ? 50 : 0;
            break;
        default:
            break;
    }

    circleValueContainer.textContent = calculatedValue;
    selectedTheater.textContent = link.textContent;
}
