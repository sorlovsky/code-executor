var express = require('express')
var app = express()
var PythonShell = require('python-shell');

var fs = require('fs');
fs.writeFile("input.py", "print(4*3)", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.get('/results', function (req, res) {
	PythonShell.run('input.py', function (err, results) {
	  if (err) throw err;
	  console.log('finished', results);
	  res.send(results)
	});
  
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
