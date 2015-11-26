YAML = require('yamljs');
var fs = require('fs');

var jsonFilename = '../clashes.json';
var dir = '../clashes/';

var data = [];
fs.readdir(dir, function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
        var object = YAML.load(dir + file);
        data.push(object);
    });
    fs.writeFile(jsonFilename, JSON.stringify(data, null, 2), function(err) {
      if(err) {
        throw err;
      } else {
        console.log("JSON saved to " + jsonFilename);
      }
    });
});
