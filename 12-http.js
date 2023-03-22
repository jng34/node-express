const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page!");
  } else if (req.url === "/about") {
    res.end("Here is our story.");
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page that you are looking for</p>
      <a href="/">Back home</a>
    `);
  }
});

server.listen(5000);



// example

/*
const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request event')
  if (req.url === '/about') {
    res.end('Just a little about me')
  } else {
    res.end("Hello world!")
  }
})

server.listen(5000, () => {
  console.log('Server listening to port : 5000....')
})

 */