// The function will make an HTTP GET request to a file and load its content as a text
// Example Usage
// <code code-include="/code/quadratic_equation.cpp"></code>

const baseUrl = window.location.origin;

window.onload = function() {
	let elements = document.getElementsByTagName('code'), i;
	//console.log(elements);

	for (i in elements) {
		if (elements[i].hasAttribute && elements[i].hasAttribute('code-include')) {
			customLoadFileContent(elements[i], elements[i].getAttribute('code-include'));
		}
  }

  function customLoadFileContent(element, absoluteFilePath) {
    let resultText = "";

    //Step 1. Get File
    let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                resultText = this.responseText;
                element.textContent = resultText;

                // Step 2. Escape syntax for HTML special tags
                //resultText = resultText.replace(/</gi, "&lt;");
                //resultText = resultText.replace(/>/gi, "&gt;");
        }
    };
    xhttp.open("GET", window.location.origin + absoluteFilePath, true);
    xhttp.send();
  }
  
}