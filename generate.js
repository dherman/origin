var fs = require('fs');
var hb = require('handlebars');

var source = fs.readFileSync('index.template.html', 'utf8');
var template = hb.compile(source);
var data = JSON.parse(fs.readFileSync('bookmarks.json', 'utf8'));
var output = template(data);

console.log(output);
