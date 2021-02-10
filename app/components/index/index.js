// wenn einer der links ausgewählt wurde -> hashevent fired 
// -> rufe navigate() auf
window.addEventListener('hashchange', navigate);

// abhängig vom #???? -> mach ein Update mit dem jeweiligen content
function navigate() {

	// hole Referenz zur "content" div 
	var contentDiv = document.getElementById('content');

	// entferne # Zeichen aus dem String und speichere aktuellen hash value string
	var hashValue = location.hash.substr(1);

	// setze die "content" div auf den aktuellen hash value string
	contentDiv.innerHTML = getContent(hashValue);
}

// setzte initial hash beim ersten Auruf auf main page (index.html)
// location.hash gibt einen String zurück -> wenn leerer String gehe zu main page
if(!location.hash) {
	location.hash = '#index';
}

// hole den dazugehörigen content anhand des aktuellen hash value strings
function getContent(hashValue) {

	// Objekt mit key-value pairs 
	var linksContent = {
		index: 'This is the Home Page',
		tutorials: 'This is the Tutorial Page',
		demo_app: 'This is the Demo App Page'
	};
	// gib den value des passenden keys anhand des aktuellen hash value strings zurück
	return linksContent[hashValue];
}

// prüfe beim aufrufen, den initial hash Wert-> wo ist der user?
navigate();
