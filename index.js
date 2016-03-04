var fs = require("fs");
eval(fs.readFileSync(__dirname + "/server/db.js")+'');
var express = require('express');
var bodyParser = require('body-parser');
var swig = require('swig');
var jsonfile = require('jsonfile');
var util = require('util');

var express = require('express');
var path = require('path');

var app = express();
var port = 5000;
app.use(express.static('public'));
app.use(express.static('view'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('html', swig.renderFile);


app.get('/', function(req, res){
  
  
 
  res.render(path.join(__dirname + '/view/index.html'),[]);  
  
  
    
});

app.get('/viewall', function(req, res){
  
  
 
  var file = 'this.json'
  jsonfile.readFile(file, function(err, obj) {
   
       
  })    
  
  SelectBlog.selecAllBlogs(req, res, function(obj) {
     res.json(obj);
  });
  
  
  
    
});

app.listen(port, function(err){
    
    console.log("Application is Running on port " + port);
    
});





