const http = require('http')
const port = 4000
const host = "localhost"

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'text/html');

  const { method } = request;
 
    if(method === 'GET') {
        // response ketika GET
    }
 
    if(method === 'POST') {
        // response ketika POST
    }
 
    if(method === "PUT") {

    }

    if(method === "DELETE") {
      
    }

 
  response.statusCode = 200;
  response.end('<h1>Halo HTTP Server!</h1>');
}

const server = http.createServer(requestListener)

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`)
})