document.addEventListener('DOMContentLoaded', (event) => {
    fetchCounter();
});

function fetchCounter() {
    console.log('==== DOM CONTENT LOADED, CALLING fetchCounter function') // logging
    fetch('http://backend:5000/counter')
        .then(response => response.json())
        .then(data => {
            document.getElementById('counter').innerText = data.counter;
        })
        .catch(error => console.error('Error fetching counter:', error));
}

function incrementCounter() {
    console.log('==== BUTTON CLICKED, CALLING incrementCounter function') // logging
    fetch('http://backend:5000/increment', {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('counter').innerText = data.counter;
    })
    .catch(error => console.error('Error incrementing counter:', error));
}