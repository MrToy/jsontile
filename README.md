![jsontile](https://nodei.co/npm/jsontile.png?downloads=true&stars=true)

JsonTile is a util for transform the json format
======

## Install

### NPM

```bash
$ npm install xss
```

## Usages

```javascript
var jsontile = require('jsontile')
var obj={
	a:1,
	b:[
		{c:"2"},
		{d:"3"}
	]
}
obj=jsontile(obj)
console.log(obj)
//will get { a: 1, 'b.0.c': '2', 'b.0.d': '3' }
```

## Examples

It is useful for deal with http query,just like:

```javascript
var querystring=require('querystring')
var jsontile = require('jsontile')
var obj={
	a:1,
	b:[
		{c:"2"},
		{d:"3"}
	]
}
var str=querystring.stringify(jsontile(obj))
console.log(str)
//will get 'a=1&b.0.c=2&b.0.d=3'
```

It is easy to append json info on http get request