# webpack-html-template [![Build Status](https://travis-ci.org/gigwalk-corp/webpack-html-template.svg?branch=master)](https://travis-ci.org/gigwalk-corp/webpack-html-template)

> Stupid simple module to handle templating data for [`html-webpack-plugin`](https://github.com/ampedandwired/html-webpack-plugin).


## Install

```
$ npm install --save webpack-html-template
```


## Usage

```js
var webpackHtmlTemplate = require('webpack-html-template');

webpackHtmlTemplate('./my-template', {data}, cb);
//=> <html>....
```

## API

### webpackHtmlTemplate(template, data ,[cb])

#### template

*Required*  
Type: `string`

Template file path to read from

#### data

Data to use with preprocess. Or you can use environment variables.

## License

MIT © [Gigwalk](http://gigwalk.com)
