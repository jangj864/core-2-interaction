// Select your container element.
var containerElement = document.querySelector('.Container');

// Define the insert function with a parameter.
function insertDataItem(dataItem) {

	// Update this to your match your collection's metadata.
	containerElement.innerHTML += `
		<div class="Movie" style="background: ${ dataItem['color'] }">
			<p>Time: ${ dataItem['Time'] }</p>
			<p>Theater: ${ dataItem['Theater'] }</p>
			<p>Seat: ${ dataItem['Seat'] }</p>
			<p>Format: ${ dataItem['Format'] }</p>
			<p>Run Time: ${ dataItem['RunTime'] }</p>
			<p>Number Of Movie Viewings: ${ dataItem['NumberOfMovieViewings'] }</p>
			<p>With: ${ dataItem['With'] }</p>
			<p>Feeling: ${ dataItem['Feeling'] }</p>
		</div>
	`
}

// Run the insert function for every element in the collection array
data.forEach((dataItem) => {
	insertDataItem(dataItem)
});