
var containerElement = document.querySelector('.Container');


// select our container element
function insertColorSwatches(costume) {

	// select the kirby elemnt
	var kirbyElement = document.querySelector(`.Kirby[data-costume="${ costume.title }"]`);

	// for each color in the costume	
	costume['colors'].forEach((color) => {

		// add the swatch HTML with background color
		kirbyElement.innerHTML += `
			<div class="Swatch" style="background: ${ color }"></div>
		`;
	});
}

// insert single costume function
function insertCostume(costume) {

	// put costume into html
	containerElement.innerHTML += `
		<article class="Kirby" data-costume="${ costume['title'] }">
			<h2>${ costume['title'] }</h2>
			<img src="media/${ costume['image'] }"/>
			<p>${ costume['powers'] }</p>
		</article>
	`;

	// insert color swatches function definition
	insertColorSwatches(costume);

}

//insert all costumes function definition
function insertCostumes(costumes) {

	// empty the container element
	containerElement.innerHTML = '';

	// for each costume...
	costumes.forEach((costume) => {
		// insert costume
		insertCostume(costume);
	});

}

// insert all costumes into the DOM
insertCostumes(costumes);


// FILTER COSTUMES BY COLOR
// --------------------------------------------

// get all costumes with a single color
// var redCostumes = costumes.filter((costume) => {
// // test for the color red
// return costume['colors'].includes('red');
// });

function getCostumesWithColor(color) {

	// define the variable
    var costumesWithColor = costumes.filter((costume) => {
        return costume['colors'].includes(color);
    });

	// return the variable
	return costumesWithColor;

}

	var redCostumes = getCostumesWithColor('red');


// EVENT LISTENERS
//-------------------

// get all button elements

var colorButtonElements = document.querySelectorAll('.ColorControls input')


// for each button...
colorButtonElements.forEach((button) => {
    button.addEventListener('click', () => {
		var color = button.value;
		var costumesWithColor = getCostumesWithColor(color);
		// console.log(costumesWithColor);
		insertCostumes(costumesWithColor);
    });;
});
