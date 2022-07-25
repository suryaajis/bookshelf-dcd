const http = require('http')
const port = 4000
const host = "localhost"

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'text/html');
  response.statusCode = 200;

  const { url, method } = request;
    
    if (url === "/") {
      if(method === 'GET') {
        response.end('<h1>Halo HTTP Server GET Method!</h1>');
      }
    }
 
    if (url === ".item") {

      if(method === 'GET') {
        response.end('<h1>Halo HTTP Server GET Method!</h1>');
      } else if(method === 'POST') {
        let body = [];
   
        request.on('data', (chunk) => {
          body.push(chunk);
        });
     
        request.on('end', () => {
          body = Buffer.concat(body).toString();
          const data = JSON.parse(body)
            
          response.end(`<h1>Halo HTTP Server POST Method! ${data}</h1>`);
        });
      } else if (method === "PUT") {
        response.end('<h1>Halo HTTP Server PUT Method!</h1>');
      } else {
        response.end('<h1>Halo HTTP Server DELETE Method!</h1>');
      }

    }
}

const server = http.createServer(requestListener)

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`)
})