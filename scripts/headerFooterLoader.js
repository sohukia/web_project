fetch('/static/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
        
        const script = document.createElement('script');
        script.src = '/scripts/appbar.js';
        document.getElementById('header').appendChild(script);
    })
    .catch(error => console.error('Error loading header:', error));

fetch('/static/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));