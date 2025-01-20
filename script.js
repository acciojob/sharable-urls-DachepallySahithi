// your code here
document.getElementById('button').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var year = document.getElementById('year').value;
    var url = 'https://localhost:8080/';

    if (name) {
        url += 'name=' + encodeURIComponent(name);
    }

    if (year) {
        if (name) {
            url += '&';
        } else {
            url += '?';
        }
        url += 'year=' + encodeURIComponent(year);
    }

    document.getElementById('url').textContent = url;
});
