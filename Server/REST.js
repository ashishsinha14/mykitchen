var mysql = require("mysql");

function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {
    // Default Route
    router.get("/",function(req,res){
        res.json({"Message" : "Hello World !"});
    });
    // Get: Return all Caterers
    router.get("/caterers",function(req,res){
        var query = "SELECT * FROM ??";
        var table = ["caterer_login"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });
    //Get : Return Caterer whose ID has been passed
    router.get("/caterers/:caterer_id",function(req,res){
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["caterer_login","caterer_id",req.params.caterer_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });
    //POST: Insert into caterer_login
    router.post("/caterers",function(req,res){
        var query = "INSERT INTO ??(??,??) VALUES (?,?)";
        var table = ["caterer_login","caterer_email","caterer_password",req.body.email,md5(req.body.password)];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "User Added !"});
            }
        });
    });
    //PUT: UPDATE caterer_login
    router.put("/caterers",function(req,res){
        var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        var table = ["caterer_login","caterer_password",md5(req.body.password),"caterer_email",req.body.email];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Updated the password for email "+req.body.email});
            }
        });
    });
     // Get: Return all Customers
    router.get("/customers",function(req,res){
        var query = "SELECT * FROM ??";
        var table = ["cust_login"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });
    //Get : Return Customer whose ID has been passed
    router.get("/customers/:cust_id",function(req,res){
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["cust_login","cust_id",req.params.cust_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });
    //POST: Insert into cust_login
    router.post("/customers",function(req,res){
        var query = "INSERT INTO ??(??,??) VALUES (?,?)";
        var table = ["cust_login","cust_email","cust_password",req.body.email,md5(req.body.password)];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "User Added !"});
            }
        });
    });
    //PUT: UPDATE cust_login
    router.put("/customers",function(req,res){
        var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        var table = ["cust_login","cust_password",md5(req.body.password),"cust_email",req.body.email];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Updated the password for email "+req.body.email});
            }
        });
    });
}

module.exports = REST_ROUTER;