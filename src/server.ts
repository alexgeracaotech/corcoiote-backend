import http from 'node:http';

http.createServer((_request, response) => {
	response.writeHead(200, { 'content-type': 'text/plain' });
	response.end('Hello World!');
}).listen(Number(process.env.PORT));
