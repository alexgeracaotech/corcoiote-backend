import http from 'node:http';

http.createServer(() => console.log('knocked on the door!')).listen(3000);
