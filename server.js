const http = require('http');
const fetch = require('node-fetch');

const server = http.createServer((req, res) => {
    if (req.url === 'dashboard.html') {
        const phpScriptUrl = 'http://localhost/fetch_characters.php';

        fetch(phpScriptUrl)
            .then(response => response.json())
            .then(data => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(data));
            })
            .catch(error => {
                console.error('Error fetching characters:', error);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Database error' }));
            });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(8888, () => {
    console.log('Server is running on port 8888');
});
