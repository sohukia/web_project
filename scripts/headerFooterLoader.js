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
        // wait for the footer to load and repace {{ year }} with the current year
        const year = new Date().getFullYear();
        document.querySelectorAll('.year').forEach(element => {
            element.innerHTML = year;
        });
    })
    .catch(error => console.error('Error loading footer:', error));