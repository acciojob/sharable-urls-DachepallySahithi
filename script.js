document.getElementById('button').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var year = document.getElementById('year').value;
    var url = 'https://localhost:8080/';

    var queryString = [];
    if (name) {
        queryString.push('name=' + encodeURIComponent(name));
    }
    if (year) {
        queryString.push('year=' + encodeURIComponent(year));
    }

    if (queryString.length > 0) {
        url += '?' + queryString.join('&');
    }

    // Update the displayed URL
    document.getElementById('url').textContent = url;
});
