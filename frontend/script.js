document.addEventListener('DOMContentLoaded', (event) => {
    fetchCounter();
});

function fetchCounter() {
    fetch('http://localhost:5000/counter')
        .then(response => response.json())
        .then(data => {
            document.getElementById('counter').innerText = data.counter;
        })
        .catch(error => console.error('Error fetching counter:', error));
}

function incrementCounter() {
    fetch('http://localhost:5000/increment', {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('counter').innerText = data.counter;
    })
    .catch(error => console.error('Error incrementing counter:', error));
}