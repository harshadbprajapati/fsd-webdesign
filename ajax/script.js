// script.js using Fetch API
document.addEventListener('DOMContentLoaded', function () {
    let outputElement = document.getElementById('output');

    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            outputElement.innerHTML = '<p>Title: ' + data.title + '</p>';
        })
        .catch(error => console.error('Error:', error));
});



// document.addEventListener('DOMContentLoaded', function () {
//     // Select the element where you want to display the data
//     var outputElement = document.getElementById('output');
//
//     // Create a new XMLHttpRequest object
//     var xhr = new XMLHttpRequest();
//
//     // Configure it: GET-request for the URL /data
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
//
//     // Send the request
//     xhr.send();
//
//     // This function will be called whenever the state of the AJAX request changes
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             // Parse the JSON response
//             var data = JSON.parse(xhr.responseText);
//
//             // Update the HTML content with the fetched data
//             outputElement.innerHTML = '<p>Title: ' + data.title + '</p>';
//         }
//     };
// });

