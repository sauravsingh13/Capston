var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var usersCOLL = require("../Schemas/userSchema");
var adminCOLL = require("../Schemas/adminSchema");

router.get('/users', function(req, res, next) {
    usersCOLL.find({"username": req.query.username, "password": req.query.password}, function(err, _data){
        if(err) return console.log("got some error");
        else{
            var result = {};
            if(_data.length > 0){
                result.login = "LoggedIn";
                result.user = _data[0];
            }else{
                result.login = "Failed";
                result.user = [];
            }
            res.json(result);
        }          
      });    
});

router.get('/admin', function(req, res, next) {
    adminCOLL.find({"username": req.query.username, "password": req.query.password}, function(err, _data){
        console.log("_data===================>", _data)
        if(err) return console.log("got some error");
        else{
            var result = {};
            if(_data.length > 0){
                result.login = "LoggedIn";
                result.admin = _data[0];
            }else{
                result.login = "Failed";
                result.admin = [];
            }
            res.json(result);
        }
      });    
});

module.exports = router;
