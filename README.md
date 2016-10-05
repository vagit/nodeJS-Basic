# Proxy Server

This is a Proxy Server for Node.js submitted as the [pre-work](http://courses.codepath.com/snippets/intro_to_nodejs/prework) requirement for Coderschool.vn.

Time spent: 6 hours

# The directory of nodejs-proxy-server
```terminal
cd anna-project
```
## Walkthrough Gif:
Because my screen is too small to include multiple terminal window so I split it off into three gif files.


Walkthrough Gif:

![alt tag](https://github.com/vagit/nodeJS-Basic/blob/master/Walkthrough.gif)

Note: to embed the gif file, just check your gif file into your repo and update the name of the file above.

## Starting the Server

```
npm start
```

## Features

### Echo Server:

```bash
curl -v -X POST http://127.0.0.1:8000 -d "hello self" -H "x-asdf: yodawg"
```

### Proxy Server:

Port 8001 will proxy to the echo server on port 8000.

```bash
curl -v http://127.0.0.1:8001/asdf -d "hello proxy"
```

### Configuration:

#### CLI Arguments:

The following CLI arguments are supported:

##### `--host`

The host of the destination server. Defaults to `127.0.0.1`.

##### `--port`

The port of the destination server. Defaults to `80` or `8000` when a host is not specified.

##### `--url`

A single url that overrides the above. E.g., `http://www.google.com`

##### `--logfile`

Specify a file path to redirect logging to.

#### Headers

The follow http header(s) are supported:

##### `x-destination-url`

Specify the destination url on a per request basis. Overrides and follows the same format as the `--url` argument.




