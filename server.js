const express = require("express");
const morgan = require("morgan")

const hostname = "localhost";
const port = 3000;

//this returns an express server application thats now stored in app
const app = express();
//this will configure morgan to use the development version which will print more info to the screen
app.use(morgan('dev'))

/* set up express to serve static files from the public folder. With express.static, we can do this
 in a single line*/
//__dirname gives us the absolute path
app.use(express.static(__dirname + '/public'))

/*  use takes a callback function which is called a middleware function. It takes 3 parameters
1) req
2) res
3) next (function)
*/
app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

//creates an instance of the http server class and starts listening to it
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:{port}/`);
});

