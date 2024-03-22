var containerElement = document.querySelector('.Container');


// select our container element
function insertColorSwatches(costume) {

	var kirbyElement = document.querySelector(`.Kirby[data-costume="${ costume.title }"]`);

	costume['colors'].forEach((color) => {
		kirbyElement.innerHTML += `
			<div class="Swatch" style="background: ${ color }"></div>
		`;
	});
}

function insertCostume(costume) {

	containerElement.innerHTML += `
		<article class="Kirby" data-costume="${ costume['title'] }">
			<h2>${ costume['title'] }</h2>
			<img src="media/${ costume['image'] }"/>
			<p>${ costume['powers'] }</p>
		</article>
	`;

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

//insert all costumes into the DOM
insertCostumes(costumes);


// FILTER COSTUMES BY COLOR
// --------------------------------------------

// detect if a costume includes colors
// console.log(costumes[0]['colors'].includes('red'));

// get all costumes with a single color
// var redCostumes = costumes.filter((costume) => {
// 	return costume['colors'].includes('red');
// });
// var blueCostumes = costumes.filter((costume) => {
// 	return costume['colors'].includes('blue');
// });
// var greenCostumes = costumes.filter((costume) => {
// 	return costume['colors'].includes('green');
// });


function getCostumesWithColor(color) {


	var costumesWithColor = costumes.filter((costume) => {
		return costume['colors'].includes(color);
	});


	return costumesWithColor;
}


var colorButtonElements = document.querySelectorAll('.ColorControls input');

colorButtonElements.forEach((button) => {
	button.addEventListener('click', (event) => {
		var color = event.target.value;
		var costumes = getCostumesWithColor(color);
		insertCostumes(costumes);
	});
});
