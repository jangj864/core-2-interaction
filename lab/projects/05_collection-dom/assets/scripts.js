// Select your container element.
var containerElement = document.querySelector('.Container');

// Define the insert function with a parameter.
function insertDataItem(dataItem) {

	// Update this to your match your collection's metadata.
	containerElement.innerHTML += `
		<div class="Movie" style="background: ${ dataItem['color'] }">
			<p>Title: ${ dataItem['Title'] }</p>
			<p>View: ${ dataItem['View'] }</p>
			<p>Time: ${ dataItem['Time'] }</p>
			<p>Date: ${ dataItem['Date'] }</p>
			<p>Theater: ${ dataItem['Theater'] }</p>
			<p>Format: ${ dataItem['Format'] }</p>
			<p>With: ${ dataItem['With'] }</p>
			<p>Feeling: ${ dataItem['Feeling'] }</p>
		</div>
	`
}	function setBackgroundColor(color) {
    document.documentElement.style.background = color;
}

//run the function
setBackgroundColor('black');

// Run the insert function for every element in the collection array
data.forEach((dataItem) => {
	insertDataItem(dataItem)
});