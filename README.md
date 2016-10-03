# Proxy Server
This is a Proxy Server for Node.js submitted as the pre-work requirement for Coderschool.vn.

# The directory of nodejs-proxy-server
```terminal
cd anna-project
```
## Walkthrough Gif:
Because my screen is too small to include multiple terminal window so I split it off into three gif files.

### Basic Setup
![alt tag](https://github.com/vagit/nodeJS-Basic/blob/master/01_.gif)

### Echo Server
```
curl -v -X POST http://127.0.0.1:8000 -d "hello self" -H "x-asdf: yodawg"
```
![alt tag](https://github.com/vagit/nodeJS-Basic/blob/master/02_.gif)


### Proxy Server
```
curl -v http://127.0.0.1:8001/asdf -d "hello proxy"
```
![alt tag](https://github.com/vagit/nodeJS-Basic/blob/master/03_.gif)



