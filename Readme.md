# Real time experiments

Inspired by:
https://www.new-bamboo.co.uk/blog/2009/12/08/real-time-online-activity-monitor-example-with-node-js-and-websocket/

This is good:
https://blog.kdamball.com/2014/07/09/nodejs-file-streams-reading-and-piping/

## TODO

* Have a sample.txt file, it is like a log file. Add new content to the sample.txt, it should be streamed to the console and to a web page using socket connection, real-time.

* [x] Watch a text file change
* [x] Stream to console
* [x] Create a webserver and serve an index.html with connected javascript, watch on a socket port
* [x] Stream data to that socket port

Useful packages:

* [chokidar](https://github.com/paulmillr/chokidar) for watching file changes
 