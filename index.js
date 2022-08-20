//import ‘http’ module from Node.js
let myHttp = require("http");

// createServer() is a method of Node.js that creates a HTTP server object, which makes my computer act like an HTTP server
let myServer = myHttp.createServer( 

  function( req, res ) {
    console.log( "Let's look at this big old response object:");
    console.log( req );
    console.log( "Pull out the req.url:");
    console.log( req.url );

    let displayText;
    
    if ( req.url === "/" ) {
      displayText = "Welcome home!";
    }
      else if( req.url === "/about" ){
      displayText = "This is the about page. It is not exciting.";
    }
      else {
      displayText = "This is the wildcard page for everything else. You're a wild animal. ";
    }

    // writeHead() is an inbuilt method of the ‘http’ module which sends a response header to the request
    res.writeHead( 200, { "Content-Type": "text/plain" } );

    // end() inbuilt method that writes the data in the argument and ends the response
    res.end( displayText + "\n" );
  }
 );

// listen() is built in http method that listens on a specifc port or IP address 
myServer.listen(8080, "0.0.0.0");

console.log("Liftoff. 🚀  We have a server up and running!");