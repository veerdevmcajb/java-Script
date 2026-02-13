/*
! Different ways to run JavaScript programs:

 ? 1.   Browser Console:  REPL
   -    Run JavaScript directly in the browser's developer console.
   -   Example:  

       File - javascript
     // Open browser console (usually F12 or right-click and "Inspect")
     console.log("Hello, Browser Console!");
       File - 

 ? 2.   HTML Script Tag:  
   -    Include JavaScript code in an HTML file using `<script>` tags.
   -   Example:  
   
   File - html
     <!-- index.html -->
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <meta charset="UTF-8" />
         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>HTML Script Example</title>
       </head>
       <body>
       </body>
       <script>
         console.log("Hello, HTML Script!");
       </script>
     </html>
       File - 

 ? 3.   External Script File:  
   -    Link an external JavaScript file in an HTML document.
   -   Example:  
   
   File - html
     <!-- index.html -->
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <meta charset="UTF-8" />
         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>External Script Example</title>
         <script src="script.js" defer></script>
       </head>
       <body>
         <!-- Body content -->
       </body>
     </html>
       File - 
       File - javascript
     // script.js
     console.log("Hello, External Script!");
       File - 

 ? 4.   REPL (Read-Eval-Print Loop):  
   -   Interactively run JavaScript code in a command-line environment.
   -   Example:   Open a terminal and type `node` to enter the Node.js REPL.
   
   File - javascript
     > console.log("Hello, REPL!");
       File - 

 ? 5.  IDE and Node.js:  
    - IDE (Integrated Development Environment) refers to a powerful editor.
    - It has many features that usually operates on a “whole project.” As the name suggests, it’s not just an editor, but a full-scale “development environment.”
    -    Run JavaScript files using the Node.js runtime.
    -   Example:   Save the following code in a file (e.g., `program.js`) and run it using 
    `node program.js` in the terminal.
    
   File - javascript
     // program.js
     console.log("Hello, Node.js!");
       File - 

 ? 6.   Online Code Editors:  
   -    Use online code editors like CodePen, JSFiddle, or Repl.it.
   -   Example:   Visit CodePen, create a new Pen, and enter JavaScript code in the JavaScript editor.

 ? 7.   Browser Extensions:  
   -    Some browsers have extensions that allow running JavaScript on specific web pages.
   -   Example:   Install a browser extension like "Custom JavaScript for Websites" and enter JavaScript code for a particular site.

 ? 8.   Server-Side:  
   -    Run JavaScript on the server using platforms like Node.js.
   -   Example:   Create a server file (e.g., `server.js`) and run it with `node server.js`.
   
   File - javascript
     // server.js
     const http = require('http');
     http.createServer((req, res) => {
       res.writeHead(200, {'Content-Type': 'text/plain'});
       res.end('Hello, Server!');
     }).listen(3000, 'localhost');
       File - 

*/
