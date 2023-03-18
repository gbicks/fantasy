
const url = "https://raw.githubusercontent.com/<username>/<repo>/<branch>/<path-to-json-file>.json";

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Output the entire JSON data object
    console.log(data.property1); // Output the value of property1 in the JSON data object
  })
  .catch(error => console.error(error));
