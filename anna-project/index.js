let http = require('http')
let request = require('request')

// Place near the top of your file, just below your other requires
let url = require('url')
// Set a the default value for --host to 127.0.0.1
let argv = require('yargs')
    .default('host', '127.0.0.1:8000')
    .argv

// Get the --port value
// If none, default to the echo server port, or 80 if --host exists
let port = argv.port || (argv.host === '127.0.0.1' ? 8000 : 80)


let destinationUrl = argv.url || url.format({
       protocol: 'http',
       host: argv.host,
       port
    })

http.createServer((req, res) => {
    console.log(req.headers)
    for (let header in req.headers) {
        res.setHeader(header, req.headers[header])
    }
    req.pipe(res)
}).listen(8000)

let destinationUrl = '127.0.0.1:8000'
http.createServer((req, res) => {
  console.log(`Proxying request to: ${destinationUrl + req.url}`)
  // Proxy code here
    let options = {
        headers: req.headers,
        url: `http://${destinationUrl}${req.url}`
    }
    // Use the same HTTP verb
    options.method = req.method
    let outboundResponse = request(options)
    outboundResponse.pipe(res)

    // Note: streams are chainable
    // readableStream -> writable/readableStream -> writableStream
    req.pipe(request(options)).pipe(res)
}).listen(8001)


// Get the --port value
// If none, default to the echo server port, or 80 if --host exists
let port = argv.port || (argv.host === '127.0.0.1' ? 8000 : 80)

// Update our destinationUrl line from above to include the port
let destinationUrl = url.format({
   protocol: 'http',
   host: argv.host,
   port
})
