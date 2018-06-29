# Primitive web-server
A primitive web server for experiments with web crawler's behavior on different HTTP statuses ([301 redirect](https://en.wikipedia.org/wiki/HTTP_301)). Based on [gulp-webserver](https://github.com/schickling/gulp-webserver).

## Dependencies
```bash
npm install gulp
npm install gulp-webserver
```

## How to run
From the project root directory:

```bash
gulp # Default web server without redirects
gulp redirect # Configuration with redirect third.html --> another.html
```
To exit, press ctrl + c.
