# Node.js: Master the Fundamentals in 8 Steps

Node.js is a JavaScript runtime that lets you build fast, scalable server-side applications (backend) using the same language you already know from website development (frontend). This comprehensive guide will take you from zero to building your first Node.js server in eight straightforward steps.

## What is Node.js?

There's nothing special about JavaScript, or any programming language for that matter. It's all just text in a text file. Thus, JavaScript needs someone who can understands its syntax, carry out its instructions, and bring it to life. It needs... a **runtime environment**.

When JavaScript was created in 1995, web browsers were runtime environment that could understand and "execute" JavaScript code. Yes, your Google Chrome has a V8 JavaScript Engine that interprets and runs JavaScript code! I think you may have understood what this means: no browser = no JavaScript. :(

But then in 2009, Node.js was created to break JavaScript free from the browser! By embedding the V8 engine, Node.js enables JavaScript to run anywhere (servers, command-line tools, desktop applications, and more). Now, you can program the frontend (design a website) and backend (write some underlying business logic) knowing just ONE language - JavaScript!

### What Can Node.js Do?

Sitting on servers, Node.js listens. It patiently waits for HTTP requests from the Internet. When a user's browser sends an HTTP request to a URL, pointing to your Node.js server, Node.js running on your server takes in that request, processes it the way you programmed it, and sends back a response.

JavaScript + Node.js is also known to be super fast because it is good at managing multiple concurrent (aka. at-the-same-time) connections efficiently thanks to its asynchronous, non-blocking architecture. More on this later!

## Installing Node.js

Download and install Node.js from the official website (nodejs.org). The installation includes both Node.js and npm (Node Package Manager), which you'll use to manage third-party Node.js libraries/packages.

To verify the installation, open your terminal or command prompt and type:

```bash
node --version
```

You should see the version number of your Node.js installation displayed.

## Hello World

Once Node.js is installed, you can execute JavaScript code directly from the command line. Type `node` in your terminal to enter the interactive REPL (Read-Eval-Print Loop):

```bash
node
```

You can now execute JavaScript commands interactively. However, most applications are built using JavaScript files.

Create a file named `index.js` (yes, it has to be `index.js` because this is what Node.js looks for as the starting place to execute JavaScript code. It's like how C++ looks for main()!).

In this file, add:

```javascript
console.log('Hello World');
```

Run this file using:

```bash
node index.js
```

Or simply:

```bash
node .
```

The `node .` command automatically looks for `index.js` in the current directory and executes it.

## Node.js Superpowers

JavaScript behaves similarly in Node.js and browsers, but there are **key differences** regarding the available built-in objects.

### Built-in Global Identifiers

**console**: Available in both Node.js and browsers, the `console` object lets you output information for debugging.

```javascript
console.log('This works everywhere!');
```

**global**: Node.js provides a `global` object (equivalent to `window` in browsers) where you can attach properties accessible throughout your application:

```javascript
global.mysteryNumber = 42;
console.log(global.mysteryNumber); // 42
```

**process**: This Node.js-specific object provides information about the current process:

```javascript
console.log(process.platform); // 'win32', 'darwin', 'linux', etc.
console.log(process.env.USER); // Your username
```

The `process` object is invaluable for accessing environment variables and system information.

## Events

Node.js is officially described as an "asynchronous event-driven JavaScript runtime". Understanding what this means is crucial to mastering Node.js.

### Event-Driven Architecture

Node.js implements an **event loop** that continuously monitors for events and executes callbacks when they occur. The event loop pushes intensive operations (like file I/O or database queries) off to a separate thread pool running in the background (managed by libuv), while only fast, non-blocking operations run on the main thread.

In other words, Node.js is pretty smart and knows to "let the eggs cook in the background" (slow operation) as it gets the plate out (fast operation) and arrange the bread (fast operation). When the egg is done cooking, Node.js turns back to the egg and do whatever is needed next for it (callbacks), like turning off the heat and putting the egg on the bread)!

This architecture makes Node.js extremely fast and suitable for real-time web applications that handle thousands of concurrent connections.

### Creating Custom Events

To observe this "clever juggling behavior" of Node.js, we can use the built-in `events` module to create and execute custom events:

```javascript
const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

// Register an event listener
eventEmitter.on('aPlusReceived', () => {
  console.log('eat rice'); // This is the callback
});

// Emit the event
eventEmitter.emit('aPlusReceived'); // Output: 'eat rice'
eventEmitter.emit('aPlusReceived'); // Output: 'eat rice'
eventEmitter.emit('bPlusReceived'); // Nothing happens - no listener registered for this (because Mom is not very happy :( )
```

The `on` method registers a listener for a specific event, and `emit` triggers that event, executing all registered callbacks.

## File System

Node.js provides a built-in `fs` module for file system operations. File I/O is inherently slow because it involves reading from disk, making it a perfect candidate for asynchronous operations.

Create a text file named `hello.txt` with some content before running these examples.

### Blocking (Synchronous) Approach

```javascript
const { readFileSync } = require('fs');

const txt = readFileSync('./hello.txt', 'utf8');
console.log(txt);
console.log('But I wanna do this ASAP!');
```

With `readFileSync`, the program **blocks** and waits for the file to be read completely before continuing. The second console.log won't execute until the file read completes.

### Non-Blocking (Asynchronous with Callbacks)

```javascript
const { readFile } = require('fs');

readFile('./hello.txt', 'utf8', (err, txt) => {
  console.log(txt); // Executes when file read completes
});

console.log('But I wanna do this ASAP!'); // Executes immediately
```

With `readFile`, the program continues executing immediately. The callback function runs when the file read operation completes, allowing your application to remain responsive.

### Non-Blocking (Asynchronous with Promises)

Modern Node.js provides a promise-based API that's cleaner than callbacks:

```javascript
const { readFile } = require('fs/promises');

async function helloWorld() {
  const txt = await readFile('./hello.txt', 'utf8');
  console.log(txt);
}

helloWorld();
console.log('But I wanna do this ASAP!'); // Still executes immediately
```

Using `async/await` provides cleaner, more readable asynchronous code compared to callback-based approaches.

## Modules

Modules are reusable pieces of code—essentially libraries that you can import and use in your applications.

### Built-in Modules

Node.js comes with many built-in modules like `fs` (file system) and `events` that you've already seen. Import them using the `require()` function:

```javascript
const fs = require('fs');
const { EventEmitter } = require('events');
```

### Creating Your Own Modules

Create a file named `my-module.js`:

```javascript
module.exports = { 
  aPlus: true 
};
```

Import and use your custom module:

```javascript
const myModule = require('./my-module.js');
console.log(myModule); // { aPlus: true }

if (myModule.aPlus) {
  eventEmitter.emit('aPlusReceived');
}
```

The `module.exports` object defines what your module exposes to other files.

### Using Third-Party Modules

The Node.js ecosystem includes hundreds of thousands of packages created by developers worldwide. Use npm (Node Package Manager) to install them:

```bash
npm init -y
```

This creates a `package.json` file that stores project metadata and dependencies. Install packages using:

```bash
npm install express
```

This adds Express as a dependency in `package.json` and downloads the code to a `node_modules` folder. **Never manually edit files in node_modules**—npm manages this folder automatically.

Use installed packages in your code:

```javascript
const express = require('express');
```

## Making a Server

Let's build a simple HTTP server to handle requests and send responses.

### Using the Built-in HTTP Module

```javascript
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {

  // Home GET Endpoint
  if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Home Page</h1>');

  // About GET Endpoint
  } else if (req.url === '/about' && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Y u reading my About Page?');

  // API GET Endpoint
  } else if (req.url === '/api/users' && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      users: ['Ron', 'Jeff', 'Veronica', 'Gabe'] 
    }));

  // 404 Handling
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

This creates a basic server with multiple endpoints, but the code becomes verbose quickly with many routes.

### Using Express Framework

Express simplifies server creation dramatically :

```javascript
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Home GET Endpoint
app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1>');
});

// About GET Endpoint
app.get('/about', (req, res) => {
  res.send('Y u reading my About Page?');
});

// API GET Endpoint
app.get('/api/users', (req, res) => {
  res.json({ users: ['Ron', 'Jeff', 'Veronica', 'Gabe'] });
});

// API POST endpoint
app.post('/api/users', (req, res) => {
  const userData = req.body;
  // Call saveToDatabase() here
  res.status(201).json({ 
    message: 'User created', 
    user: userData 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

Express provides a clean, intuitive API for routing, middleware, and HTTP utilities, making it the most popular Node.js web framework.

You've now mastered the fundamentals of Node.js—from understanding its event-driven architecture to building a fully functional web server. These core concepts form the foundation for building scalable, real-time applications with JavaScript on the server.

[Content based on this amazing tutorial video!](https://www.youtube.com/watch?v=ENrzD9HAZK4)