var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile');
var util = require('util');
var fs = require('fs');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var pool = mysql.createPool({
    
    connectionlimit:100,
    host:'localhost',
    user: 'root',
    password: '',
    database: 'db_blog',
    debug:false
    
});


var SelectBlog = {
    
    selecAllBlogs: function(req, res, callback){
        
        pool.getConnection(function(err, connection){
            var JsonOut;
            if(err){
                connection.release();
                callback({"code":100,"Status":"Error In Connection"});
                return;
            }
            
            console.log("Connected ID "+connection.threadId);
            
            connection.query("select * from tbl_blog", function(err, rows){
                
                connection.release();
                if(!err){
                  
                    var JSonArr = rows;
                    callback(JSonArr);
                    
                }
                
            });
            
            connection.on('error', function(err){
            
                callback({"code":100,"Status":"Error In Connection"});
                
            });
            
        });
        
    },
    
    
    
   
}





