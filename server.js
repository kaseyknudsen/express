const express = require("express");

const hostname = "localhost";
const port = 3000;

//this returns an express server application thats now stored in app
const app = express();

/*  use takes a callback function which is called a middleware function. It takes 3 parameters
1) req
2) res
3) next (function)
*/
app.use((req, res) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

//creates an instance of the http server class and starts listening to it
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:{port}/`);
});
